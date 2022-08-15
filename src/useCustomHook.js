import React, { useEffect, useState } from 'react'

const useCustomHook = (firstName,lastName) => {
    const [joke,setJoke] = useState('');
    useEffect(()=>{
        const fetchJoke = async ()=>{
            const url = `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`;
            await fetch(url).then((res)=> res.json()).then((data)=> setJoke(data.value.joke));
        };
        fetchJoke();
    },[firstName,lastName]);
  return joke;
}
export default useCustomHook