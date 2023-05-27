import Post from "../Post/Post";
import EmptyState from "../UI/EmptyState";

function AllPosts({posts, deletePost}) {
    return (
        <>
            {
                posts.length ? posts.map((post) => {
                        return (
                            <Post
                                key={post.id}
                                post={post}
                                deletePost={deletePost}
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