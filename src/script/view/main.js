import DataSource from "../data/data-source.js";
import "../component/restaurant-list.js";
import "../component/search-bar.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const restaurantListElement = document.querySelector("restaurant-list");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchRestaurant(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    restaurantListElement.restaurants = results;
  };

  const fallbackResult = (m) => {
    restaurantListElement.renderError(m);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
