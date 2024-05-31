// src/App.js
import React from 'react';
import './App.css'; // Import your CSS file
import BlogHeader from './BlogHeader'; // Import BlogHeader component
import BlogContent from './BlogContent'; // Import BlogContent component

function App() {
    return (
        <div className="App">
            <BlogHeader />
            <BlogContent />
        </div>
    );
}

export default App;
