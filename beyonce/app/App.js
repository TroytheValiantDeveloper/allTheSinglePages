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
                    <Route path='aboutMe' component={AboutMe} >
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
    <Link to='/aboutMe'>About Me</Link>
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
        url: 'http://placekitten.com/800/300',
        caption: 'Image One'
    },
    {
        id: 'img2',
        key: 2,
        url: 'http://placekitten.com/800/300',
        caption: 'Image Two'
    },
    {
        id: 'img3',
        key: 3,
        url: 'http://placekitten.com/800/300',
        caption: 'Image Three'
    },
    {
        id: 'img4',
        key: 4,
        url: 'http://placekitten.com/800/300',
        caption: 'Image Four'
    },
    {
        id: 'img5',
        key: 5,
        url: 'http://placekitten.com/800/300',
        caption: 'Image Five'
    },
    {
        id: 'img6',
        key: 6,
        url: 'http://placekitten.com/800/300',
        caption: 'Image Six'
    },
    {
        id: 'img7',
        key: 7,
        url: 'http://placekitten.com/800/300',
        caption: 'Image Seven'
    },
    {
        id: 'img8',
        key: 8,
        url: 'http://placekitten.com/800/300',
        caption: 'Image Eight'
    },
    {
        id: 'img9',
        key: 9,
        url: 'http://placekitten.com/800/300',
        caption: 'Image Nine'
    },
    {
        id: 'img10',
        key: 10,
        url: 'http://placekitten.com/800/300',
        caption: 'Image Ten'
    },
    {
        id: 'img11',
        key: 11,
        url: 'http://placekitten.com/800/300',
        caption: 'Image Eleven'
    },
    {
        id: 'img12',
        key: 12,
        url: 'http://placekitten.com/800/300',
        caption: 'Image Twelve'
    },
    {
        id: 'img13',
        key: 13,
        url: 'http://placekitten.com/800/300',
        caption: 'Image Thirteen'
    },
    {
        id: 'img14',
        key: 14,
        url: 'http://placekitten.com/800/300',
        caption: 'Image Fourteen'
    },
    {
        id: 'img15',
        key: 15,
        url: 'http://placekitten.com/800/300',
        caption: 'Image Fifteen'
    },
    {
        id: 'img16',
        key: 16,
        url: 'http://placekitten.com/800/300',
        caption: 'Image Sixteen'
    },
    {
        id: 'img17',
        key: 17,
        url: 'http://placekitten.com/800/300',
        caption: 'Image Seventeen'
    },
    {
        id: 'img18',
        key: 17,
        url: 'http://placekitten.com/800/300',
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
const AboutMe = (props) => <div>
      <br />
      <Link to='aboutMe/contact'>Contact Us</Link>&nbsp;
      <Link to='aboutMe/portfolio'>Portfolio</Link>
      <div className='col-sm-8 col-sm-offset-2'>
          <div className='row'>
            <div className='col-xs-12 col-sm-4'>
                <img className='img-responsive'src='http://www.photl.com/images/photos/2011/11/11/1637/wm381826tt.jpg' />
            </div>
            <div className='col-xs-12 col-sm-8'>
                <h1>My Name is blah blah blah</h1>
                <h3>I like to do things with stuff</h3>
                <p>
                    This is a list of stuff I like to do: <br/>
                    blah blah and I also blah blah when I like to blah<br />
                    Blah Blah Blah and I am really good at blah blah blah!
                </p>
            </div>
          </div>
          <div className='row'>
              <div className='col-xs-12 col-sm-8 col-sm-offset-2'>
                  <form>
                    <input type='text' />&nbsp;&nbsp;
                    <button id='submitBtn' className='btn btn-primary btn-submit'>SEND</button>
                  </form>
              </div>
            </div>
      </div>
      <div className='container col-xs-12 col-sm-8 col-sm-offset-3'>
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