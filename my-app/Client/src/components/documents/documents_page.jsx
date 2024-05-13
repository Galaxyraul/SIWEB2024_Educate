import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Document from "./document/document";
import ChatContainer from "../chat/chat";
import Ad from "../ads/ads";

const Documents_page = ({ user }) => {
    const { categoryId } = useParams();
    const [documents, setDocuments] = useState([]);
    console.log(categoryId)
    useEffect(() => {
        fetch(`http://localhost:5000/lectures/${categoryId}`)
            .then(response => response.json())
            .then(data => {setDocuments(data);console.log(data)})
            .catch(error => console.error('Error:', error));
    }, [categoryId]);

    return (
        
        <div className="flex">
            <ChatContainer user={user} />
            <Document documents={documents} />
            <Ad />
        </div>
    );
}

export default Documents_page;