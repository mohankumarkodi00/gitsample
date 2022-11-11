import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Inspirational Words of Wisdom</h1>
        <img
          src="https://res.cloudinary.com/ccbpmohan/image/upload/v1668102993/home_sidde_page_t6ob2o.jpg"
          alt="clothes that get you noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
          Overview. The WISH (Wireless Integrated Switch Hub) line is Idea
          approach to computer and environmental access. WISH interfaces are
          wireless and reprogrammable, meaning that they can be customized on
          the fly to perfectly match each users unique needs, through
          easy-to-use software.
        </p>
        <button type="button" className="shop-now-button">
          Create Template
        </button>
      </div>
      <img
        src="https://res.cloudinary.com/ccbpmohan/image/upload/v1668102993/home_sidde_page_t6ob2o.jpg"
        alt="clothes that get you noticed"
        className="home-desktop-img"
      />
    </div>
  </>
)

export default Home
