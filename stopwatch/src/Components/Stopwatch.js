import React, {useState, useEffect, useRef} from "react";

const Stopwatch = () => {
    const [running,setRunning] = useState(false);
    const [elapsedTime,setElapsedtime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(()=>{
        if(running){
            intervalIdRef.current = setInterval(()=>{
                setElapsedtime(Date.now()- startTimeRef.current);
                // console.log(elapsedTime);
            },10)
        }

        console.log(elapsedTime);
        return () => { 
            clearInterval(intervalIdRef.current)
        }// this is used so that that intervalIdRef.current becomes 0 
        // and stop watch will continue from where it was paused
        // if condition will only run when stopwatch is running
        // but this will still run when it is paused

        console.log(elapsedTime);

    },[running])


    function start()
    {
        setRunning(true); 
        startTimeRef.current = Date.now() - elapsedTime;
        console.log("meeee")
    }

    function stop()
    {
        setRunning(false);
    }

    function reset()
    {
        setElapsedtime(0);
        setRunning(false); 
    }

    function formatTime()
    {
        let hour = Math.floor(elapsedTime/(1000*60*60));
        let min =  Math.floor(elapsedTime/(1000*60) % 60);
        let sec =  Math.floor(elapsedTime/(1000) % 60);
        return `${hour}: ${min} : ${sec}`;
    }

    return (<> 
    <div className="stopwatch">
        <div className="display"> {formatTime()} </div>
        <div className="controls"> 
            <button class="custom-button" onClick={start}> start</button>
            <button class="custom-button" onClick={stop}> stop</button>
            <button class="custom-button" onClick={reset}>  reset</button>
        </div>
    </div>
    
    </>)
}

export default Stopwatch;