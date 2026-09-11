const { ConnectRabbitMq} = require("../config");

const startNotificationConsumer = async () => {
  const connection = await ConnectRabbitMq();

  const channel = await connection.createChannel();

  const queue = "notification_queue";

  await channel.assertQueue(queue, {
    durable: true,
  });

  console.log(`Listening for messages on ${queue}`);

  channel.consume(queue, (message) => {
    if (message) {
      const data = JSON.parse(message.content.toString());

      console.log("Notification received:", data);

      channel.ack(message);
    }
  });
};

module.exports = startNotificationConsumer;