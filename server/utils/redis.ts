
import { Redis } from 'ioredis';

require("dotenv").config();

const redisClient = () => {
    if (process.env.REDIS_URL) {
        console.log("Redis connected successfully");
        return process.env.REDIS_URL;
    }
    throw new Error("Redis connection Failed");
}

export const redis = new Redis(redisClient());

