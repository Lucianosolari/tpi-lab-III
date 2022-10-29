import SignUp from "../components/SignUp/SignUp";

import useHttp from "../hooks/use-http";
import { addUser } from "../lib/api";

const NewUser = () => {
  const { sendRequest, status } = useHttp(addUser);

  const addUserHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return <SignUp onAddUser={addUserHandler} />;
};

export default NewUser;
