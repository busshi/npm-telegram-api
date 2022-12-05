![publish](https://github.com/busshi/npm-telegram-api/actions/workflows/publish.yml/badge.svg)

# npm-telegram-api

Node package for the Telegram API

## Usage

`yarn add @busshi/telegram-api`

## Functionnalities

- sendMessage with/without notification
- sendPhoto with a given URL

## Example

```js
import Telegram from '@busshi/telegram-api'

const telegram = new Telegram(YOUR_BOT_TOKEN');

telegram.sendMessage(YOUR_CHAT_ID, "Hello world!")

telegram.sendPhoto(YOUR_CHAT_ID, PICTURE_URL)
```
