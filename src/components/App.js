import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signin from "./Routes/Signin";
import Signup from "./Routes/Signup";
import Home from "./Routes/Home";
import Credentials from "./Routes/Credentials";
import SecureNotes from "./Routes/SecureNotes";
import Cards from "./Routes/Cards";
import Wifi from "./Routes/Wifi";
import Documents from "./Routes/Documents";

import { GlobalStyle } from "./../assets/globalStyles/GlobalStyles";
import NewData from "./Routes/NewData";
import { UserProvider } from "../assets/contexts/userContext";
import PrivateRoute from "./Routes/PrivateRoute";

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <UserProvider>
                <Routes>
                    <Route path="/" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route
                        path="/home"
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/credentials/:id"
                        element={
                            <PrivateRoute>
                                <Credentials />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/securenotes/:id"
                        element={
                            <PrivateRoute>
                                <SecureNotes />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/cards/:id"
                        element={
                            <PrivateRoute>
                                <Cards />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/wifi/:id"
                        element={
                            <PrivateRoute>
                                <Wifi />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/documents/:id"
                        element={
                            <PrivateRoute>
                                <Documents />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/new"
                        element={
                            <PrivateRoute>
                                <NewData />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </UserProvider>
        </BrowserRouter>
    );
}
