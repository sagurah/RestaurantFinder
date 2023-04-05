import "./restaurant-item.js";

class RestaurantList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: "open",
    });
  }

  set restaurants(restaurants = []) {
    this._restaurants = restaurants;
    this.render();
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
        <style>
            .placeholder{
                font-weight: lighter;
                color: rgba(0, 0, 0, 0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>
        `;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }

  render() {
    this.shadowDOM.innerHTML = "";
    this._restaurants.forEach((restaurant) => {
      const item = document.createElement("restaurant-item");
      item.restaurant = restaurant;
      this.shadowDOM.appendChild(item);
    });
  }
}

customElements.define("restaurant-list", RestaurantList);
