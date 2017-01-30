var recast= require('recastai')

var requestToken = 'a7a706351177d232d7c1efca6cb6e9d6'

var client = new recast.Client(requestToken)

client.textConverse('hello')
.then(function(res){
console.log(res)

var reply = res.reply() 
var fullReply = res.joinedReplies('\n')

console.log('CURRENT ACTION')
console.log(res.action.slung)

console.log('\nONE REPLY')
console.log(reply)

console.log('\nALL REPIES')
console.log(fullReply)

}).catch(function(err){
console.log('err', err)
//handle error
})