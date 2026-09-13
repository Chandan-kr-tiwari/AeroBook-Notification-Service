
function BookingConfirmedTemplate(data) {
    return `
Hello,

Your flight booking has been confirmed successfully!

Booking ID: ${data.bookingId}
Flight ID: ${data.flightId}
Number of Seats: ${data.noofSeats}
Total Amount: ₹${data.totalCost}

Thank you for choosing AeroBook.

Have a safe and pleasant journey!

AeroBook Team
`;
}

module.exports = BookingConfirmedTemplate;
