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
          background-image: radial-gradient(circle, #dbf1e9, #d6f1e7, #d1f2e6, #cbf2e4, #c6f2e2);
          border: 2px solid black;
          padding: 24px;
          margin-top: 20px;
          transition: transform .5s;          
        }

        .restaurant-info:hover{
          transform: scale(1.2)
        }
         
        .restaurant-info > h2 {
          font-weight: 700;
        }
         
        .restaurant-info > textarea {
          font-family: Comfortaa, sans-serif;
          width: 95%;
          height: 100px;
          background-color: white;
          border: 1px solid black;
          border-radius: 10px;
          box-shadow: 0px 1.5px black;
          margin-top: 10px;
          padding: 7px;
          overflow: hidden;
          font-size: 15px;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
          overflow-y: scroll;
        }

        .categories{
            margin-top: 0;
            display: flex;
            flex-direction: row;
            gap: 10px;
        }

        .categories > .sub-categories {
            border: 2px solid black;
            box-shadow: 0px 2px black;
            border-radius: 20px;
            padding: 8px;
        }

        .categories > .sub-categories > span{
            font-weight: 700;
        }

        </style>
        <div class="restaurant-info">\n
            <h2> ${this._restaurant.name} </h2>\n
            <div class="categories">
                <div class="sub-categories">
                    <span>📍${this._restaurant.city}</span>
                </div>
                <div class="sub-categories">
                    <span>⭐ ${this._restaurant.rating}</span>
                </div>
            </div>
            <textarea readonly> ${this._restaurant.description} </textarea> 
        </div>`
        
    }
}

customElements.define('restaurant-item', RestaurantItems)