function Post({post,deletePost}) {
    return (
        <div >
            <div>
                {
                    post.high
                        ?
                        <p className="circle"></p>
                        :
                        <div></div>
                }
                <h1>{post.title}</h1>
                <p className='deletePost' onClick={()=>deletePost(post.id)}>X</p>
            </div>
            <p>
                {post.description}
            </p>
        </div>
    )
}

export default Post;