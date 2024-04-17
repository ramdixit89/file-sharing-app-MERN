import { useState, useEffect, useRef } from 'react';
import './App.css';
import { uploadFile } from './service/api';
import url from './img/logo.jpg';
import url_2 from './img/main.jpg'
function App() {

  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
  
  const fileInputRef = useRef();

  
  
  useEffect( ()=>{
    const getImage = async () =>{
      if(file){
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  },[file])
 
   const onUploadClick = () =>{
        fileInputRef.current.click();
   }


  return (
    <>
    <nav className='navbar navbar-expand text-center container-fluid'>
        <img width={"80px"} src={url} alt="" />
        <h3 className='file-heading'>File Sharing App</h3>
    </nav>
    <div className="container">
       <div className="row">
         <div className="col-sm-6">
           <img src={url_2} alt="file" />
         </div>
         <div className="col-sm-6">
         <div className="wrapp">
        <h1>Simple file sharing!</h1>
        <p>Upload and share the download link.</p>

        <button className='btn btn-danger' onClick={() => onUploadClick()}>Upload file <i class="bi bi-upload"></i></button>
        <input 
          type="file"
          ref={fileInputRef}
          style={{ display:"none" }}
          onChange= { (e) =>setFile(e.target.files[0])}
        />

        <a href={result} target='_blank'>{result}</a>
       </div>
         </div>
       </div>
    </div>
    </>
  );
}

export default App;
