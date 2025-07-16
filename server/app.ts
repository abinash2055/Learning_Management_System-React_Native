import express, { NextFunction, Request, Response } from "express"
import cors from "cors";
import cookieParser from "cookie-parser";
require('dotenv').config();


// App body
export const app = express();


// Body Parser
app.use(express.json({ limit: "50mb" }));


// COOKIE Parser
app.use(cookieParser());


// CORS ==> cross origin resource sharing
app.use(cors({
    origin: process.env.ORIGIN
}))


// Testing Api
app.get("/test", (req:Request, res:Response, next:NextFunction) => {
    res.status(200).json({
        success: true,
        message: "API is working"
    })
}) 


// Unknown Routes
app.all("*", (req:Request, res:Response, next:NextFunction) => {
    const err = new Error(`Route: ${req.originalUrl} not found`) as any;
    err.statusCode = 404,
    next(err);
})



