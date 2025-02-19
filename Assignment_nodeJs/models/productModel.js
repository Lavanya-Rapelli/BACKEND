const mongoose =  require('mongoose');

const productSchema = new mongoose.Schema({
    name:{tye: 'string'},
    description:{type: 'string'},
    price:{type: 'number'},    
});

const productModel = new mongoose.Model('User',productSchema);

module.exports = productModel;