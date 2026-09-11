const { NotificationRepository } = require('../repositories');
const { Mailer } = require('../config');

const notiRepo = new NotificationRepository();

async function sendEmail(mailFrom, mailTo, subject, text) {
    try {
        const response = await Mailer.sendMail({
            from: mailFrom,
            to: mailTo,
            subject,
            text
        });

        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function createMail(data) {
    try {
        const response = await notiRepo.create(data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getPendingEmails() {
    try {
        const response = await notiRepo.getPendingNotification();
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    sendEmail,
    createMail,
    getPendingEmails
};