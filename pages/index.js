import Head from "next/head";

// import components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Mainart from "./components/Mainart";
import Card_container from "./components/Card_container";
import Tags from "./components/Tags";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#f8f9fb]">
      <Head>
        <title>Weblog</title>
        <meta name="description" content="weblog next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <Mainart />
      <Card_container />
      <Tags />
      <Footer />
    </div>
  );
}
