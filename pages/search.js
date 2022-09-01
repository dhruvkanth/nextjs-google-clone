import Head from "next/head";
import {SearchHeader} from "../components/SearchHeader";
import {useRouter} from "next/router";

const search = () => {
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

export default search;
