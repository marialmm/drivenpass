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

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/credentials/:id" element={<Credentials />} />
                <Route path="/securenotes/:id" element={<SecureNotes />} />
                <Route path="/cards/:id" element={<Cards />} />
                <Route path="/wifi/:id" element={<Wifi />} />
                <Route path="/documents/:id" element={<Documents />} />
                <Route path="/new" element={<NewData />} />
            </Routes>
        </BrowserRouter>
    );
}
