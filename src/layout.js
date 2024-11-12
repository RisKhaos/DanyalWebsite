import Topbar from "./components/Topbar";
import './App.css'; // Import your main CSS
import { Outlet } from "react-router-dom";



const Layout = () => {
  
  return (
      <>
        <Topbar />        
        <main className="content" >
            <Outlet />
        </main>
        <footer><p>© 2024 Danyal Freitas | Created in the React JavaSctipt</p>
        <p>Look at some of my projects on <a href="https://github.com/RisKhaos"><span>GitHub</span></a></p></footer>
      </>
    );
  };
  
  export default Layout;
  