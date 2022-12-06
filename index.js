const express = require('express')
const app =express()
const cors=require('cors')
app.use(cors())

const Port= process.env.port || 5000;

//categoryname select
const categories=require('./Data/catagoris.json')
app.get('/product-catagories',(req,res)=>{
    res.send(categories)
})

const productsCollection=require('./Data/product.json')
//all product get
app.get('/allproducts', (req,res)=> {
    res.send(productsCollection)
    
})

//signle product get
app.get('/product/:id',(req,res)=>{
    const id= req.params.id;
    const getSingleItem=productsCollection?.find((p)=> p.id == id)
    if(!getSingleItem){
        res.send('limite array ,so this itme no mathc')
    }
    res.send(getSingleItem)
})

//category product
app.get('/category/:name',(req,res)=>{
    const name=req.params.name;
    const getCategory=productsCollection?.filter((p)=> p.category == name)
    res.send(getCategory)
})

app.get('/',(req,res)=>{
    res.send('now server is running')
})

app.listen(Port,()=>{
    console.log('server is running',Port)
})

module.exports=app