"use client"
import {usePathname} from "next/navigation"
import { useEffect, useState } from "react"
import CreatePost from "../createPost/createPost"

const Page = () => {
    const [singleCard, setSingleCard] = useState(null);
    const info = usePathname();
    useEffect(() => {
        const dataOfCard = async () => {
            const response = await fetch (`https://dev.to/api/articles${info}`);
            const pharsing = await response.json();
            setSingleCard(pharsing);
            console.log(pharsing)
        }
        dataOfCard();
    }, [])
    return ( 
        <div>{CreatePost()}</div>
    )
}

export default Page;