import { useEffect, useState } from "react";
import { API } from "../../utils/constants";

const url = `${API}/posts`

const Home = () => {
    // const [inputValue, setInputValue] = useState('');

    const [posts, setPosts] = useState([]);

    const gettingPosts = async()=> {
        try {
        const response = await fetch(url);
        const data = await response.json();

        setPosts(data);
        } catch(e) {
            console.log(e)
        }

    }

    useEffect(()=> {
        gettingPosts()
    }, [])

    // const handleInputChange =(e) => {
    //     console.log('e', e.target.value)
    //     setInputValue( e.target.value)
    // }

  return (
    <div>
        {/* <input value={inputValue} onChange={handleInputChange}  />

        <h3>Text: {inputValue}</h3> */}


        {posts.map(({id, title, body}) => (
            <div key={id}>
                <h4>{title}</h4>
                <p>{body}</p>
            </div>
        ))}
    </div>
  )
}

export default Home