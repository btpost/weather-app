const request = require('request')

const getWeather = (location, callback) => {
    const url = 'https://api.darksky.net/forecast/4937596617fb67d4946db0fdc729b425/'+location
    
    request({url, json:true}, (error, {body})=> {
        if (error != null) {
            callback('Unable to connect to weather service')
        }else if (body.error) {
            callback('Unable to find location')
        } 
        else {
            callback(undefined, body.daily.data[0].summary + '\nIt is curently '+body.currently.temperature+' degrees out. \n'+
            'There is a '+body.currently.precipProbability+'% chance of precipitation\n')
        }
    })
}

module.exports = getWeather 