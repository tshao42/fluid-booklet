import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import DemoPage from './components/DemoPage';
import Overview from './components/Overview';
import CuratedPlaces from './components/CuratedPlaces';
import GitHubFileViewer from './components/GitHubViewer';

const routes = [
  { path: '/', name: 'Home', icon: '🏠' },
  { path: '/3demo', name: 'Three.js Demo', icon: '🧊' },
  { path: '/overview', name: 'Overview', icon: '📞' },
  { path: '/curatedplaces', name: 'Curated Places', icon: '🏞' },
  { path: '/githubviewer', name: 'GitHub Viewer', icon: '📂' }
  // Add more routes as needed
];

function App() {
  return (
    <Router>
      <Navigation routes={routes} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/3demo" element={<DemoPage />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/curatedplaces" element={<CuratedPlaces />} />
        <Route path="/githubviewer" element={<GitHubFileViewer />} />
      </Routes>
    </Router>
  );
}

export default App;