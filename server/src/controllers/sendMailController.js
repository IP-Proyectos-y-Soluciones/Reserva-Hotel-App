const nodemailer = require( "nodemailer" );
require( 'dotenv' ).config();
const { MAIL_USER, MAIL_PASSWORD } = process.env;

const transporter = nodemailer.createTransport( {
  service:'gmail',
  auth: {
    user: `${ MAIL_USER }`,
    pass: `${ MAIL_PASSWORD }`
  }
});

// const sendMail = async (email, subject, text) => {
//     try {
//         let transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: "kubathasanengin@gmail.com",
//                 pass: "jkjdlawtctcurpob"
//             },
//         });

//         let htmlContent = `
//         <div style="background-color: rgb(217, 176, 255); padding: 20px; text-align: center; border-radius: 15px;">
//             <p style="color: white; font-size: 20px; margin: 0;">${text}</p>
//         </div>
//     `;
//         let info = await transporter.sendMail({
//             to: email,
//             subject: subject,
//             html: htmlContent
//         });

//         console.log("Email enviado:", info.response);
//         return info;
//     } catch (error) {
//         console.error("Ocurrió un error al enviar el correo:", error);
// }
// };

module.exports = {
    transporter
};
