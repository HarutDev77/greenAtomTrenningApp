import {useState} from "react";
import classes from "./Blog.module.scss";

function Blog() {

    const [high, setHigh] = useState(false);
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('')
    const [showHighBlogs, setShowHighBlogs] = useState(false)
    const [highBlogs, setHighBlogs] = useState([])
    const [blogs, setBlogs] = useState([
        {
            title: 'title',
            description: "Lorem ipsum dolor sit amet, consectetur elit. Consectetur similique!",
            high: true,
            id: Math.random()
        },
    ])

    const HandleChange = (e) => {
        setValue(e.target.value);
    }

    const changeDescription = (e) => {
        setDescription(e.target.value);
    }

    const toggleCheck = (e) => {
        setHigh(e.target.checked);
    }

    const addBlog = (e) => {
        e.preventDefault()
        if (value.trim() && description.trim()) {
            const newBlog = {
                title: value,
                description: description,
                high: high,
                key: Math.random()
            }
            setBlogs([...blogs, newBlog]);
            setDescription('');
            setValue('');
            setHigh(false)
        }
    }


    const deleteBlog = (key) => {
        setBlogs(blogs.filter(blog => blog.key !== key))
    }

    const changeShowHighBlogs = (e) => {
        if (e.target.checked) {
            const highBlogs = blogs.filter((post) => post.high);
            setHighBlogs(highBlogs);
        }
        setShowHighBlogs(e.target.checked);

    }

    return (
        <>
            <label>High <input checked={showHighBlogs} onClick={changeShowHighBlogs} type="checkbox"/></label>
            <div className={classes.BlogCont}>
                <div>
                    {

                        showHighBlogs
                            ?
                            highBlogs.map((blog) => {
                                return (
                                    <div className={classes.blogsStiles} key={blog.id}>
                                        <div style={{display: "flex", justifyContent: "space-between"}}>
                                            {blog.high ? <div className={classes.highCircle}></div> : <div></div>}
                                            <h1>{blog.title}</h1>
                                            <p style={{cursor: "pointer"}} onClick={() => deleteBlog(blog.key)}>X</p>
                                        </div>
                                        <p>{blog.description}</p>
                                    </div>
                                )
                            })
                            :
                            blogs.map((blog) => {
                                return (
                                    <div className={classes.blogsStiles} key={blog.id}>
                                        <div style={{display: "flex", justifyContent: "space-between"}}>
                                            {blog.high ? <div className={classes.highCircle}></div> : <div></div>}
                                            <h1>{blog.title}</h1>
                                            <p style={{cursor: "pointer"}} onClick={() => deleteBlog(blog.key)}>X</p>
                                        </div>
                                        <p>{blog.description}</p>
                                    </div>
                                )
                            })
                    }

                </div>
                <div>
                    <form>
                        <label><input value={value} onChange={HandleChange} style={{width: "100%"}}/></label>
                        <textarea value={description} onChange={changeDescription}/>
                        <label onChange={toggleCheck}>High <input checked={high} type="checkbox"/></label>
                        <button onClick={addBlog}>Add</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Blog;
