import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const follower = useLoaderData()
    //const [follower, setFollower] = useState(0)

    // useEffect(() => {
    //     fetch('https://api.github.com/users/asifrazaansari')
    //     .then(resposne => resposne.json())
    //     .then(data => {
    //         console.log(data)
    //         setFollower(data)
    //     })
    // }, [])

    return (
        <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">
            Github followers: {follower.followers}
        </div>
    )
}

export default Github


export const githubInfoLoader = async () =>{
    const resposne = await fetch('https://api.github.com/users/asifrazaansari')
    return resposne.json()
}