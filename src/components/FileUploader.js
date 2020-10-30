import React, { useState } from "react";
import axios from "axios";

export const FileUploader = () => {
  const [files, setFiles] = useState({
    selectedFile: "",
  });
  const FileUploadHandler = () => {
    const fd = new FormData();
    fd.append("file", files.selectedFile);
    fd.append("fileName", files.selectedFile.name);
    console.log(fd)
    axios
      .post("http://127.0.0.1:5000/api/fileUpload", fd)
      .then((res) => console.log(res.data));
  };
  return (
    <div>
      <input
        type="file"
        onChange={(e) => setFiles({ selectedFile: e.target.files[0] })}
      />
      <button onClick={FileUploadHandler}>Upload!</button>
    </div>
  );
};
