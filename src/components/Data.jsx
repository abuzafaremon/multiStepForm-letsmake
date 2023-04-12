import React from "react";

const Data = ({ data }) => {
  return (
    <div>
      <p>
        First Name: <strong>{data.firstName}</strong>
      </p>
      <p>
        Last Name: <strong>{data.lastName}</strong>
      </p>
      <p>
        Username: <strong>{data.username}</strong>
      </p>
      <p>
        Age: <strong>{data.age}</strong>
      </p>
      <p>
        Contact Email: <strong>{data.contactEmail}</strong>
      </p>
      <p>
        Phone Number: <strong>{data.phone}</strong>
      </p>
      <p>
        Facebook: <strong>{data.facebook}</strong>
      </p>
    </div>
  );
};

export default Data;
