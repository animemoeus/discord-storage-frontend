import { DiscussionEmbed } from "disqus-react";

export default function Disqus() {
  return (
    <div className="container-md border rounded shadow mt-4 mb-4">
      <DiscussionEmbed
        shortname="discord-storage"
        config={{
          language: "en",
        }}
      />
    </div>
  );
}
