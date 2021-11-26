import Head from 'next/head'
import { useState } from 'react';

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>House Of Heidelberg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> 


    </div>
  )
}
