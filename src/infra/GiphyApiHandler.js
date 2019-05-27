import RestHandler from './RestHandler';

class GypgyApiHandler {
    constructor() {
        this.DOMAIN = "http://api.giphy.com";
        this.ROUTE = '/v1/gifs/search';
        this.API_KEY = "7nF7UzcMv7ucBMUmEOclL67tQvriXzjf";  
        this.LIMIT = "5";
        this.getGifs = this.getGifs.bind(this);
    }    
    async getGifs(querySearch) {
        const {DOMAIN,ROUTE,API_KEY,LIMIT} = this;
        const fullUrlPath = `${DOMAIN}${ROUTE}?q=${querySearch}&api_key=${API_KEY}&limit=${LIMIT}`;
        const result = await RestHandler.get(fullUrlPath);
        return result ? result.data : null;        
    }
    
}

export default new GypgyApiHandler();