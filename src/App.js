import Register from "./pages/Register";
import RegisterMail from "./pages/RegisterMail";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LoginMail from "./pages/LoginMail";
import DetailGame from "./component/Detail";
import ProtectedRoute from "./component/ProtectedRoute";
import ByCategoryList from "./component/ByCategory";
import { auth } from "./auth/firebase";
import { useEffect, useState } from "react";

const App = () => {
  return (
    <div className="App min-w-[360px]">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/registermail" element={<RegisterMail />}></Route>
        <Route path="/loginmail" element={<LoginMail />}></Route>
        <Route
          path="/detailgame/:id"
          element={
            <ProtectedRoute>
              <DetailGame />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="*"
          element={
            <main className="text-white flex justify-center items-center h-screen ">
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
