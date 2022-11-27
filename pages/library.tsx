import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/ui.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Celestial Gaming is a free to use, open-source, gaming site with a large collection of html5, flash, mobile, and retro games to play out of the box in your browser! WARNING: I will not take responsibility if this becomes a distraction in the classroom, nor will I take if this gets a student in trouble."/>
        <meta name="keywords" content="Lunadox, Amy, Celestial, Games, Roblox, School, Chromebook, Unblocked, Proxies, Portfolio, Developer, Frontend, HTML5, CSS3, JS" />
        <meta name="author" content="Copyright ⓒ 2022 Celestial"/>
        <meta name="theme-color" content="#ffc0cb"/>
        <meta property="og:title" content="Celestial Gaming"/>
        <meta property="og:locale" content="en-US"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://play.thecelestial.gq"/>
        <meta property="og:description" content="Celestial Gaming is a free to use, open-source, gaming site with a large collection of html5, flash, mobile, and retro games to play out of the box in your browser! WARNING: I will not take responsibility if this becomes a distraction in the classroom, nor will I take if this gets a student in trouble."/>
        <title>Celestial Gaming</title>
        <link rel="icon" href="/imgs/favicon.ico"/>
      </Head>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <a href="/">Celestial Gaming</a>
        </div>
        <div className={styles.hotlinks}>
          <img src="/imgs/lib.svg" width="25" height="25"/>
          <a href="/library/">Library!</a>
          <img src="/imgs/credits.svg" width="25" height="25"/>
          <a href="/credits/">Credits!</a>
          <img src="/imgs/changelog.svg" width="25" height="25"/>
          <a href="/changelog/">Changelog!</a>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.lib}>
          <div className={styles.libTitle}>Library!</div>
          <u>HTML5</u>
          <a href="/launcher/2048.html">2048</a>
          <a href="/launcher/chess.html">Chess</a>
          <a href="/gfiles/chromedino/index.html">Chrome Dino</a>
          <a href="/launcher/cookieclicker.html">Cookie Clicker</a>
          <a href="https://21savagegotabigbotty.github.io/SealCraft/web/">Eaglercraft (Redirect)</a>
          <a href="/launcher/flappybird.html">Flappy Bird</a>
          <a href="/launcher/fnaw.html">Five Nights at Winston's</a>
          <a href="/launcher/slope.html">Slope</a>
          <a href="/launcher/snake.html">Snake</a>
          <a href="/gfiles/tetris/index.html">Tetris</a>
          <a href="/gfiles/tunnelrush/index.html">Tunnel Rush</a>
          <u>Multiplayer</u>
          <a href="/launcher/1v1.html">1v1.lol (Replit)</a>
          <a href="/launcher/justfall.html">JustFall.lol (Replit)</a>
          <a href="/launcher/paper.html">Paper.io (Replit)</a>
          <a href="/launcher/skribbl.html">Skribbl.io (Replit)</a>
          <a href="/launcher/quake.html">QuakeJS (Replit)</a>
          <a href="/launcher/slither.html">Slither.io (Replit)</a>
          <u>Flash</u>
          <a href="/gfiles/flash/index.html?swf=bloonstd1.swf">Bloons Tower Defense</a>
          <a href="/gfiles/flash/index.html?swf=bobtherobber.swf">Bob the Robber</a>
          <a href="/gfiles/flash/index.html?swf=ducklife.swf">Duck Life</a>
          <a href="/gfiles/flash/index.html?swf=ducklife2.swf">Duck Life 2</a>
          <a href="/gfiles/flash/index.html?swf=ducklife3.swf">Duck Life 3</a>
          <a href="/gfiles/flash/index.html?swf=ducklife4.swf">Duck Life 4</a>
          <u>Emulators</u>
          <a href="/gfiles/flash/index.html">Ruffle (Flash)</a>
          <a href="/gfiles/rarch/index.html">Web Retro (Console)</a>
        </div>
      </main>
      <div className={styles.socials}>
        <a href="https://discord.gg/Kn63hp3WF4">
          <img src="/imgs/discord.png" width="30" height="30"/>
        </a>
        <a href="https://github.com/Celestial-Dev/Celestial-Gaming">
          <img src="/imgs/github.svg" width="30" height="30"/>
        </a>
        <a href="https://thecelestial.org/">
          <img src="/imgs/web.svg" width="30" height="30"/>
        </a>
      </div>
      <footer className={styles.copyright}>
        <p>Copyright © Celestial 2022</p>
      </footer>
    </div>
  )
}

export default Home