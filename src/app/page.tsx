
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div>
      <h1 >
        Home
      </h1>
      <div className='flex-col flex'>
      <Link href='/fetch'>Fetch</Link>
      <Link href='/blog'>blog page</Link>
      </div>
    </div>
  );
}