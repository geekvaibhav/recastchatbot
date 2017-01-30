var recast = require('recastai')

var requestToken = 'a7a706351177d232d7c1efca6cb6e9d6'

var client = new recast.Client(requestToken)

client.textConverse('Hi', { conversationToken: '9cf9d82a04b88a57c1be3bca7807f653' })
.then(function (res){

var reply = res.reply()
var fullReply = res.joinedReplies('\n')

console.log('CURRENT ACTION')
Console.log(res.action.slug)

console.log('\nREPLY')
console.log(reply)

}).catch(function(err){
console.log('err', err)
// handle err
})