import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>sunwoo's cafe</title>
        <meta name="description" content="hola" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>hi. why did you come here</h1>

  </div>
  )
}
