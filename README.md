# slackBot
This slackBot displays a inspiring quotes and jokes to slack users. 

# Setup

### Install dependencies

```
npm install

npm start
```

### [Create a bot in Slack](https://api.slack.com/apps/AM92STGGG/general?) and generate and include your OAuth bot token

```
// Add this in your .env
BOT_TOKEN=YOUR_OWN_BOT_TOKEN
```

```js
const bot = new SlackBot({
    token: `${process.env.BOT_TOKEN}`,
    name: 'YOUR_OWN_APP_NAME'
})
```

## Author
[Copain Fabrice](https://github.com/Cop1fab)

## Licence
[MIT](https://opensource.org/licenses/MIT)

