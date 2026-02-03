import React from 'react';
import { Link } from 'react-router-dom';
import './BlogSection.css';

// Données mockées en attendant l'intégration WISP
const mockPosts = [
  {
    id: 1,
    slug: 'premier-article',
    title: 'Mon premier article de blog',
    excerpt: 'Une introduction à mon parcours de développeur et mes objectifs pour 2026.',
    date: '2026-02-01',
    category: 'Personnel',
    readTime: '5 min'
  },
  {
    id: 2,
    slug: 'react-hooks',
    title: 'Maîtriser les React Hooks',
    excerpt: 'Un guide complet pour comprendre et utiliser efficacement les hooks React.',
    date: '2026-01-28',
    category: 'Tutorial',
    readTime: '8 min'
  },
  {
    id: 3,
    slug: 'design-cyberpunk',
    title: 'Créer un design cyberpunk en CSS',
    excerpt: 'Comment reproduire l\'esthétique cyberpunk avec du CSS pur.',
    date: '2026-01-25',
    category: 'Design',
    readTime: '6 min'
  }
];

const BlogSection = () => {
  return (
    <section className="blog-section" id="blog">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// BLOG</span>
          <h2 className="section-title">DERNIERS ARTICLES</h2>
        </div>
        
        <div className="blog-grid">
          {mockPosts.map((post, index) => (
            <article key={post.id} className="blog-card" style={{ '--index': index }}>
              <div className="blog-card-header">
                <span className="blog-category">{post.category}</span>
                <span className="blog-date">{new Date(post.date).toLocaleDateString('fr-FR')}</span>
              </div>
              
              <h3 className="blog-title">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              
              <p className="blog-excerpt">{post.excerpt}</p>
              
              <div className="blog-footer">
                <span className="blog-readtime">⏱ {post.readTime}</span>
                <Link to={`/blog/${post.slug}`} className="blog-read-more">
                  LIRE →
                </Link>
              </div>
              
              <div className="blog-card-decoration"></div>
            </article>
          ))}
        </div>
        
        <div className="blog-cta">
          <Link to="/blog" className="btn btn-secondary">
            VOIR TOUS LES ARTICLES →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;