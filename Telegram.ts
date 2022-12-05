const axios = require('axios');

class Telegram {

  constructor(token) {
    this.telegramUrl = "https://api.telegram.org/";
    this.apiUrl = `${this.telegramUrl}bot${token}`;
  }

  sendMessage = async (
    dest,
    message,
    disableNotification = true
  ) => {
    await axios.post(
      `${this.apiUrl}/sendMessage`,
      {
        chat_id: dest,
        text: message,
        disable_notification: disableNotification,
      },
      { headers: { "Content-Type": "application/json" } }
    );
  };

  sendPhoto = async (
    dest,
    picUrl,
    disableNotification = true
  ) => {
    await axios.post(
      `${this.apiUrl}/sendPhoto`,
      {
        chat_id: dest,
        photo: picUrl,
        disable_notification: disableNotification,
      },
      { headers: { "Content-Type": "application/json" } }
    );
  };
}

module.exports = Telegram;
