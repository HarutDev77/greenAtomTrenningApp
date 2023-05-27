import Post from "../Post/Post";
import EmptyState from "../UI/EmptyState";

function FilteredPosts({filterPost, deletePost}) {
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