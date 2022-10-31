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
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import EventDetail from "./components/MeetEvents/EventDetail";
import ReactSwitch from "react-switch";
import { useContext, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route path="/login" element={<Login />} />
      <Route path="/login/newuser" element={<NewUser />} />
      
      <Route path="/table" element={
      <ProtectedRoute>
        <Table />
      </ProtectedRoute>
      } />
      <Route path="/add-event" element={
      <ProtectedRoute>
        <CreateEvents />
      </ProtectedRoute>
      } />
      <Route path="load-swimmer" element={
      <ProtectedRoute>
        <LoadSwimmer/>
      </ProtectedRoute>
      } />
      <Route path="/events" element={
      <ProtectedRoute>
        <AllEvents />
      </ProtectedRoute>
      } />
      <Route path="/event/:eventId" element={
      <ProtectedRoute>
        <EventDetail />
      </ProtectedRoute>
      } />
    </Route>
  )
);

function App() {
  const { contextTheme, setContextTheme } = useContext(ThemeContext);
  const [checked, setChecked] = useState(false);
  const handleSwitch = (nextChecked) => {
    setContextTheme((state) => (state === 'Light' ? 'Dark' : 'Light'))
    setChecked(nextChecked) 
  }
  return (
    <AuthProvider>
      <header id={contextTheme}>
        <ReactSwitch
        onChange={handleSwitch}
        checked={checked}
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={48}
        className="react-switch"
        id="material-switch"
        />
      <RouterProvider router={router} />
      </header>
    </AuthProvider>
  );
}

export default App;
