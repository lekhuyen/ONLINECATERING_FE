import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { deleteAboutItem, fetchAboutData } from '../../redux/Information/aboutSlice';

function AboutUs() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Selecting state from Redux store
  const aboutData = useSelector((state) => state.about.items);
  const status = useSelector((state) => state.about.status);
  const error = useSelector((state) => state.about.error);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page

  useEffect(() => {
    dispatch(fetchAboutData());
  }, [dispatch]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5034/api/About/${id}`);
      dispatch(deleteAboutItem(id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/AboutUs-edit/${id}`);
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAboutData = aboutData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handling initial loading state
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  // Handling fetch error state
  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  // Ensure aboutData is always an array before mapping over it
  if (!Array.isArray(aboutData)) {
    return null; // or handle the case where aboutData is not an array
  }

  return (
    <div className='container'>
      <h2>About Us Content</h2>
      <button className="btn btn-success mb-3" onClick={() => navigate('/Create-About-Us')}>Create About Us</button>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Content</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentAboutData.map((about) => (
            <tr key={about.id}>
              <td>{about.id}</td>
              <td>{about.title}</td>
              <td>{about.content}</td>
              <td>
                {about.imagePaths && about.imagePaths.map((image, index) => (
                  <img
                    key={index}
                    src={`http://localhost:5034${image}`}
                    alt={`About ${index}`}
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                ))}
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEdit(about.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger ml-2"
                  onClick={() => handleDelete(about.id)}
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
          {Array.from({ length: Math.ceil(aboutData.length / itemsPerPage) }, (_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default AboutUs;
