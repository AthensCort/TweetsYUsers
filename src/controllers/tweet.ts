//Carolina de Jesus Ortega Cepeda A01282386
import {} from "module";
import TweetService from "../db/tweets";

class TweetController{

    //agregando tye of pq marcaba error
    service: typeof TweetService; 
    constructor(service: typeof TweetService){
        this.service = service;
    }

    async getAllTweets() {
        const tweets = this.service.getEverythingTweets(); 
        return tweets.filter(tweets => tweets % 2 === 0); // Filtrar solo los pares
    }
}

export default TweetController;