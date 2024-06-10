// src/BlogContent.js
import React from 'react';
import './BlogContent.css';

const BlogContent = ({ posts }) => {
    return (
        <div className="blog-content">
            <div className="top-bar">
                <div className="logo">Photography Blog</div>
                <div className="nav-links">
                    <a href="#">Home</a>
                    <a href="#">Gallery</a>
                    <a href="#">Contact</a>
                </div>
            </div>
            <div className="blog-posts">
                {posts.map((post, index) => (
                    <div className="blog-post" key={index}>
                        <h2 className="post-title">{post.title}</h2>
                        <div className="post-meta">
                            <span className="post-date">{post.date}</span> |
                            <span className="post-author"> by {post.author}</span>
                        </div>
                        <img src={`${process.env.PUBLIC_URL}/assets/${post.image}`} alt={post.title} className="post-image" />
                        <div className="post-body">
                            <p>{post.body}</p>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogContent;
