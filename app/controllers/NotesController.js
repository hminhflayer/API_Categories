const Notes = require('../models/Notes');

class NotesController{
    //[GET] /Notes/all
    getAll(req,res, next){
        res.render("news");
    };

    //[GET] /Notes/get/:slug
    getOne(req,res, next){
        res.send("Get One " + req.params.slug);
    };
}

module.exports = new NotesController();