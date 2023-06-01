import './App.scss';
import PostList from "./components/PostList/PostList";
import CreatePostForm from "./components/Create-post-form/CreatePostForm";
import {useState} from "react";
import {Box, Button, Modal, Typography} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    background: 'lightblue',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function App() {
    const [posts, setPosts] = useState([
        {
            id: 'sghdt',
            title: 'Title',
            description: "lorem10 wfswf  jwwtsg",
            high: true
        }
    ])

    const [filterPost, setFilterPost] = useState([])

    const [idToDeletePost,setIdToDeletePost] = useState()

    const highCount = posts.filter((post)=>post.high)

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const deletePost = (id) => {

            setPosts(posts.filter((post) => post.id !== id))
            setFilterPost(filterPost.filter((post) => post.id !== id))

    }




    return (
        <>
            <div className="App">
                <div>
                        <PostList
                            posts={posts}
                            setPosts={setPosts}
                            handleOpen={handleOpen}
                            setIdToDeletePost={setIdToDeletePost}
                            filterPost={filterPost}
                            setFilterPost={setFilterPost}
                        />
                </div>

                <CreatePostForm
                    posts={posts}
                    setPosts={setPosts}
                />
            </div>
            <p className="count">Count - {posts.length}</p>
            <p className="countHigh"> High - {highCount.length}</p>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-description" sx={{ mt: 2,mb: 2 }}>
                        Are you sure want to delete this post?
                    </Typography>
                    <Button onClick={()=>{
                            deletePost(idToDeletePost);
                            handleClose()
                        }
                    } color="error" variant="contained">Delete</Button>
                </Box>
            </Modal>
        </>
  );
}

export default App;
