# npm-telegram-api

Node package for the Telegram API

## Usage

`yarn add @busshi/telegram-api`

## Functionnalities

- sendMessage with/without notification
- sendPhoto with a given URL

## Example

javascript
```
const Telegram = require('@busshi/telegram-api')

const telegram = new Telegram(YOUR_BOT_TOKEN');

telegram.sendMessage(YOUR_CHAT_ID, "Hello world!")
```

[Github repository](https://github.com/busshi/npm-telegram-api)
