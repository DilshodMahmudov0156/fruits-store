import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Nav from "../components/nav";

function RouterPart(props) {
    return (
        <Router>
            <Nav/>
            <Routes>
                <Route path="/" exact element={<Home />}/>
            </Routes>
        </Router>
    );
}

export default RouterPart;