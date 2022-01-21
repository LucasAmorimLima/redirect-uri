import {Router} from 'express'
import {Request,Response} from 'express'
import Token from './TokenSchema';

const routes = Router()

routes.get('/', async (req: Request,res: Response) => {
    
    return res.json("hello word ")
})

routes.get('/places/token', async (req: Request,res: Response) => {
    console.log("first");
    const token  = Token.create(req.params)
    console.log(req.params);
    return res.json(token)
})

export default routes