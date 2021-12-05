import { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import CountUp from "react-countup";
import moment from "moment";

export default function InfoCard() {
  const [info, setInfo] = useState({});

  // get data from API when page load
  useEffect(() => {
    getData();
  }, []);

  // get data from API
  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://discord-storage.animemoe.us/info/", requestOptions)
      .then((response) => response.json())
      .then((result) => setInfo(result))
      .catch((error) => alert("Can't connect to the Discord Storage server."));
  };

  return (
    <div className="text-center mt-5">
      <Card className="shadow">
        <Card.Header>
          <h2 className="fs-4">(¬‿¬)</h2>
        </Card.Header>
        <Card.Body className="p-2">
          <p>
            <b>
              <span className="fs-3">
                <CountUp
                  start={0}
                  end={info.uploaded_file}
                  duration={3.3}
                  separator="."
                />
              </span>
            </b>
            <br />
            <span className="fs-5">Files have been uploaded so far.</span>
          </p>
          <p className="text-muted">
            <small>
              Last updated:{" "}
              {moment(info.updated_at).local().format("YYYY-MM-DD HH:mm")}
            </small>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}
