import React from 'react'
import { Link } from 'react-router-dom'

const Nostory = () => {
  return (
    <div className='my-5 text-center'>OPPPSSS! LOOKS LIKE THEIR IS NO STORY YET. WRITE A STORY NOW <br />
        <Link to="/create"><button className='btn btn-lg btn-danger mt-5'>Write a story here</button></Link>
    </div>
  )
}

export default Nostory