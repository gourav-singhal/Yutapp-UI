import React from 'react';
import Head from 'next/head';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import TemplateBanner from '../components/TemplateBanner';
import CreateBrandBanner from '../components/CreateBrandBanner';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className='relative p-3 max-w-6xl w-full m-auto'>
      <Head>
        <title>Yutapp your way and create your brand</title>
        <meta name="description" content="Transform your YouTube channel to a real App in a few seconds for free." />
        <link rel="icon" href="/site-icon.png" />
      </Head>

      <main>
        <Header />
        <Hero />
        <Benefits />
        <TemplateBanner />
        <CreateBrandBanner />
        <Footer />
      </main>
    </div>
  )
}
