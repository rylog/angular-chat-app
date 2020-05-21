import { Socket } from "socket.io";
/* import { MongoClient, MongoError } from "mongodb"; */

let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);
const PORT = process.env.PORT || 3000
/* const mongo = require('mongodb').MongoClient; */

/* mongo.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, (err: MongoError, db: MongoClient) => {
    if (err) {
        throw err;
    } */

    io.on('connection', (socket: Socket) => {
/*         console.log("user connected");
        const dbo = db.db('angular-chat');
        let chat = dbo.collection('chats');
        chat.find().limit(100).sort({ _id: 1 }).toArray((err, res) => {
            if (err) {
                throw err;
            }
            socket.emit('output', res);
        }); */

        //Handle input events 
        socket.on('message', (message:any) => {
            console.log(message);
            let name = message.senderId;
            let content = message.content;
            console.log("Message Received: " + message.content);
            //Check for name and message 
            if (!name || !message) {
                socket.emit('status', {
                    message: 'Message is empty',
                    clear: true
                });
            }
            /* chat.insertOne({ senderId: name, message: message }, () => {
                    socket.emit('output', [message])
                }); */

            //Send status object
            io.emit('status',{
                message: 'Message sent',
                clear: true
            });
            io.emit('message', message);
        });
        // Handle clear
        socket.on('clear', (data) => {
            //Remove all chats from collection
     /*        chat.remove({}, () => {
                socket.emit('cleared');
            }) */
        })

        socket.on("disconnect", () => {
            console.log("user disconnected");
        });
    })


/* }) */

// Initialize our websocket server on port 
http.listen(PORT, () => {
    console.log(`started on port ${PORT}`);
});

