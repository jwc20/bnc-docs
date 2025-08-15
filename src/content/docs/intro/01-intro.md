---
title: Multiplayer using websocket
---

There are two main approaches to making an online multiplayer web game: **polling** or **streaming** data between a client and a server. Without these, we have to use HTTP requests and make the users refresh their browser page for updates.

## Polling/Long Polling

Polling technique can be used for periodically sending GET requests to backend server for fresh data. Another polling technique is **long polling**, where a request is made to server and the server delays sending a response for a certain amount of time until new data is available.

Streaming data is a better approach to online multiplayer since it ensures actual real-time data as soon as it's available. WebRTC and WebSockets are two options for data streaming.

## Streaming

### WebRTC

**WebRTC** can be used to establish direct peer-to-peer connection with two or more users and create continuous data streams. However, it turns out that WebRTC is browser dependent which is not a problem for most browsers on modern computers but may cause performance problems on mobile.

The two libraries I found for WebRTC are **Peer.js (Javascript) and AioRTC (Python).**

**Peer.js** I have used before for one of my projects but one potential problem is that it is used client-side. This means communication is handled on the frontend. This could be a problem because we can't validate data (players can cheat). 

Using **Peerjs-server** is another option, however, peerjs-server uses WebSocket, which means we need to add p2p (peer.js) between clients and add HTTP/WebSocket to server. This is an overall added complexity especially for a simple online multiplayer game.

Another option is **aiortc** python library. This may be a better option than peer.js/peerjs-server but I haven't fully studied this library because the better option is WebSocket.

### Websocket

In this project, I will be using **WebSocket** to stream data since the implementation is not difficult (at least, not as difficult as I initially thought) and since I have used it before in my previous project. 

Streaming in WebSockets basically means sending small data packets over an open connection between the server and the client. 

The data packets usually have two keys/properties: message `type` and `content`. The `type` can be used to distinguish what the messages are, for example, `chat_message`, to say this message is a chat from users or `start_game`/`end_game` to tell the client to start or end the game.

#### Typical Websocket Flow

1. Client makes HTTP request to the server asking to open a connection.
2. If the server agrees, it sends a `101 switching protocol` as a response.
3. Afterwards, the handshake is complete and TCP/IP connection is left open, allowing two-way, bi-directional messages to be passed between two parties.
4. When one of the parties connection drops off, TCP/IP connection is closed and the TCP resource is unallocated. This is called **full-duplex connection**.
5. If the connection is active, the server is listens for messages that a user send.


### Another option

There is another option using **WebTransport** which is supposedly a better version of websocket because of faster handshake and reliability. This approach is fairly new and lacked examples/usage so I decided against using it for this project.


### See also:

- https://www.linkedin.com/pulse/python-basics-understanding-long-polling-rohan-yeole/

- https://peerjs.com/

- https://github.com/peers/peerjs-server/blob/f5153eff9b04e5b5fe046c7c0640a1572b4df716/src/services/webSocketServer/index.ts#L25

- https://github.com/jwc20/tic-tac-toe-react/tree/refactor-peerjs

- https://github.com/jwc20/ultimate-rps-server/blob/main/app/routers/websocket_handler.py


<!-- Cloudflare Web Analytics -->
<script
    defer
    src="https://static.cloudflareinsights.com/beacon.min.js"
    data-cf-beacon='{"token": "e7969b98a1cf459ba6a42d761d453759"}'
></script>
<!-- End Cloudflare Web Analytics -->

<script
    data-goatcounter="https://cjw25.goatcounter.com/count"
    async
    src="//gc.zgo.at/count.js"
></script>

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PQR2T2PHBP"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PQR2T2PHBP');
</script>