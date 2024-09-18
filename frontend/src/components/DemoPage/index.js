import React from 'react';
import { Link } from 'react-router-dom';
import ThreeScene from '../ThreeScene';

const DemoPage = () => {
  return (
    <div className="demo-page">
      <h1>3D Demo Page</h1>
      <div className="demo-content">
        <div className="scene-container">
          <ThreeScene />
        </div>
        <div className="description">
          <p>This is a simple 3D scene created with Three.js and embedded in a React component.</p>
          <p>The green cube rotates continuously. This demonstrates how we can integrate 3D graphics into our React application.</p>
        </div>
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default DemoPage;