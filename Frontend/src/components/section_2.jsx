const section_2 =()=>{
    return(
        <div className="section2 view" id="predict" onScroll={()=>alert('yes.....')}>
            <div className="heading_section2">
                <h1 style={{ position: 'relative',color:'white' }}>APPS
                            <img src="/images/grop.png" alt="error" style={{
                                position: 'absolute', zIndex: -1, left: 0, top: -60
                            }} /></h1>
            </div>
            <div className="container view">
                <div className="apps">
                        <a href="app1" >
                    <div className="app1 " >
                        <h1 style={{font:0}}>SmartSignDetector</h1>
                    </div>
                        </a>
                        <a href="app2">
                    <div className="app1 app2" >
                        <h1>DataInspect</h1>
                    </div></a>
                </div>
            </div>
        </div>
    )
}

export default section_2