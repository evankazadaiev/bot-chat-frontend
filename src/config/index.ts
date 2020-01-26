const CONFIG: any = {};

CONFIG.VUE_APP_BOT_CHAT_URL = process.env.NODE_ENV === 'production' ? 'https://vuejs-bot-chat-backend.herokuapp.com/' : 'http://localhost:3000';

export default CONFIG;
