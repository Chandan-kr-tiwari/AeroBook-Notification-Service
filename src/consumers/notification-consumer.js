const { ConnectRabbitMq } = require("../config");

const startNotificationConsumer = async () => {
    const connection = await ConnectRabbitMq();

    const channel = await connection.createChannel();

    const exchange = "app.events";
    const queue = "notification_queue";

    // Make sure exchange exists
    await channel.assertExchange(exchange, "topic", {
        durable: true
    });

    // Create notification queue
    await channel.assertQueue(queue, {
        durable: true
    });

    // Bind queue to events we want
    await channel.bindQueue(
        queue,
        exchange,
        "booking.confirmed"
    );

    await channel.bindQueue(
        queue,
        exchange,
        "booking.cancelled"
    );

    await channel.bindQueue(
        queue,
        exchange,
        "payment.successful"
    );

    await channel.bindQueue(
        queue,
        exchange,
        "payment.refunded"
    );

    console.log(`Listening for messages on ${queue}`);

    channel.consume(queue, (message) => {
        if (message) {
            const event = JSON.parse(
                message.content.toString()
            );

            console.log("Notification received:", event);

            channel.ack(message);
        }
    });
};

module.exports = startNotificationConsumer;