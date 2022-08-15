const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose');
const Profession = require('../models/CategoryProfession');
const helper = require('../../util/response');

class ProfessionController{
    //[GET] /profession
    index(req,res,next){
        Profession.find({}).sort('code')
            .then((profession) =>
                res.json({
                    status: helper.STATUS.SUCCESS,
                    message: helper.MESSAGE.SUCCESS,
                    total: profession.length,
                    data: mutipleMongooseToObject(profession),
                }),
            )
            .catch(next);
    }

    //[GET] /profession/:code
    get(req,res,next){
        Profession.findOne({ code: req.params.code })
            .then((ethnic) =>
                res.json({
                    status: helper.STATUS.SUCCESS,
                    message: helper.MESSAGE.SUCCESS,
                    data: mongooseToObject(ethnic),
                }),
            )
            .catch(next);
    }

    //[POST] /profession/create
    create(req,res,next){
        Profession.create(req.body)
            .then(() =>
                res.json({
                    status: helper.STATUS.SUCCESS,
                    message: helper.MESSAGE.SUCCESS,
                }),
            )
            .catch((error) => res.json({
                    status: helper.STATUS.FAIL,
                    message: error,
            }));
    }

    //[POST] /profession/udpate/:code
    update(req,res,next){
        if(req.params.code == req.body.code){
            Profession.updateOne({code: req.body.code}, req.body, { runValidators: true})
            .then(() =>
                res.json({
                    status: helper.STATUS.SUCCESS,
                    message: helper.MESSAGE.SUCCESS,
                }),
            )
            .catch((error) => res.json({
                    status: helper.STATUS.FAIL,
                    message: error,
            }));
        } else {
            res.json({
                status: helper.STATUS.FAIL,
                message: "Code not match with param",
            });
        }
    }

    //[POST] /profession/delete/:code
    delete(req,res,next){
        Profession.deleteOne({code: req.params.code})
            .then(() =>
                res.json({
                    status: helper.STATUS.SUCCESS,
                    message: helper.MESSAGE.SUCCESS,
                }),
            )
            .catch((error) => res.json({
                    status: helper.STATUS.FAIL,
                    message: error,
            })
        );
    }

    //[GET] /profession/level/:code
    getWithGroup(req,res,next){
        Profession.find({ code: { $regex: '^' + req.params.code }})
            .then((profession) =>
                res.json({
                    status: helper.STATUS.SUCCESS,
                    message: helper.MESSAGE.SUCCESS,
                    total: profession.length,
                    data: mutipleMongooseToObject(profession),
                }),
            )
            .catch(next);
    }
}

module.exports = new ProfessionController();
