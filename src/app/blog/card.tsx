'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
useRouter

interface User{
  id: number;
  name: string;
  avatar: string;

}

interface CardProps{
  user: User;

}

export default function Card({user}: CardProps) {
  const router = useRouter()
  const {id, name, avatar} = user;

 
  
  return (
    <div className='p-4 m-4' >
      <div className='border border-x p-4' >
          <h2>ID: {id}</h2>
          <img src={avatar} width={100} height={100}>
          </img>
          <h2>
            Name:{name}
          </h2>
          <button className='p-1 m-1 bg-red-500' onClick={()=> router.push(`blog/${id}`)} > Click Here</button>
      </div>
      
    </div>
  )
}
