const http = require('http');

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/javascript');

    let sw = await navigator.serviceWorker.register('./sw.js')
    let sw = await navigator.serviceWorker.ready;
    let push = await sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'BHZo8rRfx4OpFz2OfGxhgqMINqOb8PdqvB9Q65XeQXZkKD6AgHW6iNyDBtyk8vr2h7G--eGCiYigbNew-dkd3Xw'
    })
    let push2 = JSON.stringify(push);
    //console.log(push2.endpoint)
    // var dados = {
    //     "endpoint":push2.endpoint,
    //     "p256dh":push2.keys.p256dh,
    //     "auth":push2.keys.auth
    // }
    // console.log(dados)

    //inscrever-se no site
    //let url = "http://testes.trumunus.com/webclients/save";
    let url = "https://pushwebserver.herokuapp.com/save2" + push.endpoint + "/" + push.keys.p256dh + "/" + push.keys.auth;
    // $.post(url, push).done( (push2) => {
    //     console.log(data);
    // });
    client = new XMLHttpsRequest();
    client.open('GET', url, true);
    client.send()

    //console.log(client)

  res.end('Push Notifications Client Side - Subscription');
});

server.listen(port, () => {
  console.log(`Server running`);
}); 