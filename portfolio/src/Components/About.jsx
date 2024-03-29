import React from 'react'
import heroImage from '../Components/Assets/selfie.jpg'
import { FaBeer } from 'react-icons/fa';


const Hero = () => {


    return (
        <div className="hero" id='About'>
            <div className="about-section">
                <h1>About</h1>
            </div>

            <div className="hero-content">
                <div className="left-container">
                    <img src={heroImage} alt="" />
                </div>
                <div className="right-container">
                    <h1>I am a..</h1>
                    <p>
                        very passionate young developer who is
                        excited and ready to learn about new technologies.
                        I am always looking for opportunities to improve my skills<br /><br />

                        On my journey of becoming a developer, I came across a framework called flutter
                        and it was introduced to me by the MTN App Of The Year Academy. Due to a lot of school workload, I couldn't keep
                        up with the silabus so I decided to learn on my own. <br /> <br />

                        I am a self taught cross platforms mobile developer
                        using flutter framework. I learnt Java, SQL, HTML5,
                        and PHP at university level. I am on a journey of
                        learning CSS & JavaScript to use React as a framework
                        for Web Development, and so far the journey is amazing.

                    </p>
                    <h1>Ideal next job</h1>
                    <p>
                        I'd like to be a full-stack developer, with the use of object
                        oriented programming language like Java, a database language likeMySQL, and a
                        server-side language like PHP. I'd like to utilize frameworks like
                        Spring or React for my growth and the for the company's productivity and
                        deliverables.
                    </p>

                </div>
            </div>

        </div>
    )
}

export default Hero