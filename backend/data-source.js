const DATA = [
  {
    id: "1544109127653",
    title: "Leipziger str.",
    address: "Leipziger strasse",
    lat: 52.511123,
    lng: 13.399605
  },
  {
    id: "1544109134589",
    title: "Irish Pub",
    address: "Kilkenny Irish Pub",
    lat: 52.522491,
    lng: 13.3992493
  }
];

const dataSource = {
  getAll: () => DATA,
  insert: address => {
    DATA.push(address)
    return address
  },
  update: address => {
    let addressToUpdate = DATA.find(d => d.id === address.id)
    addressToUpdate.title = address.title
    addressToUpdate.address = address.address
    addressToUpdate.lat = address.lat
    addressToUpdate.lng = address.lng
    return addressToUpdate
  },
  delete: addressId => {
    let foundAddress = DATA.find(d => d.id === addressId)
    DATA.splice(DATA.indexOf(foundAddress), 1)
    return {id: addressId}
  }
};

module.exports = dataSource
