import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import PropertyDetails from "./pages/PropertyDetails";
import DashBoard from "../src/pages/AdminPages/Dashboard.jsx";
import AddRooms from "../src/pages/AdminPages/AddRooms";
import UserLayout from "./Layout/UserLayout.jsx";
import AdminLayout from "./Layout/AdminLayout.jsx";
import Users from "./pages/AdminPages/Users.jsx";
import ViewRooms from "./pages/AdminPages/ViewRooms.jsx";
import PrivateComponent from "./pages/PrivateComponent.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <UserLayout>
              <Home />
            </UserLayout>
          }
        />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route
          path="/signin"
          element={
            <UserLayout>
              <Signin />
            </UserLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <UserLayout>
              <SignUp />
            </UserLayout>
          }
        />
        <Route
          path="/about"
          element={
            <UserLayout>
              <About />
            </UserLayout>
          }
        />
        <Route element={<PrivateComponent />}>
          <Route
            path="/profile"
            element={
              <UserLayout>
                <Profile />
              </UserLayout>
            }
          />
          <Route
            path="/property/:id"
            element={
              <UserLayout>
                <PropertyDetails />
              </UserLayout>
            }
          />
        </Route>

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <AdminLayout>
              <DashBoard />
            </AdminLayout>
          }
        />
        <Route
          path="/add-rooms"
          element={
            <AdminLayout>
              <AddRooms />
            </AdminLayout>
          }
        />
        <Route
          path="/view-rooms"
          element={
            <AdminLayout>
              <ViewRooms />
            </AdminLayout>
          }
        />
        <Route
          path="/users"
          element={
            <AdminLayout>
              <Users />
            </AdminLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
