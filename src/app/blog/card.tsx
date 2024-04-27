import React from 'react';

interface User{
  id: number;
  name: string;
  avatar: string;

}

interface CardProps{
  user: User;

}

export default function card({user}: CardProps) {
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
      </div>
    </div>
  )
}
