import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signin from "./Signin";
import Signup from "./Signup";
import Home from "./Home";
import Credentials from "./Credentials";
import SecureNotes from "./SecureNotes";
import Cards from "./Cards";
import Wifi from "./Wifi";
import Documents from "./Documents";

import { GlobalStyle } from "./../assets/globalStyles/GlobalStyles";

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/credentials" element={<Credentials />} />
                <Route path="/securenotes" element={<SecureNotes />} />
                <Route path="/cards" element={<Cards />} />
                <Route path="/wifi" element={<Wifi />} />
                <Route path="/documents" element={<Documents />} />
            </Routes>
        </BrowserRouter>
    );
}
