import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  deleteUser,
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
  const [surname, setSurname] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [idFromDatabase, setIdFromDatabase] = useState("");

  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      setIsAuthenticated(true);
      // ...
    }).catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
    })


  const login = (email, password) => 
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    setIsAuthenticated(true);
  })
  // .catch((error) => {
  //   console.log("El error completo es " + error)
  //   console.log("El error code es " + error.code);
  //   console.log("El error message es " + error.message);
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  // });
  

  const logout = () => signOut(auth)
  .then(() => {
    setIsAuthenticated(false);
  }).catch((error) =>{
    console.log(error)
  });

  const deleteFirebaseAccount = () => deleteUser(user)
  .then(()=>{
    setIsAuthenticated(false);
  }).catch((error)=>{
    console.log(error);
  })

  const compareUser = async (user) => {
    const userData = await getAllUsers();

    userData.forEach((u) => {
      if (u.email === user.email) {
        let loggedUser = u;
        setName(loggedUser.name);
        setSurname(loggedUser.surname);
        setRole(loggedUser.role);
        setIdFromDatabase(loggedUser.id)
      }
    });
  };

  const triggerComparison = (user) => {
    compareUser(user);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        triggerComparison(currentUser);
      }
    });
  }, []);

  return (
    <authContext.Provider
      value={{ signUp, login, logout, deleteFirebaseAccount, loading, user, role, name, surname, isAuthenticated, idFromDatabase }}
    >
      {children}
    </authContext.Provider>
  );
}
