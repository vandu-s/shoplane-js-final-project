// $(document).ready(function() {
var CheckOutList = document.getElementById('card-list');
// var playlist = {
//     preview: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5649908/2018/5/10/6bfe80cd-2f55-42bc-aa7f-e0d6c9e2ac531525936414747-SASSAFRAS-Women-Blue-Solid-Shirt-Dress-3831525936414532-1.jpg',
//     name: 'women fasion',
//     price: '3000',
//     count: '2'
// };

function createCheckoutCard(obj) {
    // <div class="checkout-card">
    //     <div>
    //         <img class="checkout-product-img" src="/assets/default-product.png" />
    //     </div>
    //     <div>
    //         <h4>Product Title</h4>
    //         <p>x3</p>
    //         <p>Amount: Rs <span>30000</span></p>
    //     </div>
    // </div>
    var card = document.createElement('div');
    card.classList.add('checkout-card');

    var firstInnerDiv = document.createElement('div');
    card.appendChild(firstInnerDiv);
    var productImg = document.createElement('img');
    productImg.classList.add('checkout-product-img');
    productImg.src = obj.preview;
    firstInnerDiv.appendChild(productImg);

    var secondInnerDiv = document.createElement('div');
    card.appendChild(secondInnerDiv);

    var productName = document.createElement('h4');
    productName.innerHTML = obj.name;
    secondInnerDiv.appendChild(productName);

    var productCount = document.createElement('p');
    productCount.innerHTML = 'x' + obj.count;
    secondInnerDiv.appendChild(productCount);

    var amountLabel = document.createElement('span');
    amountLabel.innerHTML = 'Amount: Rs ';
    secondInnerDiv.appendChild(amountLabel);

    var amountSpan = document.createElement('span');
    amountSpan.innerHTML = parseInt(obj.count) * parseInt(obj.price);

    var productAmount = document.createElement('p');
    productAmount.appendChild(amountLabel);
    productAmount.appendChild(amountSpan);
    secondInnerDiv.appendChild(productAmount);
    console.log(card);
    CheckOutList.appendChild(card);
    return card;

}
createCheckoutCard(playlist);

// });