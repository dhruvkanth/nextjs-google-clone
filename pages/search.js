import Head from "next/head";
import { SearchHeader } from "../components/SearchHeader";
import { useRouter } from "next/router";
import { SearchResults } from "../components/SearchResults";
import { ImageResults } from "../components/ImageResults";

const Search = ({ results }) => {
    console.log(results);
    const router = useRouter();

    return (
        <div>
            <Head>
                <title>{router.query.term} - Search page</title>
            </Head>

            <div className="min-h-screen bg-[#202124] text-[#e8eaed]">
                <SearchHeader />
                {router.query.searchType === "image" ? (
                    <ImageResults results={results} />
                ) : (
                    <SearchResults results={results} />
                )}
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const startIndex = context.query.start || "1";
    const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${context.query.searchType && "&searchType=image"}&start=${startIndex}`)
    const data = await res.json()
    return {
        props: {
            results: data,
        },
    };
}

export default Search;