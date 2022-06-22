import { useCallback, useEffect, useState } from "react"
import { getDatos } from "./getDatos"
import { getPosts } from "./getPosts"

/* const initialUser = {
    name: 'Julian',
    mail: 'Julian@mail.com'
}
const initialPost = [
 {
    id: 1,
    title: 'MyFirstPost',
    content: 'this is a post of practice of useEfecct'
},
{
    id: 2,
    title: 'Second',
    content: 'this is a second post'
},
] */

export const Users = () => {

    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);

    const updateUser = () => {
        getDatos()
            .then((newUser) => {
                setUser(newUser)
            })
    }

    const updatePosts = useCallback(() => {
        getPosts(user.id)
            .then((newPosts) => {
                setPosts(newPosts)
            })
    },[user.id])

    // Use Effect para que cargue cuando inicie la pag
    useEffect(() => {
        updateUser()
    }, [])

    // Use effect 
    useEffect(() => {
        // Si el value isn't an object
        if(user?.id){
            updatePosts()
        }
    }, [user])
    // Cada que haya un cambio en el estado de user

    return (
        <>  
            <button onClick={updateUser}>Another user</button>
            <h2>{user.name}</h2>
            <h3>{user.mail}</h3>
            <h2>Posts - user: {user.id}</h2>
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>
                            {post.title}
                            {post.content}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
