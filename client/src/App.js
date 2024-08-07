import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import useBackgroundColor from "./components/useHeaderColor";

function App() {
  const backgroundColor = useBackgroundColor();
    return (
      
        <Router>
            <Header />
            <Routes>
                <Route path="/properties" element={<Properties />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/add-property" element={<AddProperty />} />
                <Route path="/login" element={<Login />} />
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
}

// Placeholder components for demonstration
const Properties = () => <div>Properties Page</div>;
const Contact = () => <div>Contact Page</div>;
const AddProperty = () => <div>Add Property Page</div>;
const Login = () => <div>Login Page</div>;

export default App;
