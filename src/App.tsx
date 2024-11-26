import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import UserLayout from "./layouts/UserLayout";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import Events from "./pages/Events";

function App() {
  return (
    <div className="w-[100%] min-h-screen font-poppins">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="events" element={<Events />} />
          <Route index element={<LandingPage />} />
          <Route path="user" element={<UserLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="messages" element={<Messages />} />
            <Route path="notifications" element={<Notifications />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
