import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/LogIn/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken, signOut } from "firebase/auth";


// Initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    // User Registration
    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name }
                setUser(newUser);

                // Save user to the database
                saveUser(email, name, 'POST');

                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });

                history.replace('/');
            })
            .catch((error) => {

                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));
    }


    // User Login
    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location.state?.from || '/home';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {

                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false));
    }

    const siginWithGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');

                const destination = location?.history?.from || '/appointment';
                history.replace(destination);
                setAuthError('');

            }).catch((error) => {

                setAuthError(error.message)

            }).finally(() => setIsLoading(false));
    }

    // Observe user state

    useEffect(() => {
        const unsubcribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
            setIsLoading(false);
        });

        return () => unsubcribed;

    }, [])


    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('https://blooming-oasis-58661.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    useEffect(() => {
        fetch(`https://blooming-oasis-58661.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])


    // User Logout
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.

        })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        authError,
        isLoading,
        siginWithGoogle,
        registerUser,
        loginUser,
        admin,
        token,
        logOut,

    }

}

export default useFirebase;





































// import { useEffect, useState } from "react";
// import initializeFirebase from "../Pages/LogIn/Firebase/firebase.init";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


// // Initialize firebase app
// initializeFirebase();

// const useFirebase = () => {
//     const [user, setUser] = useState({});
//     const [isLoading, setIsLoading] = useState(true);
//     const [authError, setAuthError] = useState('');
//     const auth = getAuth();

//     // User Registration
//     // const registerUser = (email, password) => {
//     //     setIsLoading(true)
//     //     createUserWithEmailAndPassword(auth, email, password)
//     //         .then((userCredential) => {
//     //             setAuthError('');
//     //         })
//     //         .catch((error) => {

//     //             setAuthError(error.message);

//     //         })
//     //         .finally(() => setIsLoading(false));
//     // }

//     const registerUser = (email, password, name, history) => {
//         setIsLoading(true)
//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 setAuthError('');
//                 const newUser = { email, displayName: name };

//                 setUser(newUser);

//                 // Save user to the database
//                 savedUser(email, name)

//                 // send name to firebase after creation
//                 updateProfile(auth.currentUser, {
//                     displayName: name
//                 }).then(() => {

//                 }).catch((error) => {

//                 })
//                 history.replace('/');
//             })
//             .catch((error) => {

//                 setAuthError(error.message);

//             })
//             .finally(() => setIsLoading(false));
//     }


//     // User Login
//     const loginUser = (email, password, location, history) => {
//         setIsLoading(true)
//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 const destination = location?.history?.from || '/home';
//                 history.replace(destination);
//                 setAuthError('');
//             })
//             .catch((error) => {

//                 setAuthError(error.message)
//             })
//             .finally(() => setIsLoading(false));
//     }

//     // Observe user state

//     useEffect(() => {
//         const unsubcribed = onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 setUser(user)
//             } else {
//                 setUser({})
//             }
//             setIsLoading(false);
//         });

//         return () => unsubcribed;

//     }, [])


//     // User Logout
//     const logOut = () => {
//         setIsLoading(true);
//         signOut(auth).then(() => {
//             // Sign-out successful.
//         }).catch((error) => {
//             // An error happened.

//         })
//             .finally(() => setIsLoading(false));
//     }

//     const savedUser = (email, displayName) => {
//         const user = { email, displayName };
//         fetch(https://blooming-oasis-58661.herokuapp.com/users, {
//             method: 'POST',
//             headers: {
//             'content-type': 'application/json'
//         },
//             body: JSON.stringify(user)
//         })
//         .then()
//     }

// return {
//     user,
//     authError,
//     isLoading,
//     registerUser,
//     loginUser,
//     logOut,

// }

// }

// export default useFirebase;