import axios from 'axios'

class DataSource {
    static searchRestaurant(key){
        return axios.get(`https://restaurant-api.dicoding.dev/search?q=${key}`)
            .then(response => {
                return response.data
            })
            .then(responseJson => {
                if(responseJson.restaurants){
                    return Promise.resolve(responseJson.restaurants)
                } else{
                    return Promise.reject(`${key} tidak ditemukan`)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export default DataSource