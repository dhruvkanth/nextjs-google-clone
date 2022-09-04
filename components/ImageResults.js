import {PaginationButtons} from "./PaginationButtons";

export const ImageResults = ({results}) => {
    return (
        <div className="mt-0.1 bg-[#202124]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
                {results.items?.map((result) => (
                    <div key={result.link} className="mb-8">
                        <div className="group">
                            <a href={result.image.contextLink}>
                                <picture>
                                    <img
                                        className="group-hover:shadow-xl w-full h-60 object-contain"
                                        src={result.link}
                                        alt={result.title}
                                    />
                                </picture>
                            </a>
                            <a className="group-hover:underline decoration-white" href={result.image.contextLink}>
                                <h2 className="truncate text-xl text-[#e8eaed]">{result.title}</h2>
                            </a>
                            <a className="group-hover:underline decoration-white" href={result.image.contextLink}>
                                <p className="text-[#aaadb2]">{result.displayLink}</p>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="ml-16">
                <PaginationButtons/>
            </div>
        </div>
    );
}