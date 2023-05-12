import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/ui.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="ShrimplePlay is a free to use, open-source, gaming site with a large collection of html5, flash, mobile, and retro games to play out of the box in your browser!" />
        <meta name="keywords" content="ShrimpleFix, Amy, Celestial, Games, Roblox, School, Chromebook, Unblocked, Proxies, Portfolio, Developer, Frontend, HTML5, CSS3, JS" />
        <meta name="author" content="Copyright ⓒ 2022-2023 ShrimpleFix" />
        <meta name="theme-color" content="#ffc0cb" />
        <meta property="og:title" content="ShrimplePlay" />
        <meta property="og:locale" content="en-US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://g.shrimple.club" />
        <meta property="og:description" content="ShrimplePlay is a free to use, open-source, gaming site with a large collection of html5, flash, mobile, and retro games to play out of the box in your browser!" />
        <title>ShrimplePlay</title>
        <link rel="icon" href="/imgs/favicon.ico" />
      </Head>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">
            <a>ShrimplePlay</a>
          </Link>
        </div>
        <div className={styles.hotlinks}>
          <img src="/imgs/lib.svg" width="25" height="25" />
          <Link href="/library/">
            <a>Library!</a>
          </Link>
          <img src="/imgs/changelog.svg" width="25" height="25" />
          <Link href="/changelog/">
            <a>Changelog!</a>
          </Link>
        </div>
      </nav>
      <main className={styles.main}>
        <u>V1.1.2 (5/12/23)</u>
        <h2>- Removed Credits</h2>
        <h2>- Project revival planned</h2>
      </main>
      <div className={styles.socials}>
        <a href="https://github.com/ShrimpleFix/ShrimplePlay">
          <img src="/imgs/github.svg" width="30" height="30" />
        </a>
      </div>
      <footer className={styles.copyright}>
        <a href="https://shrimple.club">shrimple.club</a>
      </footer>
    </div>
  )
}

export default Home
