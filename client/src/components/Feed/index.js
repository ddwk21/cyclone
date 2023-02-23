import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import feedGen from '../../utils/feedMe'
import Article from '../Article.js'

// const text = feedGen()
let scrollable = true;






const Feed = () => {
    const [content, setContent] = useState([])
    console.log('content:', content)

    const location = useLocation();
    const navigate = useNavigate();


    function handleScroll() {

    
        if(scrollable)
        {
            let pageEnd = document.body.offsetHeight - 50;
            let breakpoint = window.innerHeight + window.pageYOffset;
        
            if (breakpoint >= pageEnd) {
            handleScrollData();
            // console.log("loadnew");
            scrollable = false
            //rendering logic here
            const timeoutId = setTimeout(()=>{
                scrollable=true
                clearTimeout(timeoutId)
            
            }, 800)
            }
      }
    }

    async function handleScrollData() {
        const feedPromise = await feedGen()
        

        setContent((prev) => [...prev, feedPromise])
        console.log('newcontent=', content)

        // feedPromise.then((articleData) => {
        //     console.log('articleData=', articleData)
            
        //     setContent([...content, articleData])
    
        // })
    }



    useEffect(() => {



        window.addEventListener("scroll", handleScroll);
        return() => window.removeEventListener('scroll', handleScroll)
 
    }, [])


    return (
        <div>
            
            {
                content.map((articleData) =>{

                    return(<Article data={articleData}/>)
                })   
            }
        </div>
    );
};

export default Feed;