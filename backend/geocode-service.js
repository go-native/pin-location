class GecodeService {
  constructor(api) {
    this.api = api
  }
  searchAddress(query) {
    if(this.api.searchAddress) {
      return this.api.searchAddress(query)
    } else {
      throw new Error('searchAddress is not implemented');
    }
  }
}

module.exports = GecodeService