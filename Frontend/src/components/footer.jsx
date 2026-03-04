const footer = () => {
    return (
        <>
            <div style={{ display: "flex", flexDirection: 'column' }} >
                <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}><p className="btm_text" style={{ color: 'white', font: 15 }}>© Copyright 2021 | All rights reserved</p></div>
                <div className="logos_container" style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                    <div className="log_bg" style={{ position: 'relative', display: "flex", justifyContent: 'center', alignItems: 'center', margin: 14 }}>
                        <img src="/images/logo_footer/Ellipse 54.png"  width={34} height={34} style={{ position: 'absolute', zIndex: -1 }} alt="Error" />
                        <img src="/images/logo_footer/facebook logo.png" onClick={()=>open('https://www.facebook.com/sohaib.maqsood.51319')} alt="error" />
                    </div>
                    <div className="log_bg" style={{ position: 'relative', display: "flex", justifyContent: 'center', alignItems: 'center', margin: 14 }}>
                        <img src="/images/logo_footer/Ellipse 54.png" width={34} height={34} style={{ position: 'absolute', zIndex: -1 }} alt="Error" />
                        <img src="/images/logo_footer/github logo.png" onClick={()=>open('https://github.com/Sohaib432002')} alt="error" />
                    </div>
                    <div className="log_bg" style={{ position: 'relative', display: "flex", justifyContent: 'center', alignItems: 'center', margin: 14 }}>
                        <img src="/images/logo_footer/Ellipse 54.png" width={34} height={34} style={{ position: 'absolute', zIndex: -1 }} alt="Error" />
                        <img src="/images/logo_footer/instagram logo.png"  alt="error" />
                    </div>
                    <div className="log_bg" style={{ position: 'relative', display: "flex", justifyContent: 'center', alignItems: 'center', margin: 14 }}>
                        <img src="/images/logo_footer/Ellipse 54.png" width={34} height={34} style={{ position: 'absolute', zIndex: -1 }} alt="Error" />
                        <img src="/images/logo_footer/linked in logo.png" onClick={()=>open('https://www.linkedin.com/in/muhammad-sohaib-maqsood-72b785244/')} alt="error" />
                    </div>
                    <div className="log_bg" style={{ position: 'relative', display: "flex", justifyContent: 'center', alignItems: 'center', margin: 14 }}>
                        <img src="/images/logo_footer/Ellipse 54.png" width={34} height={34} style={{ position: 'absolute', zIndex: -1 }} alt="Error" />
                        <img src="/images/logo_footer/youtube logo.png" alt="error" />
                    </div>
                    <div className="log_bg" style={{ position: 'relative', display: "flex", justifyContent: 'center', alignItems: 'center', margin: 14 }}>
                        <img src="/images/logo_footer/Ellipse 54.png" width={34} height={34} style={{ position: 'absolute', zIndex: -1 }} alt="Error" />
                        <img src="/images/logo_footer/twitter logo.png"  alt="error" />
                    </div>
                </div>
                <div className="btm" style={{display:'flex',justifyContent:'space-between'}}>
                    <img src="/images/bottom_pic.png" alt="" />
                    <img src="/images/bottom_pic.png" alt="" />
                </div>

            </div>
        </>
    )
}


export default footer