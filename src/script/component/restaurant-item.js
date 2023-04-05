class RestaurantItems extends HTMLElement{
    constructor(){
        super()
        this.shadowDOM = this.attachShadow({
            mode: 'open'
        })
    }

    set restaurant(restaurant){
        this._restaurant = restaurant
        this.render()
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
        restaurant-item {
          justify-content: center;
          align-items: center;
          margin-top: 20px;
        }

        .restaurant-info {
          background-color: #dbf1e9;
          padding: 24px;
          margin-top: 20px;
        }
         
        .restaurant-info > h2 {
          font-weight: lighter;
        }
         
        .restaurant-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
        </style>
        <div class="restaurant-info">\n
        <h2> ${this._restaurant.name} </h2>\n
        <p> ${this._restaurant.description} </p> 
        </div>`
        
    }
}

customElements.define('restaurant-item', RestaurantItems)