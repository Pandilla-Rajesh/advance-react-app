import React, { useEffect, useState } from 'react'

const AboutReact=()=>{

const [isExpanded, setIsExpanded] = useState(false)
const [todolist, setToDoList] = useState([])

const getToDoList = async ()=>{
    try{

        const result = await fetch('https://jsonplaceholder.typicode.com/todos')
        const res = await result.json()
        console.log(res, 'todo list display')

    }catch(error){
        console.log(error)
    }
}

useEffect(()=>{
    getToDoList()
})

const content = `
   Line 1. Lorem ipsum dolor sit amet.
    Line 2. Consectetur adipiscing elit.
    Line 3. Integer molestie lorem at massa.
    Line 4. Facilisis in pretium nisl aliquet.
    Line 5. Nulla volutpat aliquam velit.
    Line 6. Faucibus porta lacus fringilla vel.
    Line 7. Aenean sit amet erat nunc.
    Line 8. Eget porttitor lorem.
    Line 9. Aenean auctor wisi et urna.
    Line 10. Aliquam erat volutpat.
    Line 11. Duis ac turpis. Integer rutrum ante eu lacus.
    Line 12. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque.
    Line 13. Vivamus eget nibh.
    Line 14. Etiam cursus leo vel metus.
    Line 15. Nulla facilisi. Aenean nec eros.
`
const toggleExpanded=()=>{
    setIsExpanded(!isExpanded)
}



    return(
        <>
            <h3>Welcome to About React js</h3>
            <div className='overflow-hidden transition-all duration-500'
            style={{maxHeight: isExpanded ? '500px' : '100px', whiteSpace:'pre-line'}}>
                 <p>{content}</p>
            </div>
            <button onClick={toggleExpanded} className='btn btn-danger'>
                    {isExpanded ? 'show less' : 'show more'}
                </button>
        </>
    )
}

export default AboutReact