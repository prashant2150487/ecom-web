

import Nav from "@/components/Nav";
import { useSession, signIn,} from "next-auth/react"
export default function Layout({children}) {
    const { data: session } = useSession()
    if (!session) {
        return (
            <div className="bg-blue-900 w-screen h-screen flex items-center justify-center">
                <div className="w-full text-center">
                    <button className="bg-white p-2 px-4 rounded-lg text-black tracking-tight font-bold " onClick={() => signIn('google')}> Login with Google</button>
                </div>
            </div>
        )
    }
    return (
        <div className="bg-blue-900 min-h-screen flex">
            <Nav />
            <h1 className="bg-white text-black mt-2 mr-2 mb-2 rounded-md p-2 flex-grow">{children}</h1>
        </div>
    );
}
