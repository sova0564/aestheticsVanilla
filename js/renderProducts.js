const productsContainer = document.querySelector("#products-container");

getProducts();

async function getProducts() {
  const response = await fetch("./js/products.json");

  const productsArray = await response.json();

  renderProducts(productsArray);
}

function renderProducts(productsArray) {
  productsArray.forEach(function (item) {
    const productHTML = ` <div class="card_wrap" id="${item.id}">
        <img
          src="./images/favorite_default.png"
          alt="favorite"
          class="favorite"
        />
        <img
          src="./images/${item.imgSrc}"
          alt="${item.title}"
        />
        <p class="title_card">${item.title}</p>
        <p class="price_card">${item.price} грн</p>
        <div class="price_wrap">
          <a href="${item.card}" class="button_more">Детальніше</a
          ><a href="#" class="button_card">В кошик</a>
        </div>
      </div>`;
    productsContainer.insertAdjacentHTML("beforeend", productHTML);
  });
}
