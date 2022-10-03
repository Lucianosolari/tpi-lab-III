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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route path="/table" element={<Table />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
