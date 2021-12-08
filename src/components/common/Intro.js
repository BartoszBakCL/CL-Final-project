import React from 'react';

const Intro = () => {
    return (
        <div className="intro__container">
        <div className="main">
            <div className="container">
                <h1>Move</h1>
                <p>Form healthy habits to take your fitness to the next level.</p>
                <a href="/getstarted" className="btn-start">Start Now</a>
            </div>
        </div>
        <div className="supporting">
            <div className="container">
                <div className="col">
                    <h2>Move</h2>
                    <p>Become more active by tracking your runs, rides, and walks.</p>
                </div>
                <div className="col2">
                    <h2>Sync</h2>
                    <p>Access your activity on your phone, tablet, or computer.</p>
                </div>
                <div className="col3">
                    <h2>Compete</h2>
                    <p>Set personal challenges and see how you rank against your friends.</p>
                </div>
            </div>
        </div>
        <div className="feature">
            <div className="container">
                <h1>Move. Rest. Recover. Move</h1>
            </div>
        </div>
        <div className="premium">
            <div className="container">
                <h2>Go Premium</h2>
                <p>Receive recommendations based on your activity to level up.</p>
                <a href="/aboutus" className="btn-white">Learn More</a>
            </div>
        </div>

    <div className="footer">
        <div className="container">
            <h1>Stop scrolling. Start moving.</h1>
            <a className="btn-start" href="/getstarted">Start Now</a>
        </div>
    </div>
        </div>

);
};

export default Intro;