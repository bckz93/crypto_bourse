import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, page }) {
  return (
    <div className="bg-gray-200 pt-5 text-center min-h-screen">
      <Head>
        <title>{page}</title>
      </Head>
      <header className="container-lg">
        <h1 className="text-5xl mb-2">CRYPTO VIEWER</h1>
        <div className="inline-grid grid-cols-2 gap-x-10 p-4">
          <Link href="/" passHref>
            <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">
              Accueil
            </button>
          </Link>
          <Link href="/about" passHref>
            <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">
              À propos
            </button>
          </Link>
        </div>
        <div>
          <Image
            src="/main.jpg"
            alt="header-pic"
            width=" 1000"
            height=" auto "
            className="rounded-3xl object-cover"
            quality={100}
          />
        </div>
      </header>
      <main className="pt-6 mx-20"> {children}</main>

      <footer className="p-10">
        <Image
          src="/crypto.jpg"
          alt="footer-pic"
          width="1000"
          height="400"
          className="rounded-3xl object-cover"
          quality={100}
        />
        <ul className="pt-10 pb-4 flex justify-around">
          <li>À propos</li>
          <li>Qui somme-nous</li>
          <li>©️ BCKZ entreprise -2021</li>
        </ul>
        <p>
          BCKZ entreprise développeur d'application indépendant spécialisé dans
          le développement web front end avec Reactjs et NextJS
        </p>
      </footer>

      <style jsx>{`
        p {
          color: grey;
        }
      `}</style>
    </div>
  );
}
