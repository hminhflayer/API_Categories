const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoryProfession = Schema({
    code: {type: String, require: true, unique: true},
    name: {type: String, require: true},
},{
    timestamps: true,
});

module.exports = mongoose.model('Category_Profession', CategoryProfession);
