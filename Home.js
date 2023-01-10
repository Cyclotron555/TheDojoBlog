import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party", body: "lorem ipsum...", author: "yoshy", id: 1 },
    { title: "My dev top tips", body: "lorem ipsum...", author: "mario", id: 1 }
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} />
    </div>
  );
};
export default Home;
