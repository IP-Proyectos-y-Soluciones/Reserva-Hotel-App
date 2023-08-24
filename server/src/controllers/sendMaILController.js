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

        let htmlContent = `
        <div style="background-color: rgb(217, 176, 255); padding: 20px; text-align: center; border-radius: 15px;">
            <p style="color: white; font-size: 20px; margin: 0;">${text}</p>
        </div>
    `;
        let info = await transporter.sendMail({
            to: email,
            subject: subject,
            html: htmlContent
        });

        console.log("Email enviado:", info.response);
        return info;
    } catch (error) {
        console.error("Ocurrió un error al enviar el correo:", error);
}
};

module.exports = {
    sendMail
};
