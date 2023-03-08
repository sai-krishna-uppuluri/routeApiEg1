import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogItemData: {},
    isLoading: true,
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)

    const data = await response.json()

    const updatedDataDetails = {
      title: data.title,
      author: data.author,
      topic: data.topic,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      content: data.content,
    }

    this.setState({
      blogItemData: updatedDataDetails,
      isLoading: false,
    })
  }

  componentDidMount = () => {
    this.getBlogItemDetails()
  }

  render() {
    const {blogItemData, isLoading} = this.state

    const {author, title, imageUrl, avatarUrl, content} = blogItemData
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="item-details-container">
            <h1 className="heading">{title}</h1>
            <div className="item-inside-container">
              <div className="avatar-container">
                <div className="avatar-round-container">
                  <img src={avatarUrl} alt="avatar" className="avatar-image" />
                </div>
                <p className="sub-heading">{author}</p>
              </div>
              <img src={imageUrl} alt={title} className="banner-image" />
              <p className="sub-heading">{content}</p>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default BlogItemDetails
