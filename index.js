const { fetchBreedDescription } = require('./breedFetcher');

const breedQuery = process.argv[2];

fetchBreedDescription(breedQuery, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc[0].description);
  }
});