import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>brunoalfred</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>




      <main className={styles.main}>
        <h1 className={styles.title}>
          It's {'  '}<a href="#">brunoalfred</a>
        </h1>

        <p className={styles.description}>
          ask me about
          <code className={styles.code}>software Engineering Stack</code>
        </p>

        <div className={styles.grid}>


          <Link href="/posts/resume" >
          

            <a className={styles.card}>
              <h3>Resume &rarr;</h3>
              <p>As i showcase my skills and experiences in brief</p>
            </a>
          
          </Link>

          <Link href="/social-media" >
            <a className={styles.card}>
              <h3>Socila Media &rarr;</h3>
              <p>How i appear before the rest of the world</p>
            </a>

          </Link>


          <Link href="/projects">

            <a
              
              className={styles.card}
            >
              <h3>Projects &rarr;</h3>
              <p>This is how I spend my time, always busy making </p>
            </a>

          </Link>

         <Link href="/try-me">
            <a
              className={styles.card}
            >
              <h3>Try me &rarr;</h3>
              <p>
                Incase of anything you can just reach me out instantly..
            </p>
            </a>
         
         </Link>
        </div>
       
      </main>
<Footer/>
     
    </div>
  )
}
