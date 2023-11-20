'use client'
import { useRouter } from "next/navigation";

export default function NotFound(props) {
    let router = useRouter();
    return(<section className="flex flex-col"><span>Oh, Its seems unable to find this page!</span>
    
    <button className="bg-white text-black" onClick={() => router.push('/')} type="button">Redirect to Home Page</button>

    </section>)
}