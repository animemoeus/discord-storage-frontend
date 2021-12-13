import Card from "react-bootstrap/Card";

export default function PackageCard() {
  return (
    <div className="mt-4 shadow rounded">
      <Card>
        <Card.Header className="fs-4 text-center">¯\_(ツ)_/¯</Card.Header>
        <Card.Body className="fs-5 text-center">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <a
                href="https://github.com/animemoeus/pyscord-storage"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
              >
                Python
              </a>
            </li>
            <li className="list-group-item">
              <a
                href="http://github.com/animemoeus/jscord-storage/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
              >
                Node.js
              </a>
            </li>
            <li className="list-group-item">
              <a
                href="https://github.com/animemoeus/discord-storage-frontend/wiki/Dart"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
              >
                Dart
              </a>
            </li>
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
}
