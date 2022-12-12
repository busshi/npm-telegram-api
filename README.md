![publish](https://github.com/busshi/npm-telegram-api/actions/workflows/publish.yml/badge.svg)

# npm-telegram-api

Node package for the Telegram API

## Usage

`yarn add @busshi/telegram-api`
or 
`npm install @busshi/telegram-api`

## Functionnalities

| Method | Parameters |
| :-- | :-- |
| sendMessage | <ul><li>chatId: string</li><li>text: string</li><li>disableNotification: boolean (optional, default: false)</li></ul> |
| editMessage | <ul><li>chatId: string</li><li>messageId: string</li><li>text: string</li></ul> |
| deleteMessage | <ul><li>chatId: string</li><li>messageId: string</li></ul> |
| sendPhoto | <ul><li>chatId: string</li><li>picUrl: string</li><li>disableNotification: boolean (optional, default: false)</li></ul> |
| sendDocument | <ul><li>chatId: string</li><li>fileUrl: string</li><li>disableNotification: boolean (optional, default: false)</li></ul> |
| sendVideoNote | <ul><li>chatId: string</li><li>videoUrl: string</li><li>disableNotification: boolean (optional, default: false)</li></ul> |
| sendPoll | <ul><li>chatId: string</li><li>question: string</li><li>options: string[]</li><li>disableNotification: boolen (optional, default: false)</li><li>isAnonymous: boolean (optional, default: false)</li></ul> |
| sendSticker | <ul><li>chatId: string</li><li>stickerId: string</li></ul> |
| sendDice | <ul><li>chatId: string (get a random number from 1 to 6)</li></ul> |

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
telegram.sendSticker(CHAT_ID, 'CAACAgIAAxkBAAI6GV6vP_F6BaWapEmBZ2k8e8yBi2xMAAICAwACusCVBTRFBuRNlNodGQQ');

telegram.sendDice(CHAT_ID);
```
