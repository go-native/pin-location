const config = require("./config.json");

const googleMapsClient = require("@google/maps").createClient({
  key: config.googleApiKey,
  Promise: Promise
});

const googleAPI = {
  searchAddress: query => {
    return new Promise((resolve, reject) => {
      googleMapsClient
        .geocode({ address: query })
        .asPromise()
        .then(response => {
          if (response.json.status === "OK" && response.json.results) {
            let results = response.json.results.map(r => {
              return {
                address: r.formatted_address,
                lat: r.geometry.location.lat,
                lng: r.geometry.location.lng
              };
            });
            resolve(results);
          } else {
            resolve([]);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};

module.exports = googleAPI;
