import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
     // Kod koji će se izvršiti
     const id = setInterval(() => {
        setSeconds(prev => prev + 1);
     }, 1000)

     // Clean up funkcija, koja se poziva kada se komponenta makne iz DOM-a
     return () => {
        clearInterval(id);
     }
  }, []); // Izvršava se samo prvi prvom renderiranju

  return <p>Elapsed: {seconds} seconds</p>
}

export default Timer;