import styles from './Background.module.css'


export default function Background({ children, style }) {
    
    return (
        <body className={styles.background} style={style}>{ children }</body>
    );
}


export {Background}