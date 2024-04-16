// Define the type for the params object
type Params = {
    one: string;
};

// Define the BlogDetails component with type annotation for params
export default function BlogDetails({ params }: { params: Params }) {
    return (
        <>
            <h1>
                Blog details {params.one}
            </h1>
        </>
    );
}

// Define a function to generate static params
function generateStaticParams(): Params {
    // Here you can generate or fetch static params
    return {
        one: 'example',
    };
}

// Example usage:
const staticParams = generateStaticParams();
const blogDetails = <BlogDetails params={staticParams} />;
