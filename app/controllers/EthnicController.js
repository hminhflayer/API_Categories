const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose');
const Ethnic = require('../models/CategoryEthnic');
const helper = require('../../util/response');

class EthnicController{
    //[GET] /ethnic
    index(req,res,next){
        Ethnic.find({}).sort('code')
            .then((ethnics) =>
                res.json({
                    status: helper.STATUS.SUCCESS,
                    message: helper.MESSAGE.SUCCESS,
                    total: ethnics.length,
                    data: mutipleMongooseToObject(ethnics),
                }),
            )
            .catch(next);
    }

    //[GET] /ethnic/:code
    get(req,res,next){
        Ethnic.findOne({ code: req.params.code })
            .then((ethnic) =>
                res.json({
                    status: helper.STATUS.SUCCESS,
                    message: helper.MESSAGE.SUCCESS,
                    data: mongooseToObject(ethnic),
                }),
            )
            .catch(next);
    }

    //[POST] /ethnic/create
    create(req,res,next){
        Ethnic.create(req.body)
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

    //[POST] /ethnic/udpate/:code
    update(req,res,next){
        if(req.params.code == req.body.code){
            Ethnic.updateOne({code: req.body.code}, req.body, { runValidators: true})
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

    //[POST] /ethnic/delete/:code
    delete(req,res,next){
        Ethnic.deleteOne({code: req.params.code})
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

}

module.exports = new EthnicController();
