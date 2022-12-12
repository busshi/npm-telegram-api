import axios from 'axios';

class Telegram {
  telegramUrl: string;
  apiUrl: string;

  constructor(token: string) {
    this.telegramUrl = 'https://api.telegram.org/';
    this.apiUrl = `${this.telegramUrl}bot${token}`;
  }

  sendMessage = (chatId: string, text: string, disableNotification = false) => {
    return axios.post(
      `${this.apiUrl}/sendMessage`,
      {
        chat_id: chatId,
        text,
        disable_notification: disableNotification,
      },
      { headers: { 'Content-Type': 'application/json' } }
    );
  };

  sendPhoto = (chatId: string, picUrl: string, disableNotification = false) => {
    return axios.post(
      `${this.apiUrl}/sendPhoto`,
      {
        chat_id: chatId,
        photo: picUrl,
        disable_notification: disableNotification,
      },
      { headers: { 'Content-Type': 'application/json' } }
    );
  };

  sendVideoNote = (
    chatId: string,
    videoUrl: string,
    disableNotification = false
  ) => {
    return axios.post(
      `${this.apiUrl}/sendVideoNote`,
      {
        chat_id: chatId,
        video_note: videoUrl,
        disable_notification: disableNotification,
      },
      { headers: { 'Content-Type': 'application/json' } }
    );
  };

  sendDocument = (
    chatId: string,
    fileUrl: string,
    disableNotification = false
  ) => {
    return axios.post(
      `${this.apiUrl}/sendDocument`,
      {
        chat_id: chatId,
        document: fileUrl,
        disable_notification: disableNotification,
      },
      { headers: { 'Content-Type': 'application/json' } }
    );
  };

  sendSticker = (
    chatId: string,
    sticker: string,
    disableNotification = false
  ) => {
    return axios.post(
      `${this.apiUrl}/sendSticker`,
      {
        chat_id: chatId,
        sticker,
        disable_notification: disableNotification,
      },
      { headers: { 'Content-Type': 'application/json' } }
    );
  };

  sendPoll = (
    chatId: string,
    question: string,
    options: string[],
    disableNotification = false,
    isAnonymous = false
  ) => {
    return axios.post(
      `${this.apiUrl}/sendPoll`,
      {
        chat_id: chatId,
        question,
        options,
        disable_notification: disableNotification,
        is_anonymous: isAnonymous,
      },
      { headers: { 'Content-Type': 'application/json' } }
    );
  };

  sendDice = (chatId: string, disableNotification = false) => {
    return axios.post(
      `${this.apiUrl}/sendDice`,
      {
        chat_id: chatId,
        disable_notification: disableNotification,
      },
      { headers: { 'Content-Type': 'application/json' } }
    );
  };

  editMessage = (chatId: string, messageId: string, text: string) => {
    return axios.post(
      `${this.apiUrl}/editMessageText`,
      {
        chat_id: chatId,
        message_id: messageId,
        text,
      },
      { headers: { 'Content-Type': 'application/json' } }
    );
  };

  deleteMessage = (chatId: string, messageId: string) => {
    return axios.post(
      `${this.apiUrl}/deleteMessage`,
      {
        chat_id: chatId,
        message_id: messageId,
      },
      { headers: { 'Content-Type': 'application/json' } }
    );
  };
}

export default Telegram;
