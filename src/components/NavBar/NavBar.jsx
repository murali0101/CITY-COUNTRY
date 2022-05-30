import { Button } from "../Button/Button";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className="nav-bar">
      <Button props={{ name: "Home", link: "/" }} />
      <Button props={{ name: "Add Country", link: "/add-country" }} />
      <Button props={{ name: "Add City", link: "/add-city" }} />
    </div>
  );
};
