import { useState, useEffect } from 'react'
import './Chatbox.css'

export function Chatbox(){

const [chatting, setChatting] = useState(true)
const [userQuery, setUserQuery] = useState("");
const [aiResponse, setAiResponse] = useState("")
const [chats, setChats] = useState({userQuestion : "",response : "", latency : ""})
const [history,setHistory] = useState({})




async function sendMesage(){
try{

const res = await fetch("http://localhost:5000/api/chat",{
    method : "POST",
     headers: {
            'Content-Type': 'application/json'
        },
    body: JSON.stringify({userQuestion : userQuery})
})
const data = await res.json();
console.log(data.message)
}

catch(err) {

console.log(err.message)

}

}



const updateMessage = (e) => {
setUserQuery(e.target.value)
}

return(
<>
<div className={chatting ? "Chatting-container" : "Chatbox-container"}>
<div className='box-hero'>
<h1>Course Companion</h1>
<h4>Discover UNT CS courses and professors powered by real student insights</h4>
</div>
<div className='allChats'>
<div className='userText'>
    <h1>User question</h1>
</div>
<div className='aiResponse'>
    <h1>AI response</h1>
</div>


</div>
<div className='input-contents'>
    <textarea placeholder='Ask about csce 2110 difficulty' onChange={updateMessage}>
    </textarea>
<div className='input-icons'>
    <img src='/circle.svg' onClick={sendMesage}></img>
</div>
    
</div>
<div className='communityEntries'>
    <div className='pLogo'> 
    <h4>Popular Questions</h4>
    </div>
    <div className='entries' id='entries'>
    <h5>How hard is csce 3600?</h5>
    <h5>Should I take doran for csce 4010?</h5>
    <h5>Best studying Plan for csce 2110</h5>
    </div>
</div>
</div>
</>




)

}