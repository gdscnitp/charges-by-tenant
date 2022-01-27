exports.send = async (to, subject, html) => {
    var nodemailer = require("nodemailer");

    var transporter =  nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: "charges.by.tenants@gmail.com",
            pass: "Charges@123"
        },
        secure: true
    });

   var mailOptions={
        to,
        subject,
        html,
    }

    await new Promise((resolve, reject) => {
        // verify connection configuration
        transporter.verify(function (error, success) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        });
    });

    await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                console.log(info);
                resolve(info);
            }
        });
    });
}


