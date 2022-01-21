import {Router} from 'express'
import {Request,Response} from 'express'
import Token from './TokenSchema';
;

const routes = Router()

routes.get('/places/token', async (req: Request,res: Response) => {
    const token  = Token.create(req.params)
    return res.json(token)
})

export default routes