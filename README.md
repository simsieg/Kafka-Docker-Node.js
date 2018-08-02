# Kafka Docker Node.js Example

This repository contains an example how to setup Apache Kafka containerized with docker-compose and how to communicate with it via Node.js.

## Setup

Clone and open the repository.

### Kafka

To run Kafka and Zookeeper, execute in your terminal:

```sh
docker-compose up -d
```

### Install Node dependencies

```sh
npm install
```

## Running the Producer

Run

```sh
node producer.js
```

to start the producer process.
Type a message in the Console. The first message will be ommited to create the topic.
The next messages you enter will be published in Kafka in the configured topic.

## Listening with the Consumer

Open another terminal.

Run
```sh
node consumer.js
```
to listen to the configured topic.
All messages typed in the producer terminal will appear here.
