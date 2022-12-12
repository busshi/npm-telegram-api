![publish](https://github.com/busshi/npm-telegram-api/actions/workflows/publish.yml/badge.svg)

# npm-telegram-api

Node package for the Telegram API

## Usage

`yarn add @busshi/telegram-api`

## Functionnalities

- sendMessage with/without notification
- editMessage
- deleteMessage
- sendPhoto (with a picture URL)
- sendDocument (with a document URL)
- sendVideoNote (with a video URL)
- sendPoll (question, array of answers)
- sendSticker (sticker_id needed, for example CAACAgIAAxkBAAI6GV6vP_F6BaWapEmBZ2k8e8yBi2xMAAICAwACusCVBTRFBuRNlNodGQQ)
- sendDice (random number from 1 to 6)

## Example

```js
import Telegram from '@busshi/telegram-api';

const telegram = new Telegram(BOT_TOKEN);

const req = await telegram.sendMessage(CHAT_ID, 'Hello world!');
const messageId = req.dat.result.message_id;
telegram.editMessage(CHAT_ID, messageId, 'Edited message');
telegram.deleteMessage(CHAT_ID, messageId);

telegram.sendPhoto(CHAT_ID, PICTURE_URL);

telegram.sendDocument(CHAT_ID, DOCUMENT_URL);

telegram.sendVideoNote(CHAT_ID, VIDEO_URL);

telegram.sendPoll(CHAT_ID, QUESTION, OPTIONS);
telegram.sendPoll(CHAT_ID, 'Is it working?', ['yes', 'no']);

telegram.sendSticker(CHAT_ID, STICKER_ID);

telegram.sendDice(CHAT_ID);
```
