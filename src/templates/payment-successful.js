
function PaymentSuccessfulTemplate(data) {
    return `
Hello,

Your payment was successful!

Payment ID: ${data.paymentId}
Booking ID: ${data.bookingId}
Amount Paid: ₹${data.amount}
Payment Provider:${data.provider}
Your booking will be confirmed shortly.

Thank you for choosing AeroBook.

AeroBook Team
`;
}

module.exports = PaymentSuccessfulTemplate;
