import {useState} from "react";

function Test() {

    const [value, setValue] = useState('')
    const [postList, setPostList] = useState([])

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setPostList([...postList,{name: value, id: Math.random()}])
        setValue('')
    }

    const handleClick = (id) =>{
        setPostList(postList.filter((post)=>post.id !== id))
    }

    const ClearAll = () =>{
        setPostList([])
    }
console.log(postList)
    return (
        <>
            <form onSubmit={onSubmit}>
                <input value={value} onChange={handleChange} type="text"/>
                <button>Add</button>
                <button type={'button'} onClick={ClearAll}>Clear All</button>
            </form>

            <div>
                {postList.map((list) => {
                    return (
                        <div  key={list.id}>
                            <p>{list.name}<span onClick={()=>handleClick(list.id)}>    X</span></p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
    export default Test;