export async function generateStaticParams(){

    const posts = await fetch('').then((res) => res.json())  

    return  posts.map((post: { one: any })=>({
        one: post.one,
    }))
}
export default function BlogDetails({params}:{params:{one:string}}){
    return(
        <>
        <h1>
            heading {params.one}
        </h1>
        </>
    )
}