import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";

function RouterPart(props) {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />}/>
            </Routes>
        </Router>
    );
}

export default RouterPart;