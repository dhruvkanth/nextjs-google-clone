import Parser from "html-react-parser"
import { PaginationButtons } from "./PaginationButtons";

export const SearchResults = ({ results }) => {
    return (
        <div className="w-full bg-[#202124] mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
            <p className="text-[#5c6063] text-sm mb-5">About {results.searchInformation.formattedTotalResults} results ({results.searchInformation.formattedSearchTime} seconds)</p>
            {results.items?.map((result) => (
                <div key={result.link} className="max-w-xl mb-8">
                    <div className="group">
                        <a className="text-sm truncate text-[#bbbfc3]" href={result.link}>{result.formattedUrl}</a>
                        <a className="group-hover:underline decoration-white" href={result.link}>
                            <h2 className="truncate text-xl font-medium text-[#8ab5f7]">{result.title}</h2>
                        </a>
                    </div>
                    <p className="text-[#e8eaed]">{Parser(result.htmlSnippet)}</p>
                </div>
            ))}
            <PaginationButtons />
        </div>
    )
}