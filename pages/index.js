import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Page Title</title>
      </Head>
      <div className={styles.heading}>Charges By Tenants Home Page!!</div>
    </div>
  )
}
