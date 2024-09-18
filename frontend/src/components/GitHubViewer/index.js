import React, { useState } from 'react';

function GitHubFileViewer() {
  const [owner, setOwner] = useState('');
  const [repo, setRepo] = useState('');
  const [path, setPath] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const fetchFile = async () => {
    try {
      const response = await fetch(`/api/fetch-github-file?owner=${owner}&repo=${repo}&path=${path}`);
      const data = await response.json();
      
      if (data.error) {
        setError(data.error);
        setContent('');
      } else {
        setContent(data.content);
        setError('');
      }
    } catch (error) {
      setError('Failed to fetch file');
      setContent('');
    }
  };

  return (
    <div>
      <input 
        value={owner} 
        onChange={(e) => setOwner(e.target.value)} 
        placeholder="Owner"
      />
      <input 
        value={repo} 
        onChange={(e) => setRepo(e.target.value)} 
        placeholder="Repository"
      />
      <input 
        value={path} 
        onChange={(e) => setPath(e.target.value)} 
        placeholder="File path"
      />
      <button onClick={fetchFile}>Fetch File</button>
      
      {error && <p style={{color: 'red'}}>{error}</p>}
      {content && <pre>{content}</pre>}
    </div>
  );
}

export default GitHubFileViewer;