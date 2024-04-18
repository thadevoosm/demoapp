import { resolve } from "path";


type Repository ={
    id : number;
    name: string;
    full_name: string;

};


export default async function Fecthing() {

    await new Promise(resolve => setTimeout(resolve, 3000));
    const res = await fetch('https://api.github.com/repos/vercel/next.js');
    const data: Repository = await res.json();
return(
    <>

    <h1 className="justify-center  text-center pt-11">
         {data.id}
    </h1>

    <h1>
        {data.name}
    </h1>

    <h1>
        {data.full_name}
    </h1>
    </>
);
    
}
