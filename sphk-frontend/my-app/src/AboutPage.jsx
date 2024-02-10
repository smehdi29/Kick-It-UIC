import React from 'react';
import './AboutPage.css';
import PageHeader from './PageHeader';

function AboutPage(){

    return(
        <div className="aboutPage">
            <PageHeader />
            <div className="aboutContainer">
                <div className="aboutContent"> 
                    <h2>KickIt: Where UIC Sports Come Alive</h2>
                    <p>Welcome to KickIt, your ultimate sports companion tailored exclusively for UIC students. At KickIt, we're all about promoting holistic well-being through the joy of sports and active living. Consider us your go-to for a balanced and fun campus life.</p>
                </div>
                <div className="aboutContent"> 
                    <h2>What we’re about:</h2>
                    <p>KickIt is where UIC students seamlessly integrate sports into their day. Personalized profiles, live game updates, and a diverse range of sports cater to various interests and schedules. It's more than just a healthy lifestyle; it's about embracing the college experience and building human connections. Kick back, relax, and let UIC become a home where you elevate your lifestyle.</p>
                </div>
                <div className="aboutContent"> 
                    <h2>Development Journey:</h2>
                    <p>The magic is in teamwork. Our team seamlessly divided responsibilities to craft a robust and user-friendly application. From Syed Mehdi's backend expertise to Syed Shaban and Oscar Franco's React.js proficiency, and Sadiq Fox's design finesse, KickIt is the result of collaborative efforts, blending personalities and navigating through various idea pushbacks to bring this app to you!</p>
                </div>
                <div className="aboutContent"> 
                    <h2>Accomplishments Celebrated:</h2>
                    <p>From establishing a functional database to crafting UI-pleasing scenes, KickIt stands as a testament to every small win. Celebrated amidst challenges, these accomplishments transformed what was once just an idea into something concrete. Remember, success often dances in the arms of failure!</p>
                </div>
            </div>

        </div>
    );
}

export default AboutPage;