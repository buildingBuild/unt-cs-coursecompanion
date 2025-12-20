export function Chatting({ userQuery, setUserQuery, loading, setLoading,
    aiResponse, setAiResponse, setConvos, convos }) {




    return (
        <div className="allChats">
            {convos.map((convo, index) => {

                return (
                    <>
                        <div className="userText">
                            <p>User Query : {convo.userQuestion} </p>
                        </div>

                        <div className="aiResponse">
                            <p> Ai Response : {convo.response} </p>
                        </div>

                    </>


                )
            })}



            {/* 
            <div className="userText">
                <p>User Query : {userQuery} </p>
            </div>
            <div className="aiResponse">
                <p> Ai Response : {aiResponse}  </p>
            </div>
            */}

        </div >

    )






}