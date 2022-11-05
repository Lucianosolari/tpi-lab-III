import "./App.css";
import NavBar from "./components/NavBar";
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
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import EventDetail from "./components/MeetEvents/EventDetail";
import MyAccount from "./components/MyAccount/MyAccount";
import { EventsContextProvider } from "./context/EventsContext";
import ModifyEventsForm from "./components/ModifyEvents/ModifyEventsForm";
import ModifyAccount from "./components/MyAccount/ModifyAccount";
import UserEvents from "./components/Table/UserEvents";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route path="/login" element={<Login />} />
      <Route path="/login/newuser" element={<NewUser />} />

      <Route
        path="/my-account/:userId"
        element={
          <ProtectedRoute>
            <MyAccount />
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-account/modify"
        element={
          <ProtectedRoute>
            <ModifyAccount/>
          </ProtectedRoute>
        }
      />

      <Route
        path="/user-events/:userId"
        element={
          <ProtectedRoute>
            <UserEvents/>
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
        path="/modify-event/:eventId"
        element={
          <ProtectedRoute>
            <ModifyEventsForm/>
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
