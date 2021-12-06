import { useEffect, useState } from "react";

import moment from "moment";
import Card from "react-bootstrap/Card";
import CountUp from "react-countup";
import Placeholder from "react-bootstrap/Placeholder";

export default function InfoCard() {
  const [info, setInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // wait 2.5s before getting data
    // why? coz i like the loading placeholder animation :v
    setTimeout(() => getData(), 2500);
  }, []);

  // get data from API
  const getData = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://discord-storage.animemoe.us/info/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // save data from API to state
        setInfo(result);

        // disable placeholder animation state
        setIsLoading(false);
      })
      .catch((error) => alert("Can't connect to the Discord Storage server."));
  };

  return (
    <div className="text-center mt-5">
      <Card className="shadow">
        <Card.Header>
          <h2 className="fs-4">(¬‿¬)</h2>
        </Card.Header>
        <Card.Body className="p-2">
          {isLoading === true && (
            <>
              <div className="animate__animated animate__fadeIn">
                <Placeholder as="p" animation="wave">
                  <Placeholder xs={5} size="lg" className="rounded" />
                </Placeholder>

                <Placeholder as="p" animation="wave">
                  <Placeholder xs={11} className="rounded" />
                </Placeholder>

                <Placeholder as="p" animation="wave">
                  <Placeholder xs={7} size="sm" className="rounded" />
                </Placeholder>
              </div>
            </>
          )}
          {isLoading === false && (
            <div className="animate__animated animate__fadeIn p-0 m-0">
              <p>
                <b>
                  <span className="fs-3">
                    <CountUp
                      start={0}
                      end={info.uploaded_file}
                      duration={5}
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
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
