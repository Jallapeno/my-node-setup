import express from 'express'

const app = express()

app.get('/', (request, resopnse) => {
    return resopnse.json({ message: 'Hello World' });
})

app.listen(3333)