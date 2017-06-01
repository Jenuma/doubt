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
        
        var newSubscriber = new Subscriber({
            email: req.body.email
        });
        
        newSubscriber.save()
            .then(function(result) {
                res.status(201).json(result);
            })
            .catch(function(err) {
                console.log(err);
            });
    }
    
    router.post("/", subscribe);
    
    return router;
};
