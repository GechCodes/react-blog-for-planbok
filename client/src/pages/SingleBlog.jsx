import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { FaClock, FaUser } from "react-icons/fa";
import SideBar from '../components/SideBar';


const SingleBlog = () => {
  const data = useLoaderData();
  console.log("data:", data)
  const {title, image, category, author, published_date, reading_time, content} = data[0];

  console.log("image:", image)

  return (
    <div>
      <div className="py-40 bg-emerald-900 px-4 text-center" >
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5 text-green-100" >Blog Post</h2>
      </div>

      {/* blog details */}
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img src={image} alt="" className="w-full mx-auto rounded" />
          </div>
          <h2 className="text-3xl mt-8 font-bold mb-4 text-green-600 cursor-pointer" >{title}</h2>
          <p className="mb-3 text-gray-600" ><FaUser className="inline-flex items-center mr-2" />{author} | {published_date}</p>
          <p className="mb-3 text-gray-600" ><FaClock className="inline-flex items-center mr-2" />{reading_time}</p>
          <p className="text-sm text-gray-500 mb-6" >{content}</p>
          <div className="text-sm text-gray-500 mb-6">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita beatae asperiores ea fugiat earum, molestias commodi libero maxime, voluptatem corrupti sed! Maxime beatae doloribus exercitationem impedit! Voluptate explicabo voluptates temporibus dolor architecto illo? Non, voluptate eaque obcaecati amet doloremque, minima numquam recusandae possimus consequatur esse magni doloribus iste accusantium quos molestiae ullam cupiditate tenetur? Reprehenderit voluptas, quasi nostrum temporibus aspernatur amet, sapiente doloremque velit ipsam quis facilis quisquam autem culpa ullam debitis facere quibusdam qui illum. Laboriosam labore omnis iure laudantium. Dolorem incidunt quo quis deserunt eveniet a id libero alias nisi. Eos fugiat rerum error facere numquam. Laborum, aliquid.</p>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eaque dolores voluptas veniam delectus at ut. Vitae excepturi aliquid saepe molestias soluta reiciendis eum eveniet temporibus quibusdam nesciunt vero possimus atque sit, pariatur, quia porro. Cumque, amet numquam? Beatae debitis iste minima alias corporis amet dolor, vitae vel accusantium, nam cupiditate ducimus sit eius sint nulla magni consequatur aut quia autem tenetur provident quas inventore aliquam fugit! Nesciunt perspiciatis consequatur amet natus libero nostrum corrupti assumenda incidunt reprehenderit nobis sit, officia cumque deleniti officiis quidem necessitatibus temporibus. Officia consequatur rem cum facere ex voluptatem totam, asperiores incidunt temporibus a accusantium.</p>

          </div>


        </div>
        <div className="lg:w-3/4 mx-auto" >
          <SideBar/>
        </div>

      </div>
    </div>
  )
}

export default SingleBlog