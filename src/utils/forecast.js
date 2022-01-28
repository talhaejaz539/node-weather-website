const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8cc5681574d2b1a9f53983d9fbc3b64a&query=' + latitude + ',' + longitude
    // + '&units=f'

    request({url, json: true},(error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        }
        else if(body.error) {
            callback('Unable to find location!', undefined)
        }
        else {
            //console.log(body.daily.data[0])
            callback(undefined, 
                body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + 
                body.current.feelslike + ' degrees out. The humidity is ' + body.current.humidity + '%.')
        }
    })
}


module.exports = forecast