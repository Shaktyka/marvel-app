class MarverService {
  _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  _apiKey = 'apikey=4246451221b77ae47492166344c89484';

  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  }

  getAllCharacters = async () => {
    const chars = await this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
    const charArr = chars.data.results.map((item) => this._transformChar(item));
    return charArr;
  }

  getCharacter = async (id) => {
    const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    const char = res.data.results[0];
    return this._transformChar(char);
  }

  _transformChar = (dataObj) => {
      return {
        name: dataObj.name,
        description: dataObj.description,
        thumbnail: dataObj.thumbnail.path + '.' + dataObj.thumbnail.extension,
        homepage: dataObj.urls[0].url,
        wiki: dataObj.urls[1].url
      }
  }

}

export default MarverService;