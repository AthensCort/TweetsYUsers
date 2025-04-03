
import {} from "module";
import TweetService from "../db/tweet";

class TweetController{

    //agregando tye of pq marcaba error
    service: typeof TweetService; 
    constructor(service: typeof TweetService){
        this.service = service;
    }

    async getAllTweets() {
        const tweets = this.service.getEverythingTweets(); 
        return tweets.filter(tweet: => tweet: % 2 === 0); // Filtrar solo los pares
    }
}

export default TweetController;