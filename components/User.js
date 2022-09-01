import {signIn, signOut, useSession} from "next-auth/react";

export const User = ({className}) => {
    const {data: session} = useSession();
    if (session) {
        return (
            <picture>
                <img onClick={signOut} src={session.user.image} alt="user-image" referrerPolicy='no-referrer' className={`h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-1 ${className}`}/>
            </picture>
        )
    }
    return (
        <button className={`bg-blue-500 text-white px-6 py-2  font-medium rounded-md hover:brightness-105 hover:shadow-md ${className}`} onClick={signIn}>
            Sign in
        </button>
    )
}