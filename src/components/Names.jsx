import React from "react";

const Names = ({ register, errors }) => {
  return (
    <>
      <input
        {...register("firstName")}
        type="text"
        placeholder="First Name"
        autoFocus
      />
      <small style={{ color: "red" }}>{errors?.firstName?.message}</small>
      <input {...register("lastName")} type="text" placeholder="Last Name" />
      <small style={{ color: "red" }}>{errors?.lastName?.message}</small>
      <input {...register("username")} type="text" placeholder="username" />
      <small style={{ color: "red" }}>{errors?.username?.message}</small>
      <input {...register("age")} placeholder="Age" />
      <small style={{ color: "red" }}>{errors?.age?.message}</small>
    </>
  );
};

export default Names;
