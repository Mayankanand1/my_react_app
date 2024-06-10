// src/BlogHeader.js
import React from 'react';
import './BlogHeader.css'; // Import your CSS file

const BlogHeader = () => {
    return (
        <div className="blog-header">
            <h1>Welcome to My Blog</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default BlogHeader;
