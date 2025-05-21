import React, { useEffect, useState } from "react";
import URLForm from "./URLForm";
import axios from "axios";

const Home = () => {
  const [URls, setURls] = useState([]);
  const [selectedURl, setSelectedURl] = useState(null);

  useEffect(() => {
    const fetchUrls = async () => {
      const res = await axios.get("http://localhost:5000/api/shortenURL");
      setURls(res.data.urls || []);
      return res.data;
    };
    if (URls.length === 0) {
      fetchUrls();
    }
  }, []);

  return (
    <>
      <h2 className="title">URL shortener</h2>
      <div className="container">
        <URLForm />
      </div>
      <div>
        {URls.map((url) => (
          <div>
            <h4>Shortened URL {url.shortenURL}</h4>
            <button onClick={() => setSelectedURl(url)}>
              Get original URl
            </button>
           {selectedURl && selectedURl?._id === url?._id &&  <div className="long-url">{selectedURl.longURL}</div>}
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
