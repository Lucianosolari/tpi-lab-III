import "./App.css";
import NavBar from "./components/NavBar";
import Table from "./components/Table/Table";
import Login from "./components/Login/Login";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { SignUp } from "./components/SignUp/SignUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route path="/table" element={<Table />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/signup" element={<SignUp />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
