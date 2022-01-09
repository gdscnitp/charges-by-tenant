exports.send =  (to, subject, html) => {
    var nodemailer = require("nodemailer");

    var smtpTransport =  nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "charges.by.tenants@gmail.com",
            pass: "Charges@123"
        }
    });

   var mailOptions={
        to,
        subject,
        html,
    }
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error.message);
     }else{
            console.log("Message sent Successfully");
         }
});
}