



async function GetBlog(one: any) {
    const res = await fetch(`https://661f946f16358961cd94c6d6.mockapi.io/api/v1/Users/${one.one}`);
    console.log(res.status);


    if(!res){
        throw new Error("No Data Found");
    }
    return res.json();
}

export default  async function BlogDetails({params}:{params: string | number}) {
    const blogdet = await GetBlog(params);
    console.log(blogdet);

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
        <img 
         src={blogdet.avatar}
         >
        </img>
    </div>
  )
}
