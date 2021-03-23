import React, { useEffect, useState } from "react";

import Hero from "./hero/index";

import NewArrivals from "./new-arrivals";
import Popular from "./popular";
import { fetchItems } from "../../api/api";

function Home() {
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const [fetch, setFetch] = useState([]);
  const getData = async () => {
    try {
      const data = await fetchItems();
      setLoad(true);
      setFetch(data.data);
      setLoad(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Hero />
      <NewArrivals
        data={fetch}
        title={"new Arrivals"}
        load={load}
        setLoad={setLoad}
        error={error}
      />
      <Popular data={fetch} load={load} setLoad={setLoad} error={error} />
    </div>
  );
}

export default Home;
