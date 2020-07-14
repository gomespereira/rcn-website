import { Fragment } from 'react'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <Fragment>
      <Head>
        <title>RCN - Revival Church for The Nations</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          name="description"
          content="Revival Church for The Nations Website"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main>{children}</main>
    </Fragment>
  )
}
