import nodemailer from "nodemailer"

const sendMail = async (email, subject, text) => {
    try {
     const transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
            user: "kubathasanengin@gmail.com",
            pass: "be1e90b92fa3e518eaafbf7d9d80c1c3"
        },
     });
     const info = await transporter.sendMail({
        from: '"Hotel" <kubathasanengin@gmail.com>',
        to: email,
        subject,
        text
     })
     return info;
     
    }
    catch (error) {
        fs.appendFile('error.log', error.message + '\n', (err) => {
            if (err) throw err;
        });
        return { error: error.message };
    }
}
module.exports = sendMail;

