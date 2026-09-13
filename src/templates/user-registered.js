
function UserRegisteredTemplate(data) {
    return `
Hello ${data.name},

Welcome to AeroBook!

Your account has been successfully created.

You can now log in to your AeroBook account and start booking flights.

We are happy to have you with us.

Thank you,
AeroBook Team
`;
}

module.exports = UserRegisteredTemplate;

