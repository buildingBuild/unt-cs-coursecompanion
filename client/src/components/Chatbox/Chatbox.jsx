import { useState, useEffect } from "react";
import { Chatting } from "./Chatting";
import axios from "axios";
//import { sendMesage } from "./sendMessage";
axios.defaults.baseURL = "http://localhost:5000";
import "./Chatbox.css";

export function Chatbox() {
    const [chatting, setChatting] = useState(false);
    const [userQuery, setUserQuery] = useState("");
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [aiResponse, setAiResponse] = useState("");
    const [latency, setLatency] = useState(0);
    const [chat, setChat] = useState({ userQuestion: "", response: "", latency: 0, });
    const [convos, setConvos] = useState([]);

    async function sendMesage() {

        try {
            if (loading)
                return;

            setLoading(true)
            setChatting(true)
            setUserQuery(message)

            const start = performance.now();
            const res = await axios.post("http://localhost:5000/api/chat", {
                userQuestion: userQuery,
            });

            if (res.status == 200) {

                const end = performance.now();

                const duration = end - start;
                let convertedDuration = (duration / 1000).toFixed(3)





                setLatency(convertedDuration)
                setAiResponse(res.data.message)
                setLoading(false)


                setChat({
                    userQuestion: userQuery,
                    response: aiResponse,
                    latency: latency,
                })

                setConvos((prevConvo) => [...prevConvo, chat])
                console.log(convos)
            }
            else {
                throw new Error(`Server responded with ${res.status}`);
            }
        }
        catch (err) {

            console.log(err.message);
            setAiResponse(err.message)
            setLoading(false)
        }
    }


    const updateMessage = (e) => {
        setMessage(e.target.value)
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
                <Chatting userQuery={userQuery} setUserQuery={setUserQuery} loading={loading} setLoading={setLoading} aiResponse={aiResponse} setAiResponse={setAiResponse} setConvos={setConvos} convos={convos} />
                <div className="input-contents">
                    <textarea
                        placeholder="Ask about csce 2110 difficulty"
                        onChange={updateMessage}
                    ></textarea>
                    <div className="input-icons">
                        <img src="/circle.svg" onClick={sendMesage} disabled={loading}></img>
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
