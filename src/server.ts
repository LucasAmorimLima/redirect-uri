import app from './app'

app.listen(process.env.PORT || 3333,()=>{
    console.log("listering on port 3333")
})