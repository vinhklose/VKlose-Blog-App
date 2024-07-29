import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/pages/Home";
import AllBlogs from "./components/pages/AllBlogs";
import Blog from "./components/pages/Blog";
import BlogInfo from "./components/pages/BlogInfo";
import NoPage from "./components/pages/NoPage";
import AdminLogin from "./components/pages/admin/AdminLogin";
// import CreateBlog from "./components/pages/admin/createBlog";
import Dashboard from "./components/pages/admin/Dashboard";

export default function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element ={<Blog />} />
          <Route path="/allblogs" element={<AllBlogs />} />
          <Route path="/bloginfo/:id" element={<BlogInfo />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}
