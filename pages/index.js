import InfoCard from "../components/molecules/InfoCard";
import Disqus from "../components/organisms/Disqus";

export default function Home() {
  return (
    <div className="container-fluid m-0 p-0 min-vh-100 pt-3">
      <div className="container-md">
        <div className="text-center">
          <h1>Discord Storage</h1>
          <hr className="m-1" />
          <p>
            <small>Free unlimited file hosting using Discord server</small>
          </p>
        </div>

        <div>
          <InfoCard />
        </div>

        <div>
          <Disqus />
        </div>
      </div>
    </div>
  );
}
