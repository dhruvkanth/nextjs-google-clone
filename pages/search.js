import Head from "next/head";
import {SearchHeader} from "../components/SearchHeader";
import {useRouter} from "next/router";
import Response from "../Response";

const search = ({results}) => {
    console.log(results);
    const router = useRouter();

    return (
        <div>
            <Head>
                <title>{router.query.term} - Search page</title>
            </Head>

            <SearchHeader/>
        </div>
    )
}

export async function getServerSideProps(context) {
    const startIndex = context.query.start || "1";
    const mockData = true;
    const data = mockData
        ? Response
        : await fetch(
            `https://www.googleapis.com/customsearch/v1?key=${
                process.env.API_KEY
            }&cx=${
                process.env.CONTEXT_KEY
            }&q=${
                context.query.term
            }${context.query.searchType && "&searchType=image"}&start=${startIndex}`
        ).then((response) => response.json());
    return {
        props: {
            results: data,
        },
    };
}

export default search;
