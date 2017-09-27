# Regina : Real-time database using mongoDB and Socket.io

* Regina allows you to run mongo methods : 
> 'insert', 'find', 'update', 'delete', 'count', 'aggregate' directly from the client side (as with firebase).
* Regina can track keywords based events and send back messages to CLIs subscribed to these keywords.
* Regina comes with a Java and a JS CLI.

## Installation

`npm install regina`

## Usage

* run with the default settings (db='localhost:27017/reginadb' and port=3009) : 
1. mongod
2. `node regina.js`
3. open your browser at localhost:3009 and check that you are on the regina home page. 
4. use one of the JAVA or JS CLI to send requests to database in real-time from the client side.


* run with custom settings :
1. mongod --port 2540
2. `node regina.js 'localhost:2540/mydb' 6980` 
3. open your browser at localhost:6980 check that you are on the regina home page.
4. use one of the JAVA or JS CLI to send requests to database in real-time from the client side.
