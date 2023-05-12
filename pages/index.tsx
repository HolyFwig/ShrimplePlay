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
        <meta name="keywords" content="Lunadox, Amy, Celestial, Games, Roblox, School, Chromebook, Unblocked, Proxies, Portfolio, Developer, Frontend, HTML5, CSS3, JS" />
        <meta name="author" content="Copyright ⓒ 2022-2023 ShrimpleFix" />
        <meta name="theme-color" content="#ffc0cb" />
        <meta property="og:title" content="ShrimplePlay" />
        <meta property="og:locale" content="en-US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://play.shrimple.club" />
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
          <img src="/imgs/credits.svg" width="25" height="25" />
          <Link href="/credits/">
            <a>Credits!</a>
          </Link>
          <img src="/imgs/changelog.svg" width="25" height="25" />
          <Link href="/changelog/">
            <a>Changelog!</a>
          </Link>
        </div>
      </nav>
      <main className={styles.main}>
        <h1>Trending!</h1>
        <div className={styles.trending}>
          <div className={styles.gimage}>
            <img src="/imgs/slope.png" />
          </div>
          <div className={styles.desc}>
            <h1>Slope</h1>
            <p>Rapidly changing racetrack, unpredictable, and become harder. Tons of crazy obstacles in the form of roadblocks, treacherous pits, and walls can break the ball at any time.</p>
            <p>By: Rob Kay</p>
            <a href="/launcher/slope.html">
              <button>
                <img src="/imgs/play.svg" width="30" height="30" />
              </button>
            </a>
          </div>
        </div>
      </main>
      <div className={styles.socials}>
<a href="https://github.com/Lunadox-Dev/Celestial-Gaming">
          <img src="/imgs/github.svg" width="30" height="30" />
        </a>
      </div>
      <footer className={styles.copyright}>
        <Link href="https://shrimple.club">
          <a>shrimple.club</a>
        </Link>
      </footer>
    </div>
  )
}

export default Home
