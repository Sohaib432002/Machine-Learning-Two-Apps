
import { useState, useEffect } from "react";
const App2 = () => {
    const [document, setDocument] = useState(null);
    const [Result, setResult] = useState();
    const [data, setData] = useState(null);
    const [load, setLoading] = useState(false);
    const handlesubmit = async (event) => {
        event.preventDefault();
        try {
            console.log('clicked');
            const formData = new FormData();
            formData.append('document', document);

            const response = await fetch('http://127.0.0.1:8000/api/upload_document/', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error("Server error:", errorText);
                setResult("Upload failed: " + response.status);
                return;
            }

            const result = await response.json();
            console.log("Upload result:", result);
            setLoading(false);
            setResult(result);


        } catch (error) {
            console.error("Error uploading file:", error);
            setResult("Error: " + error.message);
        }
    };
    const loading = () => {
        setLoading(true);
    };

    return (
        <><div className="loading" style={{ display: load ? 'flex' : 'none' }}>
            {load && <div className="loading-spinner">
                <div className="spinner"></div>
                <p>Loading...</p>
            </div>}

        </div><div className="container-app2" style={{ filter: load ? 'blur(5px)' : 'none' }}>
                <div className="input_data">
                    <form onSubmit={handlesubmit} encType="multipart/form-data">
                        <label htmlFor="document" style={{ color: 'white' }}>Select a document:</label>
                        <input
                            type="file"
                            name="document"
                            id="document"
                            onChange={(event) => {
                                setDocument(event.target.files[0]);
                                console.log("Selected file:", event.target.files[0]);
                            }}
                            accept=".pdf,.doc,.docx,.csv,.txt,.excel,.xlsx"
                            required /><br />
                        <input type="submit" onClick={loading} className="submit_input" value="Upload" />
                    </form>
                    <div className="reasult-app2">
                        <div className="head_app2"><h2>Upload Document</h2>
                            <p>{document ? `Selected file: ${document.name}` : "No file selected"}</p>
                        </div>
                        {Result &&
                            <div className="data-app2">
                                <h1>Data Analysis</h1>
                                <div className="box-container">
                                    <div className="box1 box-2">
                                        <h3 style={{ color: 'white' }}>Basic Details</h3>

                                        <p>Rows : <strong>{Result.Total_rows}</strong></p>
                                        <p>Columns : <strong>{Result.Total_Columns}</strong></p>
                                        <p>Total Null Values (Dataset) : <strong>{Result.Total_null_no}</strong>  </p>

                                    </div>

                                    <div className="box2 box-2">
                                        <strong>
                                            <h3 style={{ color: 'white' }}>Columns Name</h3>
                                            <div>
                                                <ul>
                                                    {Array.isArray(Result.Total_Columns_list) &&
                                                        Result.Total_Columns_list.map((column, index) => (
                                                            <li key={index}>{column}</li>
                                                        ))}
                                                </ul></div></strong>
                                    </div>
                                    <div className="box3 box-2">

                                        <strong>{typeof (Result.total_null_values) === 'object'
                                            &&
                                            <div>
                                                <h3 style={{ color: 'white' }}>Total Null Values </h3>
                                                <ul>
                                                    {Object.entries(Result.total_null_values).map(([key, value]) => (
                                                        <li key={key}>
                                                            {key}: <strong>{value}</strong>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>}</strong>

                                        <strong>
                                            {Array.isArray(Result.total_null_values) && (
                                                <div>
                                                    <ul>
                                                        {Result.total_null_values.map(([key, value], index) => (
                                                            <li key={index}>
                                                                {key}: <strong>  {value}  </strong>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </strong>
                                    </div>
                                    <div>
                                        <h3 style={{ color: 'white' }}>Total Uniq Value in Each columns</h3>
                                        <strong>{<div className="box4 box-2">
                                            {Result.total_no_unique_values && (
                                                <ul>
                                                    {Object.entries(Result.total_no_unique_values).map(([key, value]) => (
                                                        <li key={key}>
                                                            {key}: <strong>{value}</strong>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>}</strong>
                                    </div>
                                    <div>
                                        <h3 style={{ color: 'white' }}>PairPlot</h3>
                                        <strong>{<div className="box4 box-2">
                                            <img src={'../../backend/' + Result.pairplot_url} alt="Pair Plot" />

                                        </div>}</strong>
                                    </div>

                                    <div>
                                        <h3 style={{ color: 'white' }}>HeatMap(Null-values)</h3>
                                        <strong>{<div className="box4 box-2">
                                            <img src={'../../backend/' + Result.heatmap_url} alt="heatmap" />

                                        </div>}</strong>
                                    </div>
                                    <div>
                                        <h3 style={{ color: 'white' }}>Histogram</h3>
                                        <strong>{<div className="box4 box-2">
                                            <img src={'../../backend/' + Result.histogram_url} alt="histogram" />

                                        </div>}</strong>
                                    </div>
                                    <div>
                                        <h3 style={{ color: 'white' }}>Box-Plot</h3>
                                        <strong>{<div className="box4 box-2">
                                            <img src={'../../backend/' + Result.box_plot_url} alt="BoxPlot" />

                                        </div>}</strong>
                                    </div>
                                    <div>
                                        <h3 style={{ color: 'white' }}>LinePlot</h3>
                                        <strong>{<div className="box4 box-2">
                                            <img src={'../../backend/' + Result.line_plot_url} alt="line_plot" />

                                        </div>}</strong>
                                    </div>
                                    <div>
                                        <h3 style={{ color: 'white' }}>Scatter-Plot</h3>
                                        <strong>{<div className="box4 box-2">
                                            <img src={'../../backend/' + Result.scatter_plot_url} alt="scatter_plot" />

                                        </div>}</strong>
                                    </div>
                                </div>

                            </div>}

                    </div>
                </div>

            </div></>
    )


}

export default App2;