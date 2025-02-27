import styles from "./HomePage.module.css";
import { useState } from 'react';

const HomePage = () =>{
    const [fact, setFact] = useState('');

    const fetchFact = async () =>{
        try {
            const response = await fetch ("https://uselessfacts.jsph.pl/random.json?language=en");
            const data = await response.json();

            setFact(data.text);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
let quoteElement = null;
if(fact) {
    quoteElement = (
        <blockquote> {fact} </blockquote>
    )
}
    return (
        <div className={styles.container}>
            <h1>A journey of a thousand miles begins with a single step.</h1>
            {quoteElement}
            <button onClick = { fetchFact } className={styles.btn}> fun facts</button>
        </div>
    )
}

export default HomePage;