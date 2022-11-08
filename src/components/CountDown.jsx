import React, {useEffect, useState} from 'react'
import './CountDown.css'

    const CountDown = () => {
        const [time, setTime] = useState("");
        useEffect(() => {
            let CountDownDate = new Date("Jan 1, 2023 08:11:00").getTime();
            let x = setInterval(() => {
                let now = new Date().getTime();
                let distance = CountDownDate - now;

                let days = Math.floor(distance / (1000 *60 *60 *24));
                let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60 * 60)) / (1000))

                setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
                if (distance < 0) {
                    clearInterval(x)
                    setTime("CountDown Finished");
                }
                
                
            }, 1000);
        }, []);

  return (
    <div className='countdown'>
        <h2>{time}</h2>
    </div>
  )
}

export default CountDown