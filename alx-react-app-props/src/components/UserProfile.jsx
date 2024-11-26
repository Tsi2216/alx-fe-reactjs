import React, { useContext } from 'react'; // Import React and useContext
import { UserContext } from './UserContext'; // Adjusted path for same folder

const UserProfile = () => {
    const userData = useContext(UserContext); // Access user data from context

    return (
        <div>
            <h2>{userData.name}</h2> {/* Use userData from context */}
            <p>Age: {userData.age}</p> {/* Ensure age is part of userData */}
            <p>Bio: {userData.bio}</p> {/* Ensure bio is part of userData */}
        </div>
    );
};

export default UserProfile;