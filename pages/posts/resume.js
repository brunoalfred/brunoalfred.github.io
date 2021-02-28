import Head from "next/head";
import Link from "next/link";
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
                    Roll {'  '}<Link href="/">Back</Link>
                </h1>

            </main>
        </div>
    )
}