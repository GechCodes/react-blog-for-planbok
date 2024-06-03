import React from 'react'
import BlogPage from '../components/BlogPage'

const Blogs = () => {
  return (
    <div>
      <div className="py-40 bg-emerald-900 px-4 text-center" >
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5 text-green-100" >Updates & Insights</h2>
      </div>

      {/* all blogs container */}
      <div className="max-w-7xl mx-auto">
        <BlogPage/>
        
  

      </div>
    </div>
  )
}

export default Blogs