import { Key } from "react";
import Card from "./card";

type Users ={
    id: number;
    name: string;
    avatar: string;
}

export default async function Blog(){
    const url = 'https://661f946f16358961cd94c6d6.mockapi.io/api/v1/Users'
    const newRes = await fetch(url)
    const varRes = await newRes.json();


    return(
        <>
        <h1>
            blog headding
        </h1>
        <div>
            {
                varRes.map((user:Users)=>(
                    <Card key={user.id} user={user}  />
                ))
            }
        </div>
        </>
    );
}