/**
 * Created by mohammedabdelrahman on 7/11/17.
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ContactUsSchema = new Schema({
    name: {
        type: String,
        Required: 'Please include a name'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    email: {
      type: String,
      Required: 'Please enter an email'
    },
    message: {
        type: String,
        default:'client message'
    }
});

module.exports = mongoose.model('ContactUs', ContactUsSchema);