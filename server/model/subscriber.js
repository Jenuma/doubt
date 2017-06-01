// ---------------------------------------------------------------------------------------------------------|
// subscriber.js                                                                                            |
//                                                                                                          |
// This is the data model for a subscriber.                                                                 |
//                                                                                                          |
// Author: wreyne                                                                                           |
// Date: 1 June 2017                                                                                        |
// ---------------------------------------------------------------------------------------------------------|
var mongoose = require("mongoose");

var SubscriberSchema = new mongoose.Schema({
    email: String, default: ""
});

exports.Subscriber = mongoose.model("Subscriber", SubscriberSchema, "subscriber");
