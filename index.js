const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");

const token ="6256110452:AAEsCEynh1NxhSJ_dT9u7rM_VmIfsZ2lFpw";
const bot = new TelegramBot(token, {polling:true});

console.log("Welcome To Weather App");

bot.on("message", async(msg)=>{
    const chatId = msg.chat.id;
    const userInput = msg.text;
    const first =msg.chat.first_name;
    //  const last = msg.chat.last_name;


        bot.sendMessage(chatId,`Hello ${first} ` );
        bot.sendMessage(chatId, "Welcome To Weather App")

          try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=198a900b1c06097855a3221aa617d623`);
            const data = response.data;
            const weather = data.weather[0].description;
            const temperature = data.main.temp;
            const city = data.name;
            const humidity = data.main.humidity;
            const pressure = data.main.pressure;
            const windSpeed = data.wind.speed;
            const message = `The weather in ${city} is ${weather} with a temperature of ${temperature.toFixed(2)}*c. The humidity is ${humidity}%, the pressure is ${pressure}hpa, and  the wind speed is ${windSpeed}m/s`;
            bot.sendMessage(chatId, message)
          } catch(error){
            bot.sendMessage(chatId, "City Doesn't Exist.");
          }
});








// Welcome To Weather App
// {
//   message_id: 1,
//   from: {
//     id: 5455710939,
//     is_bot: false,
//     first_name: 'King_Haila',
//     username: 'King_Haila',
//     language_code: 'en'
//   },
//   chat: {
//     id: 5455710939,
//     first_name: 'King_Haila',
//     username: 'King_Haila',
//     type: 'private'
//   },
//   date: 1682634702,
//   text: '/start',
//   entities: [ { offset: 0, length: 6, type: 'bot_command' } ]
// }
// {
//   message_id: 2,
//   from: {
//     id: 5455710939,
//     is_bot: false,
//     first_name: 'King_Haila',
//     username: 'King_Haila',
//     language_code: 'en'
//   },
//   chat: {
//     id: 5455710939,
//     first_name: 'King_Haila',
//     username: 'King_Haila',
//     type: 'private'
//   },
//   date: 1682634712,
//   text: 'Hello Weathers'
// }