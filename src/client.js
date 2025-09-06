import React, { useState } from "react";

function Client() {
  const [complaint, setComplaint] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Complaint Submitted:", { complaint, location });
    alert("Complaint submitted successfully!");
    setComplaint("");
    setLocation("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Submit Complaint</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Complaint"
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Client;
