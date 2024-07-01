import express from 'express'
import cors from 'cors'; // Import cors
import { db, connetToDB } from './db.js';

// let articlesInfo = [{
//     name: 'learn-react',
//     upvotes: 0,
//     comments: [],
// },
// {
//     name: 'learn-node',
//     upvotes: 0,
//     comments: [],
// },
// {
//     name: 'mongodb',
//     upvotes: 0,
//     comments: [],
// }]

const app = express();
// var cors = require('cors');
// app.use(cors({origin: true, credentials: true}));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// app.post('/hello', (req, res) => {
//     res.send(`Hello ${req.body.name}`);
// })

// app.get('/hello/:name', (req,res) => {
//     const { name } = req.params;
//     res.send(`Hello ${name}!!`);
// })

app.get('/api/articles/:name', async (req,res) => {
    const { name } = req.params; 

    const article = await db.collection('Blog_DB').findOne({ name })
    if(article){
        res.send(article);
    } else {
        res.sendStatus(404);
    }
});

app.put('/api/articles/:name/upvote', async (req,res) => {
    const { name } = req.params; //current value of the name segment here
   
    await db.collection('Blog_DB').updateOne({ name }, {
        $inc: { upvotes: 1},
    })

    const article = await db.collection('Blog_DB').findOne({ name })

    if(article){
        res.json(article);
    }
    else{
        res.send(`The ${article} doesn\'t exist`);
    }
})

app.post('/api/articles/:name/comments', async (req, res) => {
    const { name } = req.params;
    const { postedBy,text} = req.body;

   
    await db.collection('Blog_DB').updateOne({ name }, {
        $push: { comments: {postedBy, text}},
    })

    const article = await db.collection('Blog_DB').findOne({ name })

    
    if (article){
        res.json(article)
    }
    else{
        res.send(`The ${article} doesn\'t exist`);
    }
})

connetToDB (() => {
    console.log("Successfully connected to DB")
    app.listen(8000, () => {
        console.log("Server is listening on port 8000")
    })
})
