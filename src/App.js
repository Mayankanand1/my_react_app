// src/App.js
import React, { useState } from 'react';
import './App.css';
import BlogHeader from './BlogHeader';
import BlogContent from './BlogContent';

function App() {
    const [posts] = useState([
        {
            title: 'Exploring the Mountains',
            date: 'May 31, 2024',
            author: 'Mayank Anand',
            image: 'Reactpic1.jpg',
            body: 'This blog post captures the serene beauty of mountain landscapes through the lens of a camera.'
        },
        {
            title: 'Urban Street Photography',
            date: 'May 30, 2024',
            author: 'Mayank Anand',
            image: 'Reactpic2.jpg',
            body: 'Discover the vibrant life of the city streets and the stories they tell through candid photography.'
        }
    ]);

    return (
        <div className="App">
            <BlogHeader />
            <BlogContent posts={posts} />
        </div>
    );
}

export default App;
