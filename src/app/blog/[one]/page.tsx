


async function GetBlog(one: string | number) {
    const res = await fetch('https://661f946f16358961cd94c6d6.mockapi.io/api/v1/Users/'+one,{
        next :{
            revalidate: 60
        }
    }
    );
    return res.json();
}

export default  function BlogDetails({params}:{{params}: number}) {
    const blogdet = GetBlog(params.one)

  return (
    <div>
        <nav>
            <h2>
                ticket Details
            </h2>
        </nav>
        <h2>
           hehe {blogdet.name}
        </h2>
    </div>
  )
}
