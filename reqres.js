const Bot = require('recastai-botconnector')
const express = require('express')
const bodyParser = require('body-parser')

/* server setup */
const app = express()

app.set('port', 5000)
app.use(bodyParser.json())
app.post('/', (req, res) => myBot.listen(req, res))
app.listen(app.get('port'), () => console.log('Bot running on port', app.get('port')))

/* setup bot */
const myBot = new Bot({ botId: 'YOUR BOT ID', userSlug: 'YOUR USER SLUG', userToken: 'YOUR USER TOKEN' })

/* on new message */
myBot.onTextMessage(message => {
  console.log(message)
  const text = {
    type: 'text',
    content: 'Here is a reply!',
  }

  message.reply(text)
  .then(() => console.log('Message successfully sent'))
  .catch(err => console.log(`Error while sending message: ${err}`))
})