# GymPro Coach

App for adaptive nutrition and training.

## Prerequisites

- Node.js >= 18
- Docker >= 20.10

## Setup

```bash
npm install
docker compose up -d
```

## Running the API

```bash
npm run dev
```

## Running tests

```bash
npm test
```

## Starting the mobile app

```bash
cd packages/apps/mobile
expo start
```

### Environment Variables

Set `OPENAI_API_KEY` to enable OpenAI requests from utility functions.
