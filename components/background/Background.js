import styles from './Background.module.css'


export default function Background({ children, style }) {
    
    return (
        <div className={styles.background} style={style}>{ children }</div>
    );
}


export {Background}