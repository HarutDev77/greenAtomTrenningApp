import {useState} from "react";
import {Button, TextField} from "@mui/material";

function CreatePostForm ({posts,setPosts}){

    const [value,setValue] = useState('');
    const [description,setDescription] = useState('');
    const [high,setHigh] = useState(false);

    const createPost = (e)=>{

        e.preventDefault()
        if(value.trim() && description.trim()){
            const newPost = {
                title: value,
                description: description,
                high: high,
                id: Math.random()
            }
            setDescription('');
            setValue('');
            setHigh(false);
            setPosts([...posts,newPost]);
        }



    }

    return(
            <form className='form' onSubmit={createPost}
            >
                <TextField value={value} onChange={(e)=>setValue(e.target.value)} id="standard-basic" label="Enter title" variant="standard" sx={{mb: 2}} />
                <TextField
                    multiline
                    maxRows={4}
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                    id="standard-basic" label="Enter description" variant="standard" sx={{mb: 2}}
                />

                <label style={{marginBottom: "15px"}}>High <input checked={high} onChange={(e)=>setHigh(e.target.checked)} type='checkbox'/></label>
                <Button onClick={createPost} color="success" variant="contained">Add</Button>
            </form>


    )
}

export default CreatePostForm;