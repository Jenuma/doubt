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
                    var newSubscriber = new Subscriber({
                        email: subscriberEmail
                    });

                    newSubscriber.save()
                        .then(function(result) {
                            res.status(201).json(result);
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
    router.get("/unsubscribe/:email", unsubscribe);
    
    return router;
};
