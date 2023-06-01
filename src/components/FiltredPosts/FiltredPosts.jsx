import Post from "../Post/Post";
import EmptyState from "../UI/EmptyState";

function FilteredPosts({filterPost, deletePost,setIdToDeletePost,handleOpen}) {
    return (
        <>
            {
                filterPost.length ?
                    filterPost.map((post) => {
                        return (
                            <Post
                                key={post.id}
                                post={post}
                                deletePost={deletePost}
                                setIdToDeletePost={setIdToDeletePost}
                                handleOpen={handleOpen}
                            />
                        )
                    })
                    :
                    <EmptyState/>
            }
        </>
    )
}

export default FilteredPosts;