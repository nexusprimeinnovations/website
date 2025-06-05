import Head from 'next/head';
import '../styles/globals.css'
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "name": "NexusPrime Innovations",
                  "url": "https://www.nexusprime.com",
                  "logo": "https://www.nexusprime.com/images/logo.svg",
                  "sameAs": [] // Placeholder for social media links
                },
                {
                  "@type": "WebSite",
                  "name": "NexusPrime Innovations",
                  "url": "https://www.nexusprime.com"
                  // potentialAction could be added here if a site search exists
                }
              ]
            })
          }}
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp