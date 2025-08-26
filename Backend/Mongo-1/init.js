const mongoose=require('mongoose'); 
const Chat=require('./models/chat');


main().then(() =>{
    console.log("MongoDB is connected");
}).catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats=[
        {
    from: "Neha",
    to: "Priya",
    msg: "Send me your exam sheets",
    created_at: new Date()
},
{
    from: "Amit",
    to: "Rohit",
    msg: "Can you share yesterday's notes?",
    created_at: new Date()
},
{
    from: "Simran",
    to: "Niharika",
    msg: "Are you coming for the group study?",
    created_at: new Date()
},
{
    from: "Ravi",
    to: "Akash",
    msg: "Please send me the project assignment file.",
    created_at: new Date()
},
{
    from: "Kiran",
    to: "Megha",
    msg: "Let’s revise the DBMS concepts tomorrow.",
    created_at: new Date()
}
]

Chat.insertMany(allChats);