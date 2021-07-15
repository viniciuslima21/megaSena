import { useState } from 'react';
import { mega } from '../functions/mega';
import NumberDisplay from '../components/NumberDisplay';

import styles from '../styles/Home.module.css';

export default function Home() {

    const [quantity, setQuantity] = useState(6);
    const [numbers, setNumbers] = useState([]);

    function renderNumbers() {
        if (typeof numbers === 'string') {
            return (
                <div className={styles.error}>
                    {numbers}
                </div>
            );
        } else {
            return numbers.map(
                number => <NumberDisplay key={number} number={number} />
            );
        }
    }

    return (
        <div className={styles.page}>
            <h1>MEGA-SENA</h1>
            <p>
                Coloque a quantidade de números que deseja gerar e clique em 'Gerar'.
                <br /> Os números vão de 1 a 60, sendo possível gerar entre 6 e 25 resultados por vez.
            </p>
            <div>
                <input 
                    className={styles.input}
                    type="number" 
                    min="6" 
                    max="25" 
                    value={quantity} 
                    onChange={ev => setQuantity(ev.target.value)} 
                />
                <button className={styles.button} onClick={() => setNumbers(mega(quantity))}>
                    Gerar
                </button>
            </div>
            <div className={styles.numbers}>
                {renderNumbers()}
            </div>
        </div>
    )
}