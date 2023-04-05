class SearchBar extends HTMLElement{
    constructor(){
        super()
        this.shadowDOM = this.attachShadow({
            mode: 'open'
        })
    }

    connectedCallback(){
        this.render()
    }

    set clickEvent(event){
        this._clickEvent = event
        this.render()
    }

    get value(){
        return this.shadowDOM.querySelector('#searchElement').value
    }

    render(){
        this.shadowDOM.innerHTML = `
            <style>
            *{
                font-family: Comfortaa, sans-serif;
            }

            search-bar{
                margin-bottom: 10px;
            }

            .search-container {
            width: fit-content;
            align-items: center;
            justify-content: center;
            display: flex;
            margin: auto;
            margin-top: 1rem;
            background-color: #e7eeeb;
            border: 2px solid black;
            border-radius: 5px;
            padding: 16px;
            box-shadow: 0 1.5px black;
            }
            
            .search-container > input {
            padding: 16px;
            border-bottom: 1px solid black;
            font-weight: bold;
            border-radius: 2px;
            }
            
            .search-container > input:focus {
            outline: 0;
            border-bottom: 2px solid black;
            }
            
            .search-container > input:focus::placeholder {
            font-weight: bold;
            }
            
            .search-container > input::placeholder {
            color: black;
            font-weight: 100;
            }
            
            .search-container > button {
            cursor: pointer;
            padding: 16px;
            margin-left: 10px;
            background-color: black;
            color: white;
            border: 0;
            font-weight: 700;
            text-transform: uppercase;
            }
            
            </style>
            <div id="search-container" class="search-container">
            <input
            placeholder="Padang murah.."
            id="searchElement"
            type="search"
            />
            <button id="searchButtonElement" type="submit">Search</button>
            </div>
        `
        this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent)
    }
}

customElements.define('search-bar', SearchBar)