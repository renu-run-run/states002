
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const MarkDown = () =>{

    const markdown = `Just a link: https://reactjs.com.`
    const [markDown, setMarkDown] = useState("");

    return(
        <div>
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
        <ReactMarkdown># Hello, *world*! This is a MarkDown Editor.</ReactMarkdown>
        <textarea style={{width:"400px" , height:"500px", float:"left", marginLeft:"10%"}} type="text" onChange={e => setMarkDown(e.target.value)}/>
        <ReactMarkdown style={{float:"right"}} remarkPlugins={[remarkGfm]}>{markDown}</ReactMarkdown>
        </div>
        
    )
}
export default MarkDown