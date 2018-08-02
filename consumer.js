const kafka = require('kafka-node');

const Consumer = kafka.Consumer;
const Client = kafka.Client;
const client = new Client('localhost:32181');

const topic = 'aNewTopic';

client.once('connect', () => {
  console.info('Client connected successfully.');
});

const topics = [{
  topic,
}];

const options = {
  autoCommit: false,
};

const consumer = new Consumer(client, topics, options);
consumer.on('message', message => console.info(message.value));
consumer.on('error', console.error);
