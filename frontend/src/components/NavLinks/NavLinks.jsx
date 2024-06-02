import NavLink from "../NavLink/NavLink";
import NavBtn from "../NavBtn/NavBtn";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

const NavLinks = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/kaizen-portfolio/");
      console.log("Logout successful!");
    } catch (err) {
      console.error("Error signing out:", err);
    }
  };

  return (
    <ul className="flex text-xl gap-3 justify-center items-center sticky">
      <NavLink text="Home" toLink={"/kaizen-portfolio/home"} />
      <NavLink text="Members" toLink="/kaizen-portfolio/members" />
      <NavLink text="Projects" toLink="/kaizen-portfolio/projects" />
      <NavLink text="Join Us" toLink={"/kaizen-portfolio/join-us"} />
      <NavBtn text="Log Out" handleFunc={handleLogout} />
    </ul>
  );
};

export default NavLinks;
