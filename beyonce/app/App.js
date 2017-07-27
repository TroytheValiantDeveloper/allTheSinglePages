import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'

class App extends Component {
    render () {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Container}>
                    <IndexRoute component={Home} />
                    <Route path='address' component={Address}>
                        <IndexRoute component={TwitterFeed} />
                        <Route path='instagram' component={Instagram} />
                    </Route>
                    <Route path='aboutUs' component={AboutUs} >
                        <Route path='contactUs' component={ContactUs} />
                        <Route path='portfolio' component={Portfolio} />
                    </Route>
                    <Route path='*' component={NotFound} />
                </Route>
            </Router>
        )
    }
}

const Nav = () => (
  <div>
    <Link to='/'>Home</Link>&nbsp;
    <Link to='/address'>Address</Link>&nbsp;
    <Link to='/aboutUs'>About Us</Link>
  </div>
)

const Container = (props) => <div>
  <Nav />
  {props.children}
</div>

const PhotoGallery = React.createClass({

    render: function() {

        var photos = this.props.photos.map(function(photo, i) {
            return (
                        <div className='col-xs-6 col-sm-4' key={i}>
                            <Photo id={photo.id} src={photo.url} key={i} caption={photo.caption} />
                        </div>

                   )
        });

        return (
            <div className='photo-gallery container'>
                {photos}
            </div>
        );
    }
});

const Photo = React.createClass({


    render: function() {
        return (
            <div className='photo'>
                <img className='img-responsive' id={this.props.id} src={this.props.src} />
                <span>{this.props.caption}</span>
            </div>
        )
    }
});

const data = [
    {
        id: 'img1',
        key: 1,
        url: require('../assets/img1.jpg'),
        caption: 'Image One'
    },
    {
        id: 'img2',
        key: 2,
        url: require('../assets/img2.jpg'),
        caption: 'Image Two'
    },
    {
        id: 'img3',
        key: 3,
        url: require('../assets/img3.jpg'),
        caption: 'Image Three'
    },
    {
        id: 'img4',
        key: 4,
        url: require('../assets/img4.jpg'),
        caption: 'Image Four'
    },
    {
        id: 'img5',
        key: 5,
        url: require('../assets/img5.jpg'),
        caption: 'Image Five'
    },
    {
        id: 'img6',
        key: 6,
        url: require('../assets/img6.jpg'),
        caption: 'Image Six'
    },
    {
        id: 'img7',
        key: 7,
        url: require('../assets/img7.jpg'),
        caption: 'Image Seven'
    },
    {
        id: 'img8',
        key: 8,
        url: require('../assets/img8.jpg'),
        caption: 'Image Eight'
    },
    {
        id: 'img9',
        key: 9,
        url: require('../assets/img9.jpg'),
        caption: 'Image Nine'
    },
    {
        id: 'img10',
        key: 10,
        url: require('../assets/img10.jpg'),
        caption: 'Image Ten'
    },
    {
        id: 'img11',
        key: 11,
        url: require('../assets/img11.jpg'),
        caption: 'Image Eleven'
    },
    {
        id: 'img12',
        key: 12,
        url: require('../assets/img12.jpg'),
        caption: 'Image Twelve'
    },
    {
        id: 'img13',
        key: 13,
        url: require('../assets/img13.jpg'),
        caption: 'Image Thirteen'
    },
    {
        id: 'img14',
        key: 14,
        url: require('../assets/img14.jpg'),
        caption: 'Image Fourteen'
    },
    {
        id: 'img15',
        key: 15,
        url: require('../assets/img15.jpg'),
        caption: 'Image Fifteen'
    },
    {
        id: 'img16',
        key: 16,
        url: require('../assets/img16.jpg'),
        caption: 'Image Sixteen'
    },
    {
        id: 'img17',
        key: 17,
        url: require('../assets/img17.jpg'),
        caption: 'Image Seventeen'
    },
    {
        id: 'img18',
        key: 17,
        url: require('../assets/img18.jpg'),
        caption: 'Image Eighteen'
    }
]

const Home = () => <h1>Hello from Home!</h1>
const Address = (props) => <div>
      <br />
      <Link to='/address'>Twitter Feed</Link>&nbsp;
      <Link to='/address/instagram'>Instagram Feed</Link>
      <h1>We are located at 555 Jackson St.</h1>
      {props.children}
</div>
const AboutUs = (props) => <div>
      <div className='col-xs-12'>
          <div className='row'>
            <div className='col-xs-12'>
                <img className='img-responsive'src={require('../assets/mainBG.jpg')} />
            </div>
          </div>
      </div>
      <div className='container col-xs-12'>
          <Portfolio />
      </div>
</div>

const ContactUs = () => <div>
      <h1>Contact Us</h1>
</div>

const Portfolio = () => <div>
      <h1>Portfolio</h1>
      <div className='container'>
          <PhotoGallery photos={data} />
      </div>
    </div>


const NotFound = () => <h1>404.. This page is not found!</h1>
const Instagram = () => <h3>Instagram Feed</h3>
const TwitterFeed = () => <h3>Twitter Feed</h3>

export default App
