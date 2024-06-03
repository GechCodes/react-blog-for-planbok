import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import BlogCards from './BlogCards';
import CategorySelection from './CategorySelection';
import Pagination from './Pagination';
import SideBar from './SideBar';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentpage] = useState(1);
  const pageSize = 12 // blogs per page
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:3000/blogs?page=${currentPage}&limit=${pageSize}`;

      // filter by category
      if (selectedCategory){
        url +=`&category=${selectedCategory}`
      }

      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    }
    fetchBlogs();

  }, [currentPage, pageSize, selectedCategory])

  const handlePageChange = (pageNumber) =>{
    setCurrentpage(pageNumber);
  }

  const handleCategoryChange = (category) =>{
    setSelectedCategory(category);
    setCurrentpage(1);
    setActiveCategory(category);
  }
  return (
    <div>
      {/* category section */}
      <div>
        <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory}
        activeCategory={activeCategory} />
      </div>

      {/* blogcards section */}
      <div className="flex flex-col lg:flex-row gap-12" >
        {/* blogCard components */}
        <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize}/>

        {/* sidebar components*/}
        <div>
          <SideBar/>

        </div>
      </div>

      {/* pagination section */}
      <div>
        <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize}/>
      </div>
    </div>
  )
}

export default BlogPage