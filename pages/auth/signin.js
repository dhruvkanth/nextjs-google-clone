import React from "react";
import {getProviders, signIn} from "next-auth/react";

const signin = ({providers}) => {
    return (
        <>
            <div className="mt-20">
                {Object.values(providers).map((provider) => (
                    <div key={provider.name} className="flex flex-col items-center pt-10">
                        <picture>
                            <img
                                className="w-52 object-cover"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                                alt="google-logo"
                            />
                        </picture>
                        <button className="bg-blue-500 rounded-lg text-white p-3 hover:bg-blue-600 mt-5" onClick={() => signIn(provider.id, {callbackUrl: "/"})}>
                            Sign in with {provider.name}
                        </button>
                    </div>
                ))}
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: {providers},
    };
}

export default signin;