import 'tailwindcss/tailwind.css'
import Header from '/components/Header';
import Footer from '/components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen p-0 w-full justify-between">
      {/* <Header/> */}
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}

export default MyApp
