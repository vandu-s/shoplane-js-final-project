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

var currentObj = null;
var addToCartBtn = document.get
var productData = [];

var pageId = window.location.search.split('=')[1];
console.log(pageId);
$.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product/' + pageId, function(responseText, status) {
    productData = responseText;
    currentObj = productData;
    console.log('currentobj', currentObj);

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



});
var addToCartBtn = document.getElementById('add-to-cart')

addToCartBtn.addEventListener('click', function() {
    alert('i m clicked');
    var productList = window.localStorage.getItem('product-list');
    productList = productList === null || productList === '' ? [] : productList;
    productList = productList.length > 0 ? JSON.parse(productList) : [];

    productList.push(currentObj);
    window.localStorage.setItem('product-list', JSON.stringify(productList));
    console.log('productList', productList);

    var foundAtPos = -1;
    for (var i = 0; i < productList.length; i++) {
        if (parseInt(productList[i].id) == parseInt(currentObj.id)) {
            foundAtPos = i;
            // console.log(foundAtPos);
        }
    }
    if (foundAtPos > -1) {
        productList[foundAtPos].count = productList[foundAtPos].count + 1;
        console.log('foundatposition', productList[foundAtPos].count);
        window.localStorage.setItem('product-list', JSON.stringify(productList));

    }
    // else
    //     currentObj.count = 1;
    // productList.push(currentObj);
    // console.log(productList);
    // window.localStorage.setItem('product-list', JSON.stringify(productList));


});
// localStorage.clear();