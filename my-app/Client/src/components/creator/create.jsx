import React from "react";
import FileUploadWithTags from "./excercises";
import FileUploadModule from "./files";
import VideoCardCreation from "./videos";

const Create = ({ user }) => {
    return (
        <div>
            <FileUploadWithTags />
            <FileUploadModule />
            <VideoCardCreation />
        </div>
    );
};

export default Create;