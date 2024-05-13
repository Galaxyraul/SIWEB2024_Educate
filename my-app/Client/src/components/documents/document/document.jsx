import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import './document.css';

const Document = ({documents}) => {
    const { categoryId } = useParams();
    const [currentOpenDetails, setCurrentOpenDetails] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const documentsPerPage = 4;
    const indexOfLastDocument = currentPage * documentsPerPage;
    const indexOfFirstDocument = indexOfLastDocument - documentsPerPage;
    const currentDocuments = documents.slice(indexOfFirstDocument, indexOfLastDocument);
    const totalPages = Math.ceil(documents.length / documentsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    const handleDocumentClick = (index) => {
        setCurrentOpenDetails(currentOpenDetails === index ? null : index);
    };

    return (
        <div className='documents-content'>
            <div className="document-container">
                {currentDocuments.map((document, index) => (
                    <div className="document" key={index} onClick={() => handleDocumentClick(index)}>
                        <div className="document-name">
                            <Link to={`/documents/${categoryId}/${document.name}`}>{document.name}</Link>
                        </div>
                        <div id={`details-${index}`} 
                            className={`document-details ${currentOpenDetails === index ? 'open' : ''}`}
                            style={{ display: currentOpenDetails === index ? 'block' : 'none' }}>
                            <p>{document.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button 
                    onClick={() => {setCurrentPage(currentPage - 1); setCurrentOpenDetails(null);}} 
                    disabled={currentPage === 1}
                >
                    &#171; Previous
                </button>
                {pageNumbers.map(number => (
                    <button 
                        key={number} 
                        onClick={() => {setCurrentPage(number); setCurrentOpenDetails(null);}}
                        style={currentPage === number ? { backgroundColor: '#3e9bfd' } : {}}
                    >
                        {number}
                    </button>
                ))}
                <button 
                    onClick={() => {setCurrentPage(currentPage + 1); setCurrentOpenDetails(null);}} 
                    disabled={currentPage === totalPages}
                >
                    Next &#187;
                </button>
            </div>
        </div>
    );
};

export default Document;