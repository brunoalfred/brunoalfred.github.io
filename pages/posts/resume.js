import Head from "next/head";
import Link from "next/link";
import styles from '../../styles/Home.module.css'
export default function Resume() {
    return (


        <>
            <div className={styles.container}>
                <Head>
                    <title>brunoalfred</title>
                    <link rel="icon" href="/images/jasirilogo.ico" />
                </Head>

                <main className={styles.main}>
                    <h1 className={styles.title}>
                        Resume {'  '} Doc
                    </h1>

                    <div className={styles.grid}>


                        <Link href="/posts/resume" >


                            <a className={styles.card}>
                                <h3>Preview &rarr;</h3>
                                <p>Just View it Right Here</p>
                            </a>

                        </Link>


                        <Link href="/posts/resume" >


                            <a className={styles.card}>
                                <h3>Grab It&rarr;</h3>
                                <p>You can Save it for Later</p>
                            </a>

                        </Link>

                        <Link href="/">
                            <a className={styles.card}>
                                <h2 >
                                    Back
                            </h2>
                                <style jsx>
                                    {
                                        `
                     a {
                        text-decoration: none;
                    }
                            a:link, a:visited {
                           color: black;
                        }       
                a:hover {
                    color:blue;
                    }
                                        `
                                    }

                                </style>
                            </a>
                        </Link>
                    </div>

                </main>
            </div>

        </>
    )
}