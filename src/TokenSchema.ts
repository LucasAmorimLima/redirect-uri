import {Schema,model, Document} from 'mongoose'

interface TokenInterface extends Document{
    token: string
}
const TokenSchema = new Schema({
    token: String
},
{
    timestamps: false
})

export default model<TokenInterface>('token',TokenSchema)