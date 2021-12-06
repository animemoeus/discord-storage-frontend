import { DiscussionEmbed } from "disqus-react";
import Card from "react-bootstrap/Card";

export default function Disqus() {
  return (
    <div className="mt-4 mb-4 rounded shadow">
      <Card>
        <Card.Header as="h2" className="fs-4 text-center">
          (. ❛ ᴗ ❛.)
        </Card.Header>
        <Card.Body>
          <DiscussionEmbed
            shortname="discord-storage"
            config={{
              language: "en",
            }}
          />
        </Card.Body>
      </Card>
    </div>
  );
}
