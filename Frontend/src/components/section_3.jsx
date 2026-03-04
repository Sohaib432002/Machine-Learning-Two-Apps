import { useState } from "react";
const section_3 = (selected, setselected) => {
    const [show1, setshow1] = useState(false)
    const [name, setname] = useState('')
    const [url, seturl] = useState('')
    const [about, setabout] = useState('')
    const [github, setgithub] = useState('')
    return (
        <div className="section_3" id="about">
            <div className="heading_contact" >
                <h1 style={{ position: 'relative' }}>ABOUT US
                    <img src="/images/grop.png" alt="error" style={{
                        position: 'absolute', zIndex: -1, left: 0, top: -60
                    }} /></h1>
                <div className="about_us">
                    <div className="left_side_about">
                        <h4 style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>ABOUT ISA <img src="/images/about_us_logo.png" width={60} height={60} alt="" /></h4>
                        <p>My name is Muhammad Sohaib Maqsood, and I am a passionate student of Mathematics and emerging technologies. This website and the applications shared here are a result of my practical learning journey in the fields of web development and machine learning. Under the inspiring guidance of Dr. Israr , who teaches us with deep knowledge and wisdom, I have gained a strong foundation in machine learning and its real-world applications. All the apps and projects you see on this website are developed as part of our hands-on learning. I would also like to thank our lab assistant,Sir Umer , who has always supported us during lab work and helped us implement our ideas practically. With the skills I have learned and the motivation given by my mentors, I aim to use technology to solve real problems and contribute positively to society.

                        </p>
                    </div>
                    <div className="right_side_about">
                        <img src="/images/about_us_logo.png" width={130} alt="Error" />
                    </div>
                </div>
                <div className="member_about_container">
                    <div className="team" >
                        <h3>Our Team</h3>
                        <div>
                            <div className="continer_name"
                                onClick={() => {
                                    setshow1(!show1),setabout('Web Developer & ML '),setname('Muhammad Sohaib Maqsood'),seturl('https://www.linkedin.com/in/muhammad-sohaib-maqsood-72b785244'),setgithub('https://github.com/Sohaib432002');
                                    
                                }}>
                                <p>Muhammad Sohaib Maqsood</p>
                            </div>
                            <div className="continer_name" onClick={() => {setname('Muhammad Awais'),setabout('Graphic Designer '),seturl('https://www.linkedin.com/in/muhammad-awais-kalyar-1744072b8/'),setgithub(''),setshow1(!show1)}} >
                                <p>Muhammad Awais</p>
                            </div>
                        </div>

                    </div>
                    <div className="team_member_about" style={{ color: 'white' }}>
                        {show1 ?
                            <div className="img_container">
                                <img className="img1" width={210} height={300} src="/images/Rectangle 29.png" alt="Error" />

                                <div className="img2">
                                    <h2>{name}</h2>
                                    <p>{about}</p>
                                    <img src="/images/IMG_8377 1.png" width={300} alt="Error" />
                                    <div className="img_social" >
                                        <img
                                            onClick={() => window.open(url)}
                                            src="/images/akar-icons_linkedin-fill.png"
                                            width={42}
                                            height={41}
                                            alt="LinkedIn"
                                        />
                                        <img onClick={() => window.open(github)} src="/images/jam_github.png" width={42} height={41} alt="Error" />
                                    </div>
                                </div>
                            </div> : ''
                        }

                    </div>
                    <div className="image">
                        <img src="/images/Saly-13.png" alt="Error" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default section_3