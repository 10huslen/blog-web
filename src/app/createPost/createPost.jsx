import { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
const check = (() => {
const [title, setTitle] = useState("")
const [description, setDescription] = useState("")
const [titleNull, setTitleNull] = useState(false)
const [descriptionNull, setDescriptionNull] = useState(false)

if (inputValue === "") {

}
})

const router = useRouter()
return (
    <div>
        <button onClick={() => router.push('/')} className="homebtn"></button>
    <div className="name">
   Title <input className="title"></input>
   Description <input className="description"></input>
   <button className="addBtn">Add</button>
    </div>
    </div>
)
}

export default Page;