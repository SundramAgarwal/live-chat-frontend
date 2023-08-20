import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// yeh neeche vali cheej hum kar rahe hain do kam karne ke baad vite.config vala kam
// or jsconfig.json vala kam karne ke baad isse yeh hoga ki
// hume full path ni dena padega jo ki aisa kuch hota hai
// "../../../../" aisa karke jo hota seedha @ lagao or bas
import Chat from "@/components/chat";
import Login from "@/components/login";

function App() {
  const [user, setUser] = useState(null);
  const [secret, setSecret] = useState(null);
  const isAuth = Boolean(user) && Boolean(secret);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              isAuth ? (
                <Navigate to="/chat" />
              ) : (
                <Login setUser={setUser} setSecret={setSecret} />
              )
            }
          />
          <Route
            path="/chat"
            element={
              isAuth ? (
                <Chat user={user} secret={secret} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
