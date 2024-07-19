import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { deleteNewsItem, fetchNewsData } from '../../redux/Information/newsSlice';

function NewsAd() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Selecting state from Redux store
  const newsData = useSelector((state) => state.news.items);
  const status = useSelector((state) => state.news.status);
  const error = useSelector((state) => state.news.error);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 5; // Number of items per page

  useEffect(() => {
    dispatch(fetchNewsData());
  }, [dispatch]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5034/api/News/${id}`);
      dispatch(deleteNewsItem(id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/News-edit/${id}`);
  };

  // Pagination logic
  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentNews = newsData.slice(indexOfFirstContact, indexOfLastContact);

  // Calculate total pages for pagination
  const pageNumbers = Math.ceil(newsData.length / contactsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handling initial loading state
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  // Handling fetch error state
  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  // Ensure newsData is always an array before mapping over it
  if (!Array.isArray(newsData)) {
    return null; // or handle the case where newsData is not an array
  }

  // Function to limit content to at least 9 words with ellipses
  const limitContent = (content) => {
    const words = content.split(' ');
    if (words.length > 10) {
      return words.slice(0, 10).join(' ') + '...';
    }
    return content;
  };

  return (
    <div className='container'>
      <h2>News Data</h2>
      <button className="btn btn-success mb-3" onClick={() => navigate('/Create-News')}>Create News</button>

      <table className="table table-dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Content</th>
            <th>NewsTypeName</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentNews.map((news) => (
            <tr key={news.id}>
              <td>{news.id}</td>
              <td>{news.title}</td>
              <td>{limitContent(news.content)}</td>
              <td>{news.newsTypeName}</td>
              <td>
                {news.imagePaths && news.imagePaths.length > 0 && (
                  <img
                    src={`http://localhost:5034${news.imagePaths[0]}`}
                    alt={`News ${news.id}`}
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                )}
                <i class="fa fa-info-circle" aria-hidden="true"></i>
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEdit(news.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger ml-2"
                  onClick={() => handleDelete(news.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Pagination */}
      <nav>
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => paginate(currentPage - 1)}>Previous</button>
          </li>
          {Array.from({ length: pageNumbers }, (_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === pageNumbers ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => paginate(currentPage + 1)}>Next</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NewsAd;
