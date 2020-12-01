$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,

        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });





    var clothingCard = document.getElementById('clothing-card');
    var isAccessory = document.getElementById('accessories-card');

    function generateCard(data) {
        /* <div class="card" id="1">
            <a href="">
                <img class='img' src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg" alt="Men Navy Blue Solid Sweatshirt">
                <div class="details">
                    <h3 class='name' >Men Navy Blue Solid Sweatshirt</h3>
                    <h4 class='brand'>United Colors of Benetton</h4>
                    <h5 class='price'>Rs 2599</h5>
                </div>
            </a>
        </div>  */


        var card = document.createElement('div');
        card.className = 'card';

        var productLink = document.createElement('a');
        card.appendChild(productLink);
        productLink.href = './product.html?id=' + data.id;

        var thumbnail = document.createElement('img');
        thumbnail.src = data.preview;
        thumbnail.className = 'img';
        productLink.appendChild(thumbnail);

        var details = document.createElement('div');
        details.className = 'details';
        productLink.appendChild(details);

        //Create a H3 element with TEXT-NODE NAME
        var newTitleElement = document.createElement("h3");
        newTitleElement.className = 'name';
        newTitleElement.innerHTML = data.name;
        details.appendChild(newTitleElement);

        var newBrandElement = document.createElement("h4");
        newBrandElement.className = 'brand';
        newBrandElement.innerHTML = data.brand;
        details.appendChild(newBrandElement);

        var newPriceElement = document.createElement("h5");
        newPriceElement.className = 'price';
        newPriceElement.innerHTML = data.price;
        details.appendChild(newPriceElement);


        if (data.isAccessory === false) {
            clothingCard.appendChild(card);

        } else if (data.isAccessory === true) {

            isAccessory.appendChild(card);

        }
        return card;
    }
    // for (i = 0; i <= productList.length; i++) {
    //     generateCard(productList[i]);
    // }

    var productArr = [];

    function renderCardGrid() {
        for (i = 0; i < productArr.length; i++) {
            generateCard(productArr[i]);

        }
    }

    xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/product", true);
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState === 4) {
            productArr = JSON.parse(xhttp.responseText);
            console.log(productArr);
            renderCardGrid();
        }

    }
    xhttp.send();
});