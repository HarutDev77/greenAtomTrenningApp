import {useState} from "react";

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
                <input value={value} onChange={(e)=>setValue(e.target.value)}/>
                <textarea value={description} onChange={(e)=>setDescription(e.target.value)}/>
                <label style={{marginBottom: "15px"}}>High <input checked={high} onChange={(e)=>setHigh(e.target.checked)} type='checkbox'/></label>
                <button>Add</button>
            </form>


    )
}

export default CreatePostForm;