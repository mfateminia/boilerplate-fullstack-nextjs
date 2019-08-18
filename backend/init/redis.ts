import redis, {RedisClient} from 'redis';

class Redis {
    public db: RedisClient;

    public constructor() {
        this.db = redis.createClient();
 
        this.db.on('connect', () => {
            console.log('Redis connected!');
        })
         
        this.db.on("error", () => {
            console.log('Redis connection failed!');
        });
        this.init();
    }

    private init = async() => {
        if (this.db) {
            return;
          }
 
        this.db = redis.createClient();
 
        this.db.on('connect', () => {
            console.log('Redis connected!');
        })
         
        this.db.on("error", () => {
            console.log('Redis connection failed!');
        });
    }
}

export const redisInstance = new Redis();
