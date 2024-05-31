import React from 'react';
import './BlogContent.css'; // Import your CSS file

const BlogContent = () => {
    return (
        <div className="container">
            <div className="top-bar">
                <div className="logo">Photography Blog</div>
                <div className="nav-links">
                    <a href="#">Home</a>
                    <a href="#">Gallery</a>
                    <a href="#">Contact</a>
                </div>
            </div>
            <div className="blog-posts">
                <div className="blog-post">
                    <h2 className="post-title">Exploring the Mountains</h2>
                    <div className="post-meta">
                        <span className="post-date">May 31, 2024</span> |
                        <span className="post-author">by Mayank Anand</span>
                    </div>
                    <img src="assets/Reactpic1.jpg" alt="Mountain Photography" className="post-image" />
                    <div className="post-body">
                        <p>This blog post captures the serene beauty of mountain landscapes through the lens of a camera.</p>
                    </div>
                    <hr />
                </div>
                <div className="blog-post">
                    <h2 className="post-title">Urban Street Photography</h2>
                    <div className="post-meta">
                        <span className="post-date">May 30, 2024</span> |
                        <span className="post-author">by Mayank Anand</span>
                    </div>
                    <img src="assets/Reactpic2.jpg" alt="Urban Street Photography" className="post-image" />
                    <div className="post-body">
                        <p>Discover the vibrant life of the city streets and the stories they tell through candid photography.</p>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
}

export default BlogContent;
