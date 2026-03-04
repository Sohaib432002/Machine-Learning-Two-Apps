
/**
 * Renders detailed information about the Traffic Sign Detection web application,
 * including its introduction, features, technologies used, model accuracy, workflow,
 * and real-world applications.
 *
 * @component
 * @example
 * return <App_details />
 */
const App1 = () => {
    return (
        <div className="app1_details">
            <div className="heading_app1">
                <h3><img src="" alt="" /> Traffic Sign Detection</h3>
                <p>In today's world of automation, road safety has become more important than ever. Our Traffic Sign Detection Web App is a step towards making roads smarter and driving safer.
                    This project is powered by Artificial Intelligence (AI) and built using Python and TensorFlow, capable of detecting traffic signs with ~99% accuracy.

                    Whether it' s a stop sign, speed limit, or a no-entry signal, our model recognizes it in milliseconds!</p>
            </div>

            <div className="features_details">
                <h4>Features</h4>
                <p>Using a deep learning model trained on thousands of images of traffic signs, this app can:</p>
                <ul>
                    <li> High Detection Accuracy.</li>
                    <li> Deep Learning-based System.</li>
                    <li> Mobile Friendly Interface.</li>
                    <li>Fast Processing with Lightweight Model.</li>

                </ul>
            </div>
            <div className="teachonlgies_used">
                <div> <h4>Technologies Used</h4>
                    <p>Our web application is built using the following technologies:</p>
                    <ul>
                        <li>Python  core programming language.</li>
                        <li>TensorFlow / Keras for training deep learning models.</li>
                        <li>OpenCV  for image processing.</li>
                        <li>NumPy & Pandas  for data handling.</li>
                        <li>Matplotlib / Seaborn for visualizations.</li>
                        <li>Django for building the backend website. </li>
                        <li>Reactjs for buliding the Front-end website.</li>
                    </ul>
                </div>
                <div className="images tech_images">
                    <img src="/images/Tect_used/4729170_1eb1.jpg" className="tech_img1" />
                    <img src="/images/Tect_used/images.png" className="tech_img2" />
                    <br />
                    <img src="/images/Tect_used/python-core.jpeg" className="tech_img3" />

                </div>
            </div>
            <div className="model_accuracy">
                <h4>Model Details</h4>
                <p>Our model has been trained on a diverse dataset of traffic signs, achieving an accuracy of over 99% on the test set. This ensures that it can reliably detect and classify traffic signs in real-world scenarios.</p>
                <div className="Model_details1"><img src="/images/Tect_used/Capture.PNG" alt="" /></div>
            </div>
            <div className="working_details">
                <h4>How It Works</h4>
                <ul>
                    <li>Data Collection: We trained our model on the German Traffic Sign Recognition Benchmark (GTSRB) dataset.</li>

                    <li>Preprocessing: Images were normalized, resized, and augmented.</li>

                    <li>  Model Training: A custom CNN (Convolutional Neural Network) architecture was trained for classification.</li>

                    <li>   Testing: Accuracy tested on validation and test datasets.</li>

                    <li>    Deployment: Model integrated into a web interface where users can upload images and get instant predictions.</li>
                </ul>
                <h5>Model WorkFlow Example:</h5>
                <div className="workflow_img">
                    <img src="/images/Capture.PNG" alt="" /></div>
                <div className="applications">
                    <h4> Real-World Applications</h4>
                    <p> This project isn't just academic—it's practical. Some real-world use cases include:</p>
                    <ul>
                        <li> Self-driving cars / ADAS systems</li>
                        <li>Computer Vision research</li>
                        <li>Smart surveillance & monitoring</li>
                        <li>Educational AI Demonstrations</li>
                        <li>Smart city projects</li>
                    </ul>
                    <div className="images">
                        <img src="/images/Applications.PNG" alt="" />
                    </div>
                </div>
            </div>
            <div className="ModeL_accuracy_details">
                <h4>Model Accuracy</h4>
                <p>Our model has been trained on a diverse dataset of traffic signs, achieving an accuracy of over 99% on the test set. This ensures that it can reliably detect and classify traffic signs in real-world scenarios.</p>

                <div className="Model_details2 ">
                    <img src="/images/Model_result/about_us_logo.png" alt="" />
                    <img src="/images/Model_result/download.png" alt="" />
                    <img src="/images/Model_result/Accuracy.PNG" alt="" />
                </div>
            </div>
        </div>
    )
}

const App2 = () => {
    return (
        <>
            <div className="app2_details">
                <h3>Smart Data Inspector</h3>
                <p>Smart Data Inspector is a powerful web application that allows you to upload your dataset (CSV file) and instantly get a complete analysis of the data. Whether you're a data scientist, student, or business analyst — this tool helps you understand your data deeply without writing any code.</p>
            </div>
            <div className="feature_app2">
                <h4>Features</h4>
                <div style={{ display: 'flex' }} className="featurees_app2_details">

                    <ul>
                        <li>Upload CSV files and get instant insights.</li>
                        <li>Visualize data distributions with interactive charts.</li>
                        <li>Detect missing values and outliers.</li>
                        <li>Generate descriptive statistics automatically.</li>
                        <li>Export analysis results in various formats.</li>
                    </ul>
                    <div className="fearture_imgs">
                        <img src="/images/App2/features.PNG" alt="" />
                    </div>
                </div>
            </div>
            <div className="feature_app2 ">
                <h4>Auto-Generated Graphs</h4>
                <p>After analyzing your data, the app will generate and display the following visualizations</p>
                <div style={{ display: 'flex' }} className="graph_genrater">
                    <ul>
                        <li>Pairplot  to show relationships between numerical features.</li>

                        <li>Heatmap  to visualize missing values in your dataset.</li>

                        <li>Histogram  to understand distribution of each numeric column.</li>

                        <li>Scatter Plot  to explore patterns between features.</li>

                        <li>Box Plot  to detect outliers and data spread.</li>

                        <li>Line Plot  to see how numeric values change across rows.</li>
                    </ul>
                    <div className="fearture_imgs graphs_imgs">
                        <img src="/images/App2/Graphs-and-illustrations_editverse.jpg.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="feature_app2 ">
                <h4>How It Works Behind the Scenes?</h4>
                <p>When you upload a CSV</p>
                <div className="Workflow_details" >
                    <ul>
                        <li>  ✅ The app reads your data using pandas.</li>

                        <li>  🚫 It removes unwanted index columns like Unnamed: 0. </li>

                        <li>   📉 It calculates rows, columns, and missing data. </li>

                        <li>   📈 It uses Seaborn and Matplotlib to create graphs.</li>

                        <li>  🧼 All results are cleaned and formatted to be displayed on your screen.</li>
                    </ul>
                    <div className="fearture_imgs workflow_imgs">
                        <img src="/images/App2/workflow.PNG" alt="" />
                    </div>
                </div>
            </div>
            <div className="feature_app2 ">
                <h4>Why This App Is Useful?</h4>
                <p>When you upload a CSV</p>
                <div className="Workflow_details">
                    <ul>
                        <li> No need for coding skills.</li>

                        <li>  Quick data understanding in minutes.</li>

                        <li>  Saves your time when analyzing datasets.</li>

                        <li>  Ideal for students, teachers, and professionals.</li>
                    </ul>
                    <div className="fearture_imgs workflow_imgs" >
                        <img src="/images/App2/prefect_for_Everyone.PNG" alt="" />
                    </div>
                </div>
            </div>
            <div className="feature_app2 ">
                <h4>Technologies Used</h4>
                <p>When you upload a CSV</p>
                <div className="Workflow_details ">
                    <ul>
                       <li> Python</li>

                       <li> Django</li>

                       <li> Pandas, NumPy</li>

                       <li> Seaborn, Matplotlib</li>

                        <li>HTML & CSS</li>
                    </ul>
                    <div className="fearture_imgs workflow_imgs app2_tect">
                        <img src="/images/App2/used.PNG" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export function App_details() {
    return (
        <div style={{ color: 'white' }} className="app-details">
            <h2>About Our Apps</h2>
            <hr />
            <App1 />
            <hr />
            <App2 />
        </div>
    );
}
