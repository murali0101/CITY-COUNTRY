import { useNavigate } from "react-router-dom";
import "./Button.css";

export const Button = ({ props }) => {
  const nav = useNavigate();
  return <button onClick={() => {nav(props.link)}}>{props.name}</button>;
};
