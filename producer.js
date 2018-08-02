const kafka = require('kafka-node');

const client = new kafka.Client('localhost:32181');
const producer = new kafka.HighLevelProducer(client);

const topic = 'aNewTopic';

producer.on('ready', () => {
  console.info('Kafka Producer is connected and ready.');
});

process.stdin.on('data', data => {
  const payload = [{
    topic,
    messages: data.toString()
      .trim(),
  }];
  producer.send(payload, (error, result) => {
    if (error) {
      console.error('errors:', error);
    }
    else {
      console.info('offset:', result[topic][0]);
    }
  });
});

producer.on('error', console.error);
