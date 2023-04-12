import React from "react";

const Accounts = ({ register, errors }) => {
  return (
    <>
      <input {...register("accountEmail")} placeholder="Email" />
      <small style={{ color: "red" }}>{errors?.accountEmail?.message}</small>
      <input {...register("password")} type="password" placeholder="Password" />
      <small style={{ color: "red" }}>{errors?.password?.message}</small>
    </>
  );
};

export default Accounts;
