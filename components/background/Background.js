import styles from './Background.module.css'


export default function Background({ children }) {
    
    return (
        <body className={styles.background}>{ children }</body>
    );
}


export {Background}