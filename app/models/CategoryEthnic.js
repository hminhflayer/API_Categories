const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoryEthnic = Schema({
    code: {type: String, require: true, unique: true},
    name: {type: String, require: true},
    another_name: {type: String},
},{
    timestamps: true,
});

module.exports = mongoose.model('Category_Ethnic', CategoryEthnic);
