const push = require('web-push')
const db = require('./bd.js');
console.log(db)

//let vapidKeys = push.generateVAPIDKeys();
let vapidKeys = {
    publicKey: 'BHZo8rRfx4OpFz2OfGxhgqMINqOb8PdqvB9Q65XeQXZkKD6AgHW6iNyDBtyk8vr2h7G--eGCiYigbNew-dkd3Xw',
    privateKey: 'v0bzUjaiCh2JbrxhgIXIaofW1YFbf25aym1EsFkVHlY'
}

push.setVapidDetails('mailto:kidikwenda@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {endpoint:"https://fcm.googleapis.com/fcm/send/engNulap46A:APA91bF563OFAr7YKfYGMBLRSj9QQYz9sjrZKEjs9yzEPtG7GGqNhHhYeYjvMNNng5Gcy5KvQRabfiEuuqJ8KVQnAPovnoTJtJ4KNasddg0fIkQjS8VHVbofmNSOCD80XU0dbvwJUMnW",expirationTime:null,keys:{p256dh:"BIDroqwQSl-7MsiEhemfF1btZ56VjbXDlMjkR4E2w3idm6aGBKBEJ_bkSC9QCGr4810HhZTCmYLdu80fD4ZkwdY",auth:"hbqnKIk8brWZDV3FhnVosQ"}};
let sub2 = {endpoint:"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABeHdD-ocF9tcD8CnWumm3X5b553DOVwy7dJOS2HE1gW467u2nYMe9R_7PxgJplqGglIoC4Dv51tGf9FKvUHsAf95NSiwEjuK1Fc5tpcS4GCHzHaOHRmF7Hww4u1Svo_SOGPQanNjZqe_DlSjfgrvkqu9D-QtUYHI7z_6ttvFq1mre59ug",keys:{auth:"pWw3Q-YqDxSguYAv4eltIw",p256dh:"BCWP0lsTxfG2_gXRCzUz_Ov8DZhymegWz3l3yvrFth-nltda6oMZQ75-Q3VqbJe_xoejRkaTAvrvHu4VEHZLLuc"}};

push.sendNotification(sub, 'teste de mensagem')
push.sendNotification(sub2, 'teste de mensagem')

/*
var clientes = db.selectAll();

clientes.forEach(element => {
    let sub = {
        endpoint:element.endpoint,
        keys :{
            p256dh:element.p256dh,
            auth:element.auth}};
    push.sendNotification(sub, 'teste de mensagem para vários clientes')
});*/