// ---------------------------------------------------------------------------------------------------------|
// subscribe.endpoint.js                                                                                    |
//                                                                                                          |
// This is the endpoint for all API requests regarding subscriptions.                                       |
//                                                                                                          |         
// Author: wreyne                                                                                           |         
// Date: 1 June 2017                                                                                        | 
// ---------------------------------------------------------------------------------------------------------|
module.exports = function() {
    var router = require("express").Router();
    
    function subscribe(req, res, next) {
        var Subscriber = require("../model/subscriber").Subscriber;
        var subscriberEmail = req.body.email;

        Subscriber.findOne({email: subscriberEmail}, {"_id": 0}).exec()
            .then(function(result) {
                if(!result) {
                    var uuidv4 = require("uuid/v4");
                    
                    var newSubscriber = new Subscriber({
                        email: subscriberEmail,
                        uuid: uuidv4(),
                        activated: false
                    });

                    newSubscriber.save()
                        .then(function(result) {
                            var nodemailer = require("nodemailer");
                            var nodemailerConfig = require("../../config/nodemailerConfig");
                        
                            var transporter = nodemailer.createTransport({
                                service: nodemailerConfig.service,
                                auth: {
                                    user: nodemailerConfig.user,
                                    pass: nodemailerConfig.pass
                                }
                            });
                        
                            var mailOptions = {
                                from: "Become Rampant <admin@becomerampant.com>",
                                to: newSubscriber.email,
                                subject: "Confirm Your Subscription",
                                html: "<a href='http://becomerampant.com/api/subscribe/confirm/" + newSubscriber.uuid + "'>Click here to confirm your email address.</a>"
                            };
                        
                            transporter.sendMail(mailOptions, function(error, info) {
                                if(error) {
                                    console.log(error);
                                } else {
                                    res.status(201).json(result);
                                }
                            });
                        })
                        .catch(function(err) {
                            console.log(err);
                        });
                } else {
                    res.status(200).send("Email address is already subscribed.");
                }
            })
            .catch(function(err) {
                console.log(err);
            });
    }
    
    function confirm(req, res, next) {
        var Subscriber = require("../model/subscriber").Subscriber;
        var subscriberUUID = req.params.uuid;
        
        Subscriber.findOne({uuid: subscriberUUID}).exec()
            .then(function(result) {
                result.activated = true;
            
                Subscriber.findOneAndUpdate({uuid: subscriberUUID}, result).exec()
                    .then(function(result) {
                        res.status(204).redirect("http://localhost:8080/subscription-confirmed");
                    })
                    .catch(function(err) {
                        console.log(err);
                    });
            })
            .catch(function(err) {
                console.log(err);
            });
    }
    
    function unsubscribe(req, res, next) {
        var Subscriber = require("../model/subscriber").Subscriber;
        var subscriberEmail = decodeURIComponent(req.params.email);
        
        Subscriber.findOneAndRemove({email: subscriberEmail}).exec()
            .then(function(result) {
                res.status(204).redirect("http://localhost:8080/unsubscribed");
            })
            .catch(function(err) {
                console.log(err);
            });
    }
    
    router.post("/", subscribe);
    router.get("/confirm/:uuid", confirm);
    router.get("/unsubscribe/:email", unsubscribe);
    
    return router;
};
