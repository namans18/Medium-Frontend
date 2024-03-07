import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import BlogId from "./pages/BlogId";
import Publish from "./pages/Publish";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route></Route>
          <Route></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/:id" element={<BlogId/>}/>
          <Route path="/publish" element={<Publish/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
