# terminal-chat-app-server


# server

## Requirements
- We’ll be changing the underlying networking implementation of our TERMINAL-CHAT-APP-SERVER system from using node events to using a library called socket.io so that we can do networked events. Socket.io manages the connection pool for us, makes broadcasting much easier to operate, and works well both on the terminal (between servers) and with web clients.

- we’ll be creating a networking layer and a user stories that speak to application. 

- As a client, I want to alert the system when I have a message to respond to. 
- As a client, I want to be notified when there is a message to be respond to. 
As a client, I want to alert the system when I have respond  to a message and its been sent. 
- As a client, I want to alert the system when a message has been received. 
- As a user, I want to be notified when my message has been received.
And as developers, here are some of the development stories that are relevant to the above

- As a developer, I want to create network event driven system using Socket.io so that I can write code that responds to events originating from both servers and web applications

# Technical Requirements / Notes

- Specifically, we’re going to use Socket.io namespaces to segment our events.

- We’ll use one namespace called SERVER where all of our clients (clients and users) will connect
- By default, all clients and users hear all of the messages…
- Ensure that each client only processes message and received events for it’s own message!

 # Options
- As a client, send your client id with every message, and then when the broadcasted messages come back, ignore those that are not yours
- Setup a separate namespace for each 
clients
- Each chat-room will have it’s own “room” within the ‘server’ namespace


#  TERMINAL-CHAT-APP-SERVER Application Server Modifications
- Start a socket.io server on a designated port
- Create and accept connections on a namespace called server
- Within the namespace:
- Monitor the correct general events
- message, sent, received
- Broadcast the events and payload back out to the appropriate clients in the server namespace
- message can go out to all sockets (broadcast it) so that the users can hear it
- sent and received are meant to be heard only by the right client. 

# Client TERMINAL-CHAT-APP-SERVER Application
- Create a “TCA id” for the client, perhaps with a .env file
- Connects to the TCA server as a socket.io client to the TCA namespace
- Every .5 seconds, simulate a new client message.
- Create a payload object with your TCA id, message id, user name, address
- Emit that message to the TCA server with an event called MESSAGE
- Listen for the received event coming in from the TCA server
- Log “it was nice chatting with you payload.id” to the console

# user Application
- Connects to the TCA server as a socket.io client to the TCA namespace
- Listen for the message event coming in from the TCA server
- Simulate message has been sent
- Wait 1.5 seconds
- Log “received message payload.id” to the console
- emit an sent message event to the TCA server with the payload
- Simulate received the message
- Wait 3 seconds
- emit a received message to the TCA server with the payload

- When running, the client and user consoles should show their own logs. Additionally, the TCA server should be logging everything. Your console output should look something like as follow in the notes. 

# Notes
- You will need to start your servers up in the right order so that you can visually test things out.

## SERVER - needs to be up so that it can accept and re-emit events

## CLIENT - needs to have a running server to connect to, so that it can hear events

## USER - also needs the server to be running and for CLIENT to be sending messages. 



# Solution
<!-- embedded whiteboard image -->
![whiteBoard](assets/TCA-UML.png)

# connected repositories 

[client]( )
[user]( )

