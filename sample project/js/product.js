var productBigImg = document.getElementById('productImg');

var productName = document.getElementById("name");

// Product Brand
var productBrand = document.getElementById("brand");

// Product Price
var productPrice = document.getElementById("price");

// Product Description
var productDescription = document.getElementById("description");

// Product Preview Image 0
var photo0 = document.getElementById("img0");

// Product Preview Image 1
var photo1 = document.getElementById("img1");

// Product Preview Image 2
var photo2 = document.getElementById("img2");

// Product Preview Image 3
var photo3 = document.getElementById("img3");

// Product Preview Image 4
var photo4 = document.getElementById("img4");

// Product Preview Image 5
var photo5 = document.getElementById("img5");


var productData = [];

var pageId = window.location.search.split('=')[1];
console.log(pageId);
$.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product/' + pageId, function(responseText) {
    productData = responseText;
    console.log(productData);
    productBigImg.src = productData.preview;
    productName.innerHTML = productData.name;
    productBrand.innerHTML = productData.brand;
    productPrice.innerHTML = productData.price;
    productDescription.innerHTML = productData.description;
    photo0.src = productData.photos[0];
    photo1.src = productData.photos[1];
    photo2.src = productData.photos[2];
    photo3.src = productData.photos[3];
    photo4.src = productData.photos[4];



    photo0.onclick = function() {
        productBigImg.src = productData.photos[0];
    }
    photo1.onclick = function() {
        productBigImg.src = productData.photos[1];
    }
    photo2.onclick = function() {
        productBigImg.src = productData.photos[2];
    }
    photo3.onclick = function() {
        productBigImg.src = productData.photos[3];
    }
    photo4.onclick = function() {
        productBigImg.src = productData.photos[4];
    }
    $(document).on("click", ".previewImg img", function() {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active");
    });

    var addToCartBtn = document.getElementById('add-to-cart');
    var cart = document.getElementById('cart-count');
    var myCartData = [];
    var cartIntialValue;

    if (localStorage.getItem('cart-count') == null) {
        localStorage.setItem('cart-count', '0');

    } else {
        var cartValue = localStorage.getItem('cart-count');
        localStorage.setItem('cart-count', cartValue);
        console.log(cartValue);
    }

    function cartCount() {
        if (window.localStorage.getItem('cart-count') === null) {
            cartIntialValue = 0;
        } else {
            cartIntialValue = JSON.parse(localStorage.getItem('cart-count'));
            cart.innerHTML = cartIntialValue;
            console.log('cart int val ' + cartIntialValue);
        }
        var cartCurrentValue = cartIntialValue + 1;
        window.localStorage.setItem('cart-count', cartCurrentValue);
        cart.innerHTML = window.localStorage.getItem('cart-count');
        console.log('cart current val ' + cartCurrentValue);

    }
    cart.innerHTML = window.localStorage.getItem('cart-count');

    function addDataIntoList(productData) {

        if (window.localStorage.getItem('product-list') === null) {
            myCartData = [];
        } else {
            myCartData = JSON.parse(window.localStorage.getItem('product-list'));
        }
        if (myCartData.length === 0) {
            var myObj = {
                id: productData.id,
                title: productData.name,
                count: 1,
                price: productData.price,
                preview: productData.preview
            };
            myCartData.push(myObj);
        } else if (myCartData.length != 0) {
            var w = 0;
            for (var i = 0; i < myCartData.length; i++) {
                if (myCartData[i].id == productData.id) {
                    myCartData[i].count = parseInt(myCartData[i].count) + 1;
                    w += 1;
                }
            }

            if (w == 0) {
                var myObj = {
                    id: productData.id,
                    title: productData.name,
                    count: 1,
                    price: productData.price,
                    preview: productData.preview

                };
                myCartData.push(myObj);

            }
        }
        window.localStorage.setItem('product-list', JSON.stringify(myCartData));

    }
    addToCartBtn.addEventListener('click', function() {
        var productId = window.location.search.split('=')[1];
        var urlLink = 'https://5d76bf96515d1a0014085cf9.mockapi.io/product/' + productId;

        function getDataForLocalStorage() {
            var http = new XMLHttpRequest();
            http.open('GET', urlLink, true);

            http.onreadystatechange = function() {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        var productData = JSON.parse(this.responseText);
                        addDataIntoList(productData);
                    }
                }
            }
            http.send();
        }
        cartCount();
        getDataForLocalStorage();
    });
});