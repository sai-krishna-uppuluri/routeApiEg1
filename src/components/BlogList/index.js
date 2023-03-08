// Write your JS code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import BlogItem from '../BlogItem'
import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {
    blogItemList: [],
    isLoading: true,
  }

  getBlogItem = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const updatedData = data.map(eachData => ({
      id: eachData.id,
      imageUrl: eachData.image_url,
      avatarUrl: eachData.avatar_url,
      author: eachData.author,
      title: eachData.title,
      topic: eachData.topic,
    }))

    this.setState({
      blogItemList: updatedData,
      isLoading: false,
    })
  }

  componentDidMount = () => {
    this.getBlogItem()
  }

  render() {
    const {blogItemList, isLoading} = this.state

    console.log(blogItemList)
    return (
      <div className="blog-item-container">
        <ul className="blog-item">
          {isLoading ? (
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          ) : (
            blogItemList.map(eachBlog => (
              <BlogItem eachBlog={eachBlog} key={eachBlog.id} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default BlogList
