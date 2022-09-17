import React, { useEffect, useState } from 'react'
import axios from "axios"

const SearchFilter = () => {

const [loading, setLoading]  =useState(false)
const [posts, setPosts] = useState([]);
const [searchTitle, setSearchTitle] = useState('');

useEffect(() => {

const loadPosts = async () => {
    setLoading(true);
    const res = await axios.get(
        "https://jsonplaceholder.typicode.com/albums"
    );
    setPosts(res.data);
    setLoading(false)

}
loadPosts();
},[])

  return (
    <div className=''>


<div className="wrapper">
  <div className="search_box">
  <input  type="text" placeholder='Search gym name here...' onChange={(e) =>setSearchTitle(e.target.value)}/>
      <i className="fas fa-search"></i>
  </div>
</div>


{loading ? (

<h4>Loading...</h4>
) : (
    posts
    .filter((value) =>{
        if(searchTitle === ''){
            return value
        } else if (
            value.title.toLowerCase().includes(searchTitle.toLowerCase())
        ){
            return value
        }
    })
     .map((item) => <h5 style={{color:'red'}} key={item.id}>{item.title}</h5>)
)}

    </div>
  )
}

export default SearchFilter