import "./App.css";
import Profile from "./components/Profile";
import Counter from "./components/Counter";

function AppProfile() {
  return (
    <>
      <Profile
        image="https://images.unsplash.com/photo-1710173126005-bc5cb5001b9e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Some picture"
        title="Peaceful"
        isNew="true"
      />
      <Profile
        image="https://plus.unsplash.com/premium_photo-1710361778821-93aeb8787ccd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="woman"
        title="working"
      />
    </>
  );
}

export default AppProfile;
