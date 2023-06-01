import Post from "../Post/Post";
import EmptyState from "../UI/EmptyState";

function AllPosts({posts, deletePost,handleOpen,setIdToDeletePost}) {
    return (
        <>
            {
                posts.length ? posts.map((post) => {
                        return (
                            <Post
                                key={post.id}
                                post={post}
                                deletePost={deletePost}
                                handleOpen={handleOpen}
                                setIdToDeletePost={setIdToDeletePost}
                            />
                        )
                    })
                    :
                    <EmptyState/>
            }
        </>
    )
}

export default AllPosts;