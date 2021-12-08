import React from 'react';

const GetStarted = () => {
    return (
        <div className="gs__container">
            <div className="gs__left" >
                <h1>Push-ups</h1>
                <a href="/getstarted/pushups" className="gs__button">Read More</a>
            </div>
            <div className="gs__right">
                <h1>Pull-ups</h1>
                <a href="/getstarted/pullups" className="gs__button">Read More</a>
            </div>
        </div>
    );
};

export default GetStarted;