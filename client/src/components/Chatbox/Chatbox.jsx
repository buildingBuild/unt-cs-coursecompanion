import { useState, useEffect } from "react";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";
import "./Chatbox.css";

export function Chatbox() {
    const [chatting, setChatting] = useState(true);
    const [userQuery, setUserQuery] = useState("");
    const [loading, setLoading] = useState("")
    const [aiResponse, setAiResponse] = useState("");
    const [latency, setLatency] = useState("");
    const [chats, setChats] = useState({
        userQuestion: "",
        response: "",
        latency: "",
    });
    const [history, setHistory] = useState({});

    async function sendMesage() {
        try {

            const start = performance.now();

            const res = await axios.post("http://localhost:5000/api/chat", {
                userQuestion: userQuery,
            });

            if (res.status == 200) {

                const end = performance.now();

                const duration = end - start;
                let convertedDuration = (duration / 1000).toFixed(3)


                console.log(`Took ${convertedDuration} seconds`);

                setLatency(convertedDuration)
                setAiResponse(res.data.message)

                console.log(convertedDuration)

            }
            else {
                throw new Error(`Server responded with ${res.status}`);
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }


    const updateMessage = (e) => {
        setUserQuery(e.target.value);
    };

    return (
        <>
            <div className={chatting ? "Chatting-container" : "Chatbox-container"}>
                <div className="box-hero">
                    <h1>Course Companion</h1>
                    <h4>
                        Discover UNT CS courses and professors powered by real student
                        insights
                    </h4>
                </div>
                <div className="allChats">
                    <div className="userText">
                        <p>User text User text User text User text <br /> ser text User tex User text User text User text User text<br></br> User text User text User text User text User text User text User text User text  text User tex User text User text User text User text<br></br> User</p>
                    </div>
                    <div className="aiResponse">
                        <p> AI Response</p>
                    </div>
                    <div className="userText">
                        <p>User question</p>
                    </div>
                    <div className="aiResponse">
                        <p> AI Response</p>
                    </div>
                    <div className="userText">
                        <p>User text User text User text User text <br /> ser text User tex User text User text User text User text<br></br> User text User text User text User text User text User text User text User text  text User tex User text User text User text User text<br></br> User</p>
                    </div>
                    <div className="aiResponse">
                        <p> AI Response</p>
                    </div>
                    <div className="userText">
                        <p>User question</p>
                    </div>
                    <div className="aiResponse">
                        <p> AI Response</p>
                    </div>
                    <div className="userText">
                        <p>User text User text User text User text <br /> ser text User tex User text User text User text User text<br></br> User text User text User text User text User text User text User text User text  text User tex User text User text User text User text<br></br> User</p>
                    </div>
                    <div className="aiResponse">
                        <p> AI Response</p>
                    </div>
                    <div className="userText">
                        <p>User question</p>
                    </div>
                    <div className="aiResponse">
                        <p> AI Response</p>
                    </div>
                    <div className="userText">
                        <p>User text User text User text User text <br /> ser text User tex User text User text User text User text<br></br> User text User text User text User text User text User text User text User text  text User tex User text User text User text User text<br></br> User</p>
                    </div>
                    <div className="aiResponse">
                        <p> AI Response</p>
                    </div>
                    <div className="userText">
                        <p>User question</p>
                    </div>
                    <div className="aiResponse">
                        <p> AI Response</p>
                    </div>
                </div>
                <div className="input-contents">
                    <textarea
                        placeholder="Ask about csce 2110 difficulty"
                        onChange={updateMessage}
                    ></textarea>
                    <div className="input-icons">
                        <img src="/circle.svg" onClick={sendMesage}></img>
                    </div>
                </div>
                <div className="communityEntries">
                    <div className="pLogo">
                        <h4>Popular Questions</h4>
                    </div>
                    <div className="entries" id="entries">
                        <h5>How hard is csce 3600?</h5>
                        <h5>Should I take doran for csce 4010?</h5>
                        <h5>Best studying Plan for csce 2110</h5>
                    </div>
                </div>
            </div>
        </>
    );
}
