// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignUp from "../components/SignUp/SignUp";

import useHttp from "../hooks/use-http";
import { addUser } from "../lib/api";

const NewUser = () => {
  const { sendRequest, status } = useHttp(addUser);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (status === "completed") {
  //     navigate("/events");
  //   }
  // }, [status, navigate]);

  const addUserHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return <SignUp onAddUser={addUserHandler} />;
};

export default NewUser;
