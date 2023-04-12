import React from "react";

const Data = ({ data }) => {
  return (
    <div>
      <p>
        <span>First Name:</span> <strong>{data?.firstName}</strong>
      </p>
      <p>
        <span>Last Name:</span> <strong>{data?.lastName}</strong>
      </p>
      <p>
        <span>Username:</span> <strong>{data?.username}</strong>
      </p>
      <p>
        <span>Age:</span> <strong>{data?.age}</strong>
      </p>
      <p>
        <span>Contact Email:</span> <strong>{data?.contactEmail}</strong>
      </p>
      <p>
        <span>Phone Number:</span> <strong>{data?.phone}</strong>
      </p>
      <p>
        <span>Facebook:</span> <strong>{data?.facebook}</strong>
      </p>
    </div>
  );
};

export default Data;
