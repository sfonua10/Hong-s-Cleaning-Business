import Head from "next/head";
import Example from "../components/Example";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hong's Cleaning Business</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Hong's Cleaning Business" />
        <meta
          property="og:description"
          content="Offering quality cleaning services"
        />
        <meta
          property="og:image"
          content="https://images.pexels.com/photos/6195277/pexels-photo-6195277.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
        <meta
          property="og:url"
          content="https://hong-s-cleaning-business.vercel.app/"
        ></meta>
      </Head>
      <Example />

      {/* <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer> */}
    </div>
  );
}
