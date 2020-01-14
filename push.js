var push = require('web-push')

//let vapidKeys = push.generateVAPIDKeys();
let vapidKeys = {
    publicKey: 'BHZo8rRfx4OpFz2OfGxhgqMINqOb8PdqvB9Q65XeQXZkKD6AgHW6iNyDBtyk8vr2h7G--eGCiYigbNew-dkd3Xw',
    privateKey: 'v0bzUjaiCh2JbrxhgIXIaofW1YFbf25aym1EsFkVHlY'
}

push.setVapidDetails('mailto:kidikwenda@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    endpoint:"https://fcm.googleapis.com/fcm/send/engNulap46A:APA91bF563OFAr7YKfYGMBLRSj9QQYz9sjrZKEjs9yzEPtG7GGqNhHhYeYjvMNNng5Gcy5KvQRabfiEuuqJ8KVQnAPovnoTJtJ4KNasddg0fIkQjS8VHVbofmNSOCD80XU0dbvwJUMnW","expirationTime":null,
    keys :{
        p256dh:"BIDroqwQSl-7MsiEhemfF1btZ56VjbXDlMjkR4E2w3idm6aGBKBEJ_bkSC9QCGr4810HhZTCmYLdu80fD4ZkwdY",
        auth:"hbqnKIk8brWZDV3FhnVosQ"}};

push.sendNotification(sub, 'teste de mensagem')