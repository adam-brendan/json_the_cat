const request = require("request");

const fetchBreedDescription = (breedQuery, callback) => {
    request(`https://api.thecatapi.com/v1/breeds/search?q=${breedQuery}`, (err, response, body) => {
        return callback(err, JSON.parse(body));
    });   
}

module.exports = { fetchBreedDescription };