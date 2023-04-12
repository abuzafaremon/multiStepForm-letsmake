import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Accounts from "./Accounts";
import Contacts from "./Contacts";
import Names from "./Names";
import Data from "./Data";

const schema = yup.object({
  firstName: yup.string().required("name is required"),
  lastName: yup.string().required("name is required"),
  username: yup.string().required("username is must required"),
  age: yup
    .number()
    .typeError("That doesn't look like a number")
    .integer()
    .min(5)
    .max(100)
    .required("A phone number is required"),
  contactEmail: yup
    .string()
    .email("provide a valid email")
    .required("email is required"),
  accountEmail: yup
    .string()
    .email("provide a valid email")
    .required("email is required"),
  phone: yup
    .string()
    .required("A phone number is required")
    .min(5)
    .max(11, "max 11 characters")
    .matches(/([0-9]{11})/, {
      message: "Please enter valid number.",
      excludeEmptyString: false,
    }),
  facebook: yup.string().required("name is required"),
  password: yup
    .string()
    .required("password is required")
    .min(4, "Minimum 4 character")
    .max(10, "Maximum 10 character"),
});

const Form = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const FormTitles = ["Personal Info", "Contacts Info", "Accounts Info"];
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    setData(data);
    reset();
    setPage(0);
    alert("Your form has been submitted, Check your console");
  };

  return (
    <div className="container">
      <div className="progress">
        <span
          style={{
            width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
          }}
        ></span>
      </div>
      <div className="form">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">
          <form onSubmit={handleSubmit(onSubmit)}>
            {page === 0 ? (
              <Names register={register} errors={errors} />
            ) : page === 1 ? (
              <Contacts register={register} errors={errors} />
            ) : (
              <Accounts register={register} errors={errors} />
            )}
            {/* <input type="submit" value="Submit" /> */}
            <div className="footer">
              <button
                type="button"
                disabled={page === 0}
                onClick={() => setPage(page - 1)}
              >
                Prev
              </button>
              <button
                // type={page === FormTitles.length ? "submit" : "button"}
                disabled={page === 1 && Object.keys(errors).length > 2}
                onClick={() => {
                  if (page >= FormTitles.length - 1) {
                    return;
                  } else {
                    setPage((curPage) => curPage + 1);
                  }
                }}
              >
                {page >= FormTitles.length - 1 ? "Submit" : "Next"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Data data={data} />
    </div>
  );
};

export default Form;
