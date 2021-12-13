import Head from "next/head";
import InfoCard from "../components/molecules/InfoCard";
import PackageCard from "../components/molecules/PackageCard";
import Disqus from "../components/organisms/Disqus";

export default function Home() {
  return (
    <div className="container-fluid m-0 p-0 min-vh-100 pt-3">
      {/* Head */}
      <Head>
        <title>Discord Storage - Free Unlimited Storage API</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="title"
          content="Discord Storage - Free Unlimited Storage API"
        />
        <meta
          name="description"
          content="Free unlimited file hosting using Discord server."
        />
      </Head>
      {/* End Head */}

      {/* Body */}
      <div className="container-md">
        <div className="text-center">
          <h1>Discord Storage</h1>
          <hr className="m-1" />
          <p>
            <small>Free unlimited file hosting using Discord server</small>
          </p>
        </div>

        <InfoCard />

        <PackageCard />

        <Disqus />
      </div>
      {/* End Body */}
    </div>
  );
}
