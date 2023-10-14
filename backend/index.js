const express = require("express");
const cors = require("cors");
const axios = require('axios'); // Add this line

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const r=await axios.put(
        'https://api.chatengine.io/users/',
        {username:username , secret:username,first_name:username},
        {headers:{"private-key":"90cb611c-6882-4efc-ac1e-b27570d16550"}}
    )
    return res.status(r.status).json(r.data)
  }
  catch(e){
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3000);
