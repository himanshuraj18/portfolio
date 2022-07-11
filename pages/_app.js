import 'tailwindcss/tailwind.css';
import '/public/customStyle.css';
import Head from 'next/head';
// import Header from '/components/Header';
import Footer from '/components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col scrollbar-thin scrollbar-track-transparent scrollbar-thumb bg-gradient-to-r from-green-200 to-purple-300 background-animate">
      <Head>
        <title>Himanshu's Portfolio</title>
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
      </Head>
      {/* <Header/> */}
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}

export default MyApp
