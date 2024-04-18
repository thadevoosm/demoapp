import React from 'react'

export default function BlogDetails() {
  return (
    <div>BlogDetails</div>
  )
}

export async function  generateStataicParams() {
    const UName :UserName = await fetch('https://661f946f16358961cd94c6d6.mockapi.io/api/v1/Users').then((res)=> res.json());

    
}

type UserName = {
    id: number;
    name: string;
    avatar: string;
    createdAt: Date;
}