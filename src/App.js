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

import { AuthProvider } from "./context/AuthContext";
import NewUser from "./user/NewUser";

import CreateEvents from "./components/CreateEvents/CreateEvents";

import AllEvents from "./components/MeetEvents/AllEvents";
import { LoadSwimmer } from "./components/LoadSwimmer/LoadSwimmer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route path="/table" element={<Table />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/newuser" element={<NewUser />} />
      <Route path="/add-event" element={<CreateEvents />} />
      <Route path="load-swimmer" element={<LoadSwimmer/>} />
      <Route path="/events" element={<AllEvents />} />
    </Route>
  )
);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
