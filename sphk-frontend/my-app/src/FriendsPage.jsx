import React from 'react';
import './FriendsPage.css';
import { useParams } from 'react-router-dom';
import PageHeader from './PageHeader';

const friends = [
    {firstName: 'Dimi', lastName: 'Gjorgievski', profilePic: 1, skillLevel: 1, Age: 18},
    {firstName: 'Frank', lastName: 'Sinatra', profilePic: 2, skillLevel: 0, Age: 18, },
];

function FriendsPage(){
    return(
        <div className="friendaPage">
            <PageHeader />
            <div className="friendsContainer">
                {friends.map((friend, index)=> (
                    <div className="friendItem" key={index}>
                        <img src={friend.profilePic} alt={friend.name} className="friendPic"/>
                        <p className="friendName">{friend.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FriendsPage;