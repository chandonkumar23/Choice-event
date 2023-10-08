/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,  signInWithPopup,  signOut } from "firebase/auth";
import app from "../config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user , setUser] = useState (null);
    const [load , setload] = useState(true)

    const RegisterUser = (email , password) =>{
        setload(true);
      return createUserWithEmailAndPassword(auth, email,password);
    }
    
    const logOut = () =>{
        setload(true);
        return signOut(auth);
    }
    
   const SignIN = (email , password) =>{
    setload(true);
    return signInWithEmailAndPassword(auth , email ,password)
   }


// gooogle

const googleLogin = () =>{
    setload(true);
    return signInWithPopup(auth,googleProvider)
}

  

useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth , currentUser =>{
        console.log("user in the auth satate chamged")
       setUser(currentUser)
       setload(false);
    });
    return () =>{
        unSubscribe();
    }

},[])
    const authInfo ={
        user,
        load,
        RegisterUser,
        logOut,
        SignIN,
        googleLogin
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;