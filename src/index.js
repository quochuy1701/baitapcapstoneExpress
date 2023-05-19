const express = require('express')// import thư viện 
const app = express();
app.listen(9090);
app.use(express.static("."));
app.use(express.json())


const rootRouter = require('../src/Router/rootRouter');
app.use("/api", rootRouter);