import { Navigate } from "react-router-dom";

//PublicRoute is a high order component and receives components as their children
//children prop is like an array of components
const PublicRoutes = ({ isAuthenticated, children }) => {
  //use Navigate hook in component version to go any route in the app
  //if the user is logged send it to /marvel route prevent to return to login sren
  return isAuthenticated ? <Navigate to="/" /> : children;
};

export default PublicRoutes;
