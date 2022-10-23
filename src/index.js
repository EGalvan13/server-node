import { Express, request } from "express";

const app = Express()

const port = 3000

app.get('/',(request,require) = {
    respone.send({mes: 'Hello There'})
})

app.listen(port)