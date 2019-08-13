const SlackBot = require('slackbots');
const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()

const bot = new SlackBot({
    token: `${process.env.BOT_TOKEN}`,
    name: 'inspire'
})

// Start Handler
bot.on('start', () => {
    const params = {
        icon_emoji: ':robot_face:'
    }

    bot.postMessageToChannel(
        'general',
        'Get inspired while working with @inspire',
        params
    );
})

// error handler. 

bot.on('error', (err) => {
    console.log(err);
})

// Message Handler
bot.on('message', (data) => {
    if(data.type !== 'message') {
        return;
    }
    handleMessage(data.text);
})

function handleMessage(message) {
    if(message.includes(' quote')) {
        inspireMe()
    } else if(message.includes(' joke')) {
        randomJoke()
    } else if(message.includes(' help')) {
        runHelp()
    }
}

// inspire Me
function inspireMe() {
    axios.get('https://raw.githubusercontent.com/BolajiAyodeji/inspireNuggets/master/src/quotes.json')
      .then(res => {
            const quotes = res.data;
            const random = Math.floor(Math.random() * quotes.length);
            const quote = quotes[random].quote
            const author = quotes[random].author

            const params = {
                icon_emoji: ':male-technologist:'
            }
        
            bot.postMessageToChannel(
                'general',
                `:zap: ${quote} - *${author}*`,
                params
            );

      })
}

// Random Joke
function randomJoke() {
    axios.get('https://api.chucknorris.io/jokes/random')
      .then(res => {
            const joke = res.data.value;

            const params = {
                icon_emoji: ':smile:'
            }
        
            bot.postMessageToChannel(
                'general',
                `:zap: ${joke}`,
                params
            );

      })
}

// Show Help
function runHelp() {
    const params = {
        icon_emoji: ':question:'
    }

    bot.postMessageToChannel(
        'general',
        `Type *@inspire* with *quote* to get an inspiring techie quote, *joke* to get a Chuck Norris random joke and *help* to get this instruction again`,
        params
    );
}