const { NotificationService } = require('../services');

async function Mail(req, res) {
    try {
        const data = {
            subject: req.body.subject,
            content: req.body.content,
            recipientEmail: req.body.recipientEmail
        };

        // 1. Save notification in database
        const notification = await NotificationService.createMail(data);

        // 2. Send email
        const emailResponse = await NotificationService.sendEmail(
            process.env.MAIL_FROM,
            data.recipientEmail,
            data.subject,
            data.text
        );

        return res.status(201).json({
            notification,
            email: emailResponse
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {
    Mail
};