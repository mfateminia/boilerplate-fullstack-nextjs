import redis, {RedisClient} from 'redis';

class Redis {
    public db: RedisClient;

    constructor() {

        this.init();
    }

    private init = async() => {    
        this.db = redis.createClient();
 
        this.db .on('connect', (err) => {
            console.log('Redis connected!');
        })
         
        this.db .on("error", (err) => {
            console.log('Redis connection failed!');
        });
    }
}

export default new Redis();