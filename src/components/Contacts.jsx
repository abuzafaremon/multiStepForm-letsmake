import React from "react";

const Contacts = ({ register, errors }) => {
  return (
    <>
      <input {...register("contactEmail")} placeholder="Email" />
      <small style={{ color: "red" }}>{errors?.contactEmail?.message}</small>
      <input {...register("phone")} placeholder="Phone" />
      <small style={{ color: "red" }}>{errors?.phone?.message}</small>
      <input {...register("facebook")} placeholder="Facebook Name" />
      <small style={{ color: "red" }}>{errors?.facebook?.message}</small>
    </>
  );
};

export default Contacts;
