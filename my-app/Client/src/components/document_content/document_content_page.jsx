import DocumentContent from "./document_content/document_content";
import ChatContainer from "../chat/chat";
import Ad from "../ads/ads";
import React,{useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import './document_content_page.css';
const Documents_content_page = ({ user }) =>{
    const {documentId} = useParams()
    const[document,setDocument] = useState('');
    console.log("docId:",documentId)
    useEffect(() => {
        fetch(`http://localhost:5000/lecture_get/${documentId}`)
            .then(response => response.json())
            .then(data => {setDocument(data);console.log("document",data)})
            .catch(error => console.error('Error:', error));
        }, []);

    return(
        <div className="content-flex">
            <div className = "content-chat">
                <ChatContainer user = {user}/>
            </div>
            <DocumentContent document = {document} />
            <div className="ad">
                <Ad />
            </div>
        </div>
    );
}
export default Documents_content_page