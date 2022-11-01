import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { getAllUsers } from "../lib/api";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  const compareUser = async (user) => {
    const userData = await getAllUsers();

    userData.forEach((u) => {
      if (u.email === user.email) {
        let loggedUser = u;
        setName(loggedUser.name);
        setRole(loggedUser.role);
      }
    });
  };

  console.log(role);

  const dispararComparacion = (user) => {
    compareUser(user);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        dispararComparacion(currentUser);
      }
    });
  }, []);

  return (
    <authContext.Provider
      value={{ signUp, login, logout, loading, user, role, name }}
    >
      {children}
    </authContext.Provider>
  );
}
