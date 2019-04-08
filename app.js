// Main app file for running the application

// Importing necessary libraries
const request = require('request')
const geocode = require('./utils/geocode.js')
const getWeather = require('./utils/getWeather.js')

// Reading arguments from command line
const address = process.argv[2]
if (address) {
    // Using the geocode method to get location data for user
    // entered string
    geocode(address, (error, {latitude, longitude, name}) => {
        
        if(error) {
            console.log(error)
        } else {
            console.log(name)
            // Calling weather API with location data to get weather data
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



