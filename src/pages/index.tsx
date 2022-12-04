import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Thảo Quyên</title>
        <meta name="title" content="Thảo Quyên | Nguyễn Thị Thảo Quyên" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Hình ảnh Nguyễn Thị Thảo Quyên" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thaoquyen.site/" />
        <meta
          property="og:title"
          content="Thảo Quyên | Nguyễn Thị Thảo Quyên"
        />
        <meta
          property="og:description"
          content="Hình ảnh Nguyễn Thị Thảo Quyên"
        />
        <meta property="og:image" content="https://i.ibb.co/GdJn01W/em.jpg" />
        <meta name="next-head-count" content="15" />
        <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
        <meta name="referrer" content="no-referrer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image src={'/em.jpeg'} layout="fill" objectFit="contain" alt="Hình ảnh thao quyên" />
    </div>
  );
};

export default Home;
