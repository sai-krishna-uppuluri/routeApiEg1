import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {eachBlog} = props

  const {id, title, topic, imageUrl, avatarUrl, author} = eachBlog

  return (
    <Link to={`/blogs/${id}`}>
      <li>
        <div className="blog-items-container">
          <div className="blog-items-inside-container">
            <img src={imageUrl} alt={title} className="blog-image" />
            <div className="blogs-items-header-container">
              <p className="sub-heading">{topic}</p>
              <h1 className="heading">{title}</h1>
              <div className="user-avatar-container">
                <div className="avatar-container">
                  <img src={avatarUrl} alt="avatar" className="avatar-image" />
                </div>
                <p className="sub-heading"> {author}</p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
