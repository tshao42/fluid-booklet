import React, { useState, useEffect } from "react";

const MiniBrowser = ({ repoUrl, initialPage = "index.html" }) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [pageContent, setPageContent] = useState("");
  const [pageList, setPageList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPageList();
  }, []);

  useEffect(() => {
    if (currentPage) {
      fetchPage(currentPage);
    }
  }, [currentPage]);

  const fetchPageList = async () => {
    try {
      const response = await fetch(`/api/fetch-git-html`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: `${repoUrl}` })
      });      
      console.log(response);
      if (!response.ok) throw new Error("Failed to fetch page list");
      const data = await response.json();
      const htmlFiles = data.filter((file) => file.name.endsWith(".html"));
      setPageList(htmlFiles);
    } catch (err) {
      setError(
        "Failed to fetch page list. Please check your repository URL and permissions."
      );
    }
  };

  const fetchPage = async (pageName) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/fetch-git-html`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: `${repoUrl}/raw/main/${pageName}` })
      });
      console.log(response.text());
      // const response = await fetch(`${repoUrl}/raw/main/${pageName}`);
      if (!response.ok) throw new Error("Failed to fetch page content");
      const html = await response.text();
      setPageContent(html);
      setLoading(false);
    } catch (err) {
      setError(
        `Failed to fetch ${pageName}. Please check if the file exists and you have permission to access it.`
      );
      setLoading(false);
    }
  };

  const handleLinkClick = (e) => {
    if (e.target.tagName === "A" && e.target.href) {
      e.preventDefault();
      const newPage = e.target.href.split("/").pop();
      if (pageList.some((page) => page.name === newPage)) {
        setCurrentPage(newPage);
      } else {
        setError(`Page ${newPage} not found in the repository.`);
      }
    }
  };

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="mini-browser">
      <nav className="page-list">
        {pageList.map((page) => (
          <button
            key={page.name}
            onClick={() => setCurrentPage(page.name)}
            className={currentPage === page.name ? "active" : ""}
          >
            {page.name}
          </button>
        ))}
      </nav>
      <div className="content-viewer" onClick={handleLinkClick}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: pageContent }} />
        )}
      </div>
    </div>
  );
};

export default MiniBrowser;
