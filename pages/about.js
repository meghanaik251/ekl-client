import { useEffect, useState } from "react"


const url = "https://www.eklakshya.com/api/pages/about?t=1666866849145"

export default function about () {
    const [aboutdata, setAboutdata] = useState(undefined);

    useEffect(()=>{
        fetch(url).then((data) => {
            return data.json()
        }).then( (data) => {
            setAboutdata(data);
        } )
    }, [])
    return (
        <div className = "about_container">
            <h2>{aboutdata?.title}</h2>
            <p  dangerouslySetInnerHTML={{ __html: aboutdata?.content[0] }}></p>
        </div>
    )
}