import Head from "next/head";
import styles from '../../styles/Home.module.css'


export default function Resume() {
    return (
        <div className="styles.container">
            <Head>
                <title>brunoalfred</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="styles.main">

                <h1 className={styles.title}>
                    Roll {'  '}<a href="/">Back</a>
                </h1>

            </main>
        </div>
    )
}