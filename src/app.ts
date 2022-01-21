import express from 'express'
import cors from "cors";
import mongoose from 'mongoose'
import token from './token';
;


class App {
    public express: express.Application

    public constructor() {
        this.express = express()
        this.middlewares()
        this.routes()
        this.database()
    }

    private middlewares() {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private routes() {
        this.express.use(token)
    }
    private database() {
        mongoose.connect('mongodb+srv://adm:1d494E7E@cluster0.i0zjh.mongodb.net/tindindb?retryWrites=true&w=majority')
    }
}

export default new App().express