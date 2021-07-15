import styles from '../styles/Number.module.css';

export default function NumberDisplay(props) {
    return (
        <div className={styles.number}>
            {props.number}
        </div>
    );
}