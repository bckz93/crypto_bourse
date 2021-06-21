import Layout from "../components/Layout";
import Image from "next/image";

export default function Currency({ res }) {
  return (
    <Layout page={"page" + res.name}>
      <div className="relative hover:shadow md p-8 border border-blue-300 sm:rounded-3xl bg-blue-100 md:w-auto flex-1 mx-5">
        <div className="text-center">
          <Image
            src={res.logo_url}
            alt={res.name}
            width="auto"
            height="auto"
            className="w-20 h-20 mx-auto mb-6"
          />
        </div>
        <h2 className="text-2xl mn-6 uppercase tracking-wider">{res.name}</h2>
        <p>{res.description}</p>
        <p className="pt-5 text-gray-500">
          <a href={res.reddit_url} target="_blank" rel="noreferrer ">
            {res.reddit_url}
          </a>
        </p>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  try {
    const res = await fetch(
      `https://api.nomics.com/v1/currencies?key=5789e869854e7df90e31355fdd1b799ac634d2bb&ids=${query.currency}&attributes=id,name,logo_url,description,reddit_url`
    );
    const result = await res.json();

    return {
      props: { res: result[0] },
    };
  } catch (err) {
    console.error(err);
  }
}
