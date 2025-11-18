"use client";

import { useEffect, useState } from "react";

const PostRequest = () => {
  const [postrequest, setpostrequest] = useState(null);

  const funPostRequest = async () => {
    try {
      const data = await fetch("http://localhost:3050/add-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Ahmad Zahid Khan shakir",
          email: "ahmad223445@gmail.com",
          phone: "+923359348844",
          address: "6th Road Rawalpindi",
          city: "Rawalpindi",
          state: "Punjab",
          zipCode: "46000",
        }),
      });

      const response = await data.json();
      console.log("postRequest response is", response);

      setpostrequest(response);
    } catch (error) {
      console.log("Something went wrong in API", error);
    }
  };

  useEffect(() => {
    funPostRequest();
  }, []);

  if (!postrequest) return <p>Posting user...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-5">Posted User</h1>
      <div className="border p-4 m-4">
        <p>
          <strong>ID:</strong> {postrequest.id}
        </p>
        <p>
          <strong>Name:</strong> {postrequest.name}
        </p>
        <p>
          <strong>Email:</strong> {postrequest.email}
        </p>
        <p>
          <strong>Phone:</strong> {postrequest.phone}
        </p>
        <p>
          <strong>Address:</strong> {postrequest.address}
        </p>
        <p>
          <strong>City:</strong> {postrequest.city}
        </p>
        <p>
          <strong>State:</strong> {postrequest.state}
        </p>
        <p>
          <strong>ZipCode:</strong> {postrequest.zipCode}
        </p>
      </div>
    </div>
  );
};

export default PostRequest;
