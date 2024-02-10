import React, { useEffect, useState } from 'react';
import './FriendsPage.css';
import { useParams } from 'react-router-dom';
import PageHeader from './PageHeader';
import {listUsers} from './UserService.js';
import one from './1.png';
import two from './2.png';
import three from './3.png';
import four from './4.png';
import five from './5.png';
import six from './6.png';
import seven from './7.png';



function FriendsPage(){
    const getProfilePicture = (user) => {
        switch(user.pfp){
            case 1:
                return one;
            case 2:
                return two;
            case 3:
                return three;
            case 4:
                return four;
            case 5:
                return five;
            case 6:
                return six;
            default:
                return seven;
        }
    }
    const[users, setUsers] = useState([])
    useEffect(() =>{
        listUsers().then((response) =>{
            setUsers(response.data);
        }).catch(error => {
            console.error("Could not get users");
        })
    }, [])
    return(
        <div className="friendsPage">
            <PageHeader />
            <h1 className='header1'>Add friends!</h1>
            <table className='usersTable'>
                <thead>
                    <th> </th>
                    <th> Profile Picture </th>
                    <th> Name </th>
                </thead>
                <tbody>
                    {
                        users.map(user=>
                            <tr key={user.id}>
                                <td><button className="addFriend">+Add Friend</button></td>
                                <td><img src={getProfilePicture(user)} className="imgFriendPics" /></td>
                                <td>{user.firstname} {user.lastname}</td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default FriendsPage;