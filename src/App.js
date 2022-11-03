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
import MyAccount from "./components/MyAccount/MyAccount";
import { EventsContextProvider } from "./context/EventsContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route path="/login" element={<Login />} />
      <Route path="/login/newuser" element={<NewUser />} />

      <Route
        path="/my-account"
        element={
          <ProtectedRoute>
            <MyAccount />
          </ProtectedRoute>
        }
      />

      <Route
        path="/table"
        element={
          <ProtectedRoute>
            <Table />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add-event"
        element={
          <ProtectedRoute>
            <CreateEvents />
          </ProtectedRoute>
        }
      />
      <Route
        path="load-swimmer"
        element={
          <ProtectedRoute>
            <LoadSwimmer />
          </ProtectedRoute>
        }
      />
      <Route
        path="/events"
        element={
          <ProtectedRoute>
            <AllEvents />
          </ProtectedRoute>
        }
      />
      <Route
        path="/event/:eventId"
        element={
          <ProtectedRoute>
            <EventDetail />
          </ProtectedRoute>
        }
      />
    </Route>
  )
);

function App() {
  return (
    <AuthProvider>
      <EventsContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </EventsContextProvider>
    </AuthProvider>
  );
}

export default App;
