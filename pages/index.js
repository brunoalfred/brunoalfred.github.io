import Script from 'next/script'
import Head from 'next/head';
import Base from '../layout/Base';


export default function Home() {
  return (
    <Base>
      <Head>
        <script type="text/javascript" src="../static/index.js"></script>
        {/* <Script type="text/javascript" src="../static/index.js"></Script> */}
      </Head>
      <div>
        <h1>I&apos;m a
          <span
            className="txt-rotate txt"
            data-period={2000}
            data-rotate="[ &quot;Software Engineer.&quot;, &quot;Design Patter &hearts;.&quot;, &quot;Tech Entrepreneur.&quot;, &quot;fun Guy !&quot; ]">
          </span>
        </h1>
        <style jsx>{`
        
       span, h1 {
         font-family: 'Ubuntu', sans-serif;
         font-size: 2.7em;
         text-align: center;
       }
        
      `}</style>
      </div>
    </Base>

  )
}





