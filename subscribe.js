const db = require('./bd.js');
console.log("pelo menos entrei");

addEventListener('load', async () => {
    let sw = await navigator.serviceWorker.register('./sw.js')
    console.log(sw)
    subscribe()
})

async function subscribe(){
    let sw = await navigator.serviceWorker.ready;
    let push = await sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'BHZo8rRfx4OpFz2OfGxhgqMINqOb8PdqvB9Q65XeQXZkKD6AgHW6iNyDBtyk8vr2h7G--eGCiYigbNew-dkd3Xw'
    })
    db.insert(push.endpoint, push.keys.p256dh, push.keys.auth);
    //console.log(JSON.stringify(push))
}

