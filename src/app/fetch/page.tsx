import React, { Suspense} from 'react'
import Fecthing from './fetcting'
import Loading from '../loading'

export default function Fetch() {
  return (
    <div>
        <h1 className='text-center pt-10 pb-10'>
            Fetching Page Heading
        </h1>
        <Suspense fallback={<Loading />}>
            <Fecthing />
        </Suspense>
    </div>
  )
}
{
    
}
