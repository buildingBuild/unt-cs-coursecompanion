export async function sendMesage() {

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