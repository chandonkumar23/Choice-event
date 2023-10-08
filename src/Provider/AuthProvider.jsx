/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,  signOut } from "firebase/auth";
import app from "../config";

export const AuthContext = createContext(null);

const auth = getAuth(app);


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
        SignIN
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