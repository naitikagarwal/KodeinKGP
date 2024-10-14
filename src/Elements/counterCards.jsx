import {useEffect, useState} from 'react'
import './counterCards.css'
import AOS from "aos";
import 'aos/dist/aos.css'
function CounterCard({title, digit, xtra}) {
  useEffect(()=>{
    AOS.init();
  },[ ])

    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false); 

    const handleScroll = () => {
        const counterDiv = document.getElementById('counter');
        const rect = counterDiv.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        
        if (rect.top >= 0 && rect.bottom <= windowHeight && !hasAnimated) {
            setHasAnimated(true);
            startCounting();
        }
    };
    const startCounting = () => {
        let start = 0; // Starting number
        const duration = 2000; // Duration of the animation in milliseconds
        const incrementTime = (duration / digit); // Time between increments

        const interval = setInterval(() => {
            start += 1; // Increment the count
            setCount(start); // Update the state

            if (start >= digit) {
                clearInterval(interval); // Clear interval when reaching the end
            }
        }, incrementTime);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll); // Add scroll event listener

        return () => {
            window.removeEventListener('scroll', handleScroll); // Clean up on unmount
        };
    }, [hasAnimated]); 
  return (
    <>
      <div className="cContainer" data-aos="fade-up" data-aos-duration="500" data-aos-offset="200">
        <div className="digits" id='counter'>{count}{xtra}+</div>
        <div className="CardTitle">{title}</div>
      </div>
    </>
  )
}

export default CounterCard
