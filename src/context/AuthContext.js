import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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

  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

const compareUser = async (user) => {
  const userData = await getAllUsers();
  console.log(user)
  userData.forEach(u => {
    if (u.email === user.email) {
      let loggedUser = u
      return loggedUser
    }
  });
  console.log(userData);
}
const loggedUser = compareUser(user)
console.log(loggedUser.role)

useEffect(() => {
  onAuthStateChanged(auth, currentUser => {
    setUser(currentUser);
    compareUser(currentUser);
    setLoading(false);
  })
}, []);

  return (
    <authContext.Provider value={{ signUp, login, logout, loading, user }}>{children}</authContext.Provider>
  );
}
