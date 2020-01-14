var push = require('web-push')

//let vapidKeys = push.generateVAPIDKeys();
let vapidKeys = {
    publicKey: 'BHZo8rRfx4OpFz2OfGxhgqMINqOb8PdqvB9Q65XeQXZkKD6AgHW6iNyDBtyk8vr2h7G--eGCiYigbNew-dkd3Xw',
    privateKey: 'v0bzUjaiCh2JbrxhgIXIaofW1YFbf25aym1EsFkVHlY'
  }

push.setVapidDetails('mailto:kidikwenda@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let subsc
push.sendNotification(sub, 'test message')