import { use } from "react";
import { useState,useEffect } from "react";
import { data } from "react-router-dom";


const App1 = () => {
    const [image, setImage] = useState(null);
    const [Result,setResult]=useState()
    const [data, setData] = useState(null);
    
    const [load, setLoading] = useState(false);

    const handleImage = (event) => {
        setImage(event.target.files[0]);
        console.log("Selected file:", event.target.files[0]);
        
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('clicked')
        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/upload/', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            setData(data); 
            alert('Image uploaded successfully!');
            setLoading(false); 
            
        } catch (error) {
            console.error('Error:', error);
            alert('Error uploading image. Please try again.');
            setLoading(false); 
        }
    };
    const loading = () => {
        setLoading(true);
    };
    useEffect(() => { fetch("http://127.0.0.1:8000/api/upload/")
    .then(res => res.json())
    .then(data => setResult(data));}, []);
    console.log('its a object',Result);
    console.log(data)

    return (
        <><div className="loading" style={{ display: load ? 'flex' : 'none' }}>
            {load && <div className="loading-spinner">
                <div className="spinner"></div>
                <p>Loading...</p>
            </div>}
        </div><div className="container-app1" style={{filter: load ? 'blur(2px)' : 'none'}}>
                <div className="input_data app-1">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <label htmlFor="image" style={{ color: 'white' }}>Select an image:</label>
                        <input
                            type="file"
                            name="image"
                            id="image"
                            onChange={handleImage}
                            accept="image/*"
                            required /><br />
                        <input type="submit" onClick={loading} className="submit_input" value="Upload" />

                    </form>
                    {data && (
                        <div className="result result-1" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                            <h2 style={{ color: 'white' }}> Result:</h2>
                            <p style={{ color: 'red' }}>Class Number : {data.predicted_class}</p>
                            <p style={{ color: 'yellow' }}>Label : {data.predicted_label}</p>
                            
                        </div>
                    )}
                </div>
            </div></>
    );
};

export default App1;
