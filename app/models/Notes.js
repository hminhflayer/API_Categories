const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Notes = Schema({
    title: {type: String, require: true},
    description: {type: String},
},{
    timestamps: true,
});

module.exports = mongoose.model('Notes', Notes);