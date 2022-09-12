import { useRouter } from "next/router"
import { SearchOption } from "./SearchOption";
import { PhotographIcon, SearchIcon } from "@heroicons/react/outline";

export const SearchOptions = () => {
    const router = useRouter();
    return (
        <div
            className="flex space-x-8 select-none w-full justify-center text-sm text-[#aaadb2] lg:pl-52 lg:justify-start border-b decoration-[#202124]">
            <SearchOption title="All" Icon={SearchIcon} selected={router.query.searchType === "" || !router.query.searchType} />
            <SearchOption title="Images" Icon={PhotographIcon} selected={router.query.searchType === "image"} />
        </div>
    );
}