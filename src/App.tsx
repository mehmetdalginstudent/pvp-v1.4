import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/Layout/MainLayout';
import { MainContent } from './components/MainContent';
import { AdminPanel } from './components/Admin/AdminPanel';
import { BlogPost } from './components/Blog/BlogPost';
import { QuestionDetail } from './components/Question/QuestionDetail';
import { AnnouncementDetail } from './components/Announcement/AnnouncementDetail';
import { RSSFeed } from './components/RSSFeed';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/admin/*" element={<AdminPanel />} />
      <Route path="/blog/:id" element={<BlogPost />} />
      <Route path="/question/:id" element={<QuestionDetail />} />
      <Route path="/announcement/:id" element={<AnnouncementDetail />} />
      <Route path="/rss" element={<RSSFeed />} />
    </Routes>
  );
};

export default App;