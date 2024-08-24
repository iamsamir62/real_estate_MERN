import React from "react";
import { Navigate } from "react-router-dom";

const AdminLayout = ({ children }) => {
    const user = localStorage.getItem('user');
    let parsedUser = null;

    if (user) {
        parsedUser = JSON.parse(user); // Parse the user data
    }

    if (parsedUser && parsedUser.role === 'user') {
        return <Navigate to="/" />; // Redirect to home if role is 'user'
    }

    return <>{children}</>; // Render children if user is not 'user'
}

export default AdminLayout;
