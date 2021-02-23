const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductsFromFile = (cb) => {
    
    fs.readFile(p, (err, fileContent) =>{
        if(err) {
            cb([])
        }else{
       cb(JSON.parse(fileContent));
    }
    });
}

module.exports = class Product{
    constructor(title, imageUrl, price, description){
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }

    save() {
        this.id = Math.random().toString();
        getProductsFromFile(product =>{
            product.push(this)
        });
        fs.readFile(p, (err, fileContent)=>{
            let products = []
            if(!err){
                products = JSON.parse(fileContent)
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err)=>{
                console.log(err)
            });
        });
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }

    static findbyId(id, cb){
        getProductsFromFile(products=>{
            const product = products.find(p => p.id === id);
            cb(product);
        });
    }
    
}