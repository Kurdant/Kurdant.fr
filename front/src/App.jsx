import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/index.jsx';
import {
  HomePage,
  AboutPage, 
  BlogPage,
  BlogPostPage,
  GamesPage,
  GamePage,
  ContactPage,
  NotFoundPage
} from './pages/index.jsx';

// Import styles (ordre important pour cascade CSS)
import './styles/index.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Page d'accueil */}
          <Route path="/" element={<HomePage />} />
          
          {/* À propos */}
          <Route path="/about" element={<AboutPage />} />
          
          {/* Blog WISP */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          
          {/* Jeux */}
          <Route path="/games" element={<GamesPage />} />
          <Route path="/games/:gameId" element={<GamePage />} />
          
          {/* Contact */}
          <Route path="/contact" element={<ContactPage />} />
          
          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
