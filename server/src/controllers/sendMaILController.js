const nodemailer = require("nodemailer");

const sendMail = async (email, subject, text) => {
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "kubathasanengin@gmail.com",
                pass: "jkjdlawtctcurpob"
            },
        });

        let info = await transporter.sendMail({
            to: email,
            subject: subject,
            text: text
        });

        console.log("Mail gönderildi:", info.response);
        return info;
    } catch (error) {
        console.error("Mail gönderilirken bir hata oluştu:", error);
}
};

module.exports = {
    sendMail
};
