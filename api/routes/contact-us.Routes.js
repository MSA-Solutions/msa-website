/**
 * Created by mohammedabdelrahman on 7/11/17.
 */
'use strict';

module.exports = function(app){
    var contactUs = require('../controllers/contact-us.Controller');

    app.route('/message')
        .post(contactUs.send_message)
        .get(contactUs.list_all_messages)

}