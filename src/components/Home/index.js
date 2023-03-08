import './index.css'
import UserInfo from '../UserInfo'
import BlogList from '../BlogList'

const Home = () => (
  <div className="home-container">
    <div className="user-info-container">
      <UserInfo />
    </div>
    <div className="blog-list-container">
      <BlogList />
    </div>
  </div>
)

export default Home
