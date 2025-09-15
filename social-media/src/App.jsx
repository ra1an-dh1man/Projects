import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/header";
import Footer from "./component/Footer";
import Sidebar from "./component/SiderBar";
import CreatePost from "./component/CreatePost";
import PostList from "./component/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />

          {selectedTab === "Home" ? (
            <center>
              <PostList />
            </center>
          ) : (
            <CreatePost />
          )}

          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
