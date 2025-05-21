import React, { useState } from "react";
import axios from "axios";
const URLForm = () => {
  const [longUrl, setLongURl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/shortenURL/create",
       {longUrl}
      );
      if (res.status === 200) {
      setLongURl("")
      }
      return res.data;
    } catch (error) {
      console.log("error shortening urls", error);
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="baseURL">Base URl</label>
        <input
          type="text"
          placeholder="paste the url"
          name="baseURL"
          value={longUrl}
          onChange={(e)=> setLongURl(e.target.value)}
        />
        <button type="submit" className="shorten-btn">
          Shorten URl
        </button>
      </form>
    </div>
  );
};

export default URLForm;
