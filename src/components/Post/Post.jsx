import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

function Post({post,handleOpen,setIdToDeletePost}) {

    const func = ()=>{
        handleOpen();
        setIdToDeletePost(post.id);
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardContent>
                    <div className="cardFirstCont">
                             {
                                  post.high
                                      ?
                        <p className="circle"></p>
                                      :
                        <div></div>
                             }
                        <Typography gutterBottom variant="h5" component="div">
                            {post.title}
                        </Typography>
                               <p className='deletePost' onClick={func}>X</p>
                             </div>

                    <Typography variant="body2" color="text.secondary">
                        {post.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Post;