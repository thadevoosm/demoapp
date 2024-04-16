export default function BlogDetails({params}:
    {params:
        {one:string

        }})
        {
    return(
        <>
        <h1>
            Blog details {params.one}
        </h1>
        </>
    );
}