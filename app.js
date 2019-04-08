const request = require('request')
const geocode = require('./utils/geocode.js')
const getWeather = require('./utils/getWeather.js')


const address = process.argv[2]
if (address) {
    geocode(address, (error, {latitude, longitude, name}) => {
        
        if(error) {
            console.log(error)
        } else {
            console.log(name)
            getWeather(latitude+','+longitude, (error,data) => {
                if(error){
                    console.log(error)
                } else {
                    console.log(data)
                }
            })
        }
    })
} else {
    console.log('Please provide an address')
}



