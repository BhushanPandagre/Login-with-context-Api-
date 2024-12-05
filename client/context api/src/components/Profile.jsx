
import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="w-full text-center bg-gray-50 p-6 rounded-md shadow-md">
      {user ? (
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome</h2>
          <p className="text-lg text-gray-600">
            Hello,{" "}
            <span className="font-medium text-gray-700">{user.username}</span>!
          </p>
        </div>
      ) : (
        <div className="text-lg text-gray-500">Please Login</div>
      )}
    </div>
  );
};

export default Profile;
