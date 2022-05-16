import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import Link from 'next/link'
import Dummy from '../components/dummy'
export default function Home() {
  return (
    <div className={styles.container}>
      <style jsx>
        {`
          .myspn{
            color: red;
          }
          
        
        `}
      </style>
      <Head>
        <title>Hunting Coder </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src='/my.js' strategy='lazyOnload'>
      </Script>
          <Dummy/>
      <nav className={styles.mainnav}>
        <ul>
          <Link href='/'><a><li>  Home</li></a></Link>
          <Link href='/about'><a><li> About</li></a></Link>
          <Link href='/contect'><a><li>  Contect Us</li></a></Link>
          <Link href='/document'><a><li>  Document</li></a></Link>
          <Link href='/links'><a><li> Links</li></a></Link>
        </ul>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className='myspn'> Hunting Coder</span>
        </h1>
        <p className={styles.description}>
          A Blog by testing coder
        </p>
        <div class="blog">
        <h1>Populer Blogs</h1>
          <div class="blogItem">
            <h3>How to learn javascript</h3>
            <p>its a langwage for website</p>
          </div>
          <div class="blogItem">
            <h3>How to learn javascript</h3>
            <p>its a langwage for website</p>
          </div>
          <div class="blogItem">
            <h3>How to learn javascript</h3>
            <p>its a langwage for website</p>
          </div>
          <div class="blogItem">
            <h3>How to learn javascript</h3>
            <p>its a langwage for website</p>
          </div>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
