const request = require("request");
const breedQuery = process.argv[2]

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedQuery}`, (error, response, body) => {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode); 
    const data = JSON.parse(body);
    if (data.length === 0) {
        console.log("Breed not found. Try again.")
    } else {
        for (results of data) {
            console.log(results.description);
        }
    }
});