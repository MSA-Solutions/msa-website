/**
 * Created by mohammedabdelrahman on 7/11/17.
 */
'use strict';

//var mongoose = require('mongoose');
//var ContactUs = mongoose.model('ContactUs');
var nodemailer = require('nodemailer');



exports.send_message = function (req,res) {
    req.body.message.name = req.body.message.name.toString().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    req.body.message.email = req.body.message.email.toString().replace(/[`~!#$%^&*()|+\-=?;:'",<>\{\}\[\]\\\/]/gi, '');
    req.body.message.message = req.body.message.message.toString().replace(/[`~^*_|<>\\\/]/gi, '');
    //var message = new ContactUs(req.body.message);

    console.log('msg: ',req.body)

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'msa.solutions.mo@gmail.com',
            pass: 'BAt-gsn-C7G-z5c'
        }
    });

    var mailOptions = {
        from: 'msa.solutions.mo@gmail.com',
        to: 'info@msacom.co',
        subject: 'contact us - message from ' + req.body.message.name,
        text: req.body.message.email +'\n--------------\n'+req.body.message.message
    };


    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);

            /*message.save(function (err, msg) {

                if (err)
                    res.send(err)
                res.json(msg)
            })*/
        }
    });
}

exports.list_all_messages = function (req,res) {
   /* ContactUs.find({}, function (err, message) {
        if (err)
            res.send(err)
        res.send(message)
    })*/
}