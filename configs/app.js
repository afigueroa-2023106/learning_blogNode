import express from "express"
import cors from 'cors'
import helmet from "helmet"
import morgan from "morgan"

import courseRoutes from '../src/course/course.routes.js'
import commentRoutes from '../src/comment/comment.routes.js'
import postRoutes from '../src/post/post.routes.js'

const configs = (app)=>{
    app.use(express.json())
    app.use(express.urlencoded({extended:false}))
    app.use(cors())
    app.use(helmet())
    app.use(morgan('dev'))
}

const routes = (app)=>{
    app.use('/v1/course', courseRoutes)
    app.use('/v1/comment', commentRoutes)
    app.use('/v1/post', postRoutes)
}



export const initServer = ()=>{
    const app = express()
    try {
        configs(app)
        routes(app)
        app.listen(process.env.PORT)
        console.log(`Server running in port ${process.env.PORT}`);
    } catch (error) {
        console.error(`Server init failed`,error);
        
    }
}