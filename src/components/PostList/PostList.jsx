import {useState} from "react";
import AllPosts from "../AllPosts/AllPosts";
import FilteredPosts from "../FiltredPosts/FiltredPosts";

function PostList({posts, setPosts}) {

    const [filterPost, setFilterPost] = useState([])
    const [checked, setChecked] = useState(false)

    const deletePost = (id) => {
        setPosts(posts.filter((post) => post.id !== id))
    }
    const handleChange = (e) => {
        if (e.target.checked) {
            const highPosts = posts.filter((post) => post.high);
            setFilterPost(highPosts);
        }
        setChecked(e.target.checked);
    }

    return (
        <>
            <label style={{marginLeft: "20px",fontSize: '25px',color: "cadetblue"}}>
                High
                <input checked={checked} onChange={(e) => handleChange(e)} type="checkbox"/>
            </label>
            <div className='contDIv'>
                {
                    checked ?
                            <FilteredPosts deletePost={deletePost} filterPost={filterPost}/>
                            :
                            <AllPosts deletePost={deletePost} posts={posts}/>
                }
            </div>
        </>

    )
}

export default PostList;

