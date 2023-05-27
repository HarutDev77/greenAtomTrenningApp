import './App.scss';
import PostList from "./components/PostList/PostList";
import CreatePostForm from "./components/Create-post-form/CreatePostForm";
import {useState} from "react";


function App() {
    const [posts, setPosts] = useState([
        {
            id: 'sghdt',
            title: 'Title',
            description: "lorem10 wfswf  jwwtsg",
            high: true
        }
    ])
    const highCount = posts.filter((post)=>post.high)


    return (
        <>
            <div className="App">
                <div>
                        <PostList
                            posts={posts}
                            setPosts={setPosts}
                        />
                </div>

                <CreatePostForm
                    posts={posts}
                    setPosts={setPosts}
                />
            </div>
            <p className="count">Count - {posts.length}</p>
            <p className="countHigh"> High - {highCount.length}</p>

        </>
  );
}

export default App;
