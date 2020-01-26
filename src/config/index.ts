const CONFIG: any = {};

CONFIG.VUE_APP_BOT_CHAT_URL = process.env.NODE_ENV === 'production' ? 'https://radiant-lake-34017.herokuapp.com/bot-chat' : 'http://localhost:3000/bot-chat';

export default CONFIG;
