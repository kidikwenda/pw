var push = require('web-push')

//let vapidKeys = push.generateVAPIDKeys();
let vapidKeys = {
    publicKey: 'BHZo8rRfx4OpFz2OfGxhgqMINqOb8PdqvB9Q65XeQXZkKD6AgHW6iNyDBtyk8vr2h7G--eGCiYigbNew-dkd3Xw',
    privateKey: 'v0bzUjaiCh2JbrxhgIXIaofW1YFbf25aym1EsFkVHlY'
}

push.setVapidDetails('mailto:kidikwenda@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/ciCHG-fnZtE:APA91bHE8geD6XBHl6iyAbbPHb9fbKTwz0zzeDi73b8khtJtSppY6f71xtIYlszV0rMr7bPtvt4YzOlVyVDzBake_wc9hZhewVvxAxugehXugcOm9kyKgWuXrSwEbuq8AUx8hr_6Fwg8", "expirationTime": null, "keys": { "p256dh": "BJkDLt4H4HotLE5PRA5Zd3JQksfq212NtwJxfXnY16ZRBT1k0nsY8lfirNs1N68AerM4LMmS8BiVp-fQsPRd9JA", "auth": "MafV5kCPQCkkaGscTIT-ZA" } };

push.sendNotification(sub, 'test message')