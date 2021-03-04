import  styles from '../../styles/Home.module.css'

export default function Footer(){
    return(
        <>
            <footer className={styles.footer}>
                <a
                    href="https://jasiriinc.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '} JasiriInc
          <img src="/images/jasirilogo.jpg" alt="Vercel Logo" className={styles.logo} />
                </a>
            </footer>
        </>
    )
}