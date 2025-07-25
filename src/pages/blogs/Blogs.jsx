import React, { useEffect } from 'react';
import AOS from 'aos';
import '../blogs/Blogs.css'; 
import blogImage1 from '../../assets/image_8.jpg';
import blogImage2 from '../../assets/image_2.jpg';
import blogImage3 from '../../assets/image_3.jpg';

import { FaUser, FaComment } from 'react-icons/fa'; 

const blogPosts = [
  { image: blogImage1, date: 'JUNE 21, 2019', author: 'ADMIN', comments: 3, title: 'Why Lead Generation is Key for Business Growth' },
  { image: blogImage2, date: 'JUNE 21, 2019', author: 'ADMIN', comments: 3, title: 'Why Lead Generation is Key for Business Growth' },
  { image: blogImage3, date: 'JUNE 21, 2019', author: 'ADMIN', comments: 3, title: 'Why Lead Generation is Key for Business Growth' },
];

const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <span className="background-text-blog">Blog</span>
        
        <div className="section-header-blog" data-aos="fade-down">
          <h2><span id='ourspan'>Our</span> Blog</h2>
          <p>"Explore our blog for fresh tutorials, insights, and inspiration on modern web development".</p>
        </div>

        <div className="blog-grid" data-aos="fade-up">
          {blogPosts.map((post, index) => (
            <div className="blog-card" key={index}>
              <a href="#" className="blog-image-link">
                <img src={post.image} alt={post.title} loading="lazy" />

              </a>
              <div className="blog-content">
                <div className="blog-meta">
                  <span>{post.date}</span>
                  <span><FaUser /> {post.author}</span>
                  <span><FaComment /> {post.comments}</span>
                </div>
                <h3 className="blog-title">
                  <a href="#">{post.title}</a>
                </h3>
                <p className="blog-excerpt">
                  A small river named Duden flows by their place and supplies it with the necessary regelialia.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;