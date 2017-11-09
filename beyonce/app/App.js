import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'
import Lightbox from '../components/Lightbox.js'

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
                    <Route path='lightboxGallery' component={LightboxGallery} >
                        <Route path='portfolio' component={Portfolio} />
                    </Route>
                    <Route path='MosaicGallery' component={MosaicGallery} >
                    </Route>
                    <Route path='*' component={NotFound} />
                </Route>
            </Router>
        )
    }
}

const Nav = () => (
  <div className="navbar">
    <Link to='/' className="btn btn-default indigo bloc">Home</Link>&nbsp;&nbsp;
    <Link to='/address' className="btn btn-default anthracite bloc">Address</Link>&nbsp;&nbsp;
    <Link to='/lightboxGallery' className="btn btn-default anthracite bloc">Lightbox Gallery</Link>&nbsp;&nbsp;
    <Link to="/mosaicGallery" className="btn btn-default anthracite bloc">Mosaic Gallery</Link>&nbsp;
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
                        <div className='col-xs-12 col-sm-3 col-md-6 col-lg-4' key={i}>
                            <Photo id={photo.id} src={photo.url} key={i} caption={photo.caption} title={photo.title} />
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



class Photo extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e) {
    e.preventDefault()
  }

  handleClick(e) {
    e.preventDefault()
    $('.container .title').text(this.props.title);
    $('.container .img-box img').attr("src", this.props.src);
    $('.container .caption').text(this.props.caption);
    $('.img-popup-wrap').removeClass('hide');
    console.log("clicked" + this.props.id);
  }
  render() {
    return (
      <div className="photo">
        <img className='img-responsive' onClick={this.handleClick} id={this.props.id} src={this.props.src} alt={this.props.caption} />
        <span>{this.props.caption}</span>
      </div>
    )
  }
}


class PopupBox extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e) {
    e.preventDefault()
  }

  handleClick(e) {
    e.preventDefault()
    $('.img-popup-wrap').addClass('hide');
  }

  render() {
    return (
      <div className="container img-popup-wrap hide">
        <div className="img-popup">
          <div className="title">
            Sample Title will change later
          </div>
          <div className="img-box">
            <img className="img-responsive" src="" />
          </div>
          <div className="caption">
            This will Contain the caption for said image.
          </div>
          <span className="close-btn" onClick={this.handleClick}>X</span>
        </div>
      </div>
    )
  }

}



const Gallery = React.createClass ({

  render: function() {
      return (
      <div className="gallery-grid">
        <div className="mosaic-1 section-mosaic mosaic-decroissante">
          <div className="container">
            <div className="row row-1">
              <div className="col-xs-12 col-sm-9 col-md-6 bloc-parent bloc-big-parent">
                <div className="bloc-big bloc blue">
                  <img className='img-responsive'src={require('../assets/img1.jpg')} />
                </div>

              </div>

              <div className="col-xs-12 col-sm-3 col-md-6 col-small-high-bloc no-padding-horizontal">
                <div className="col-xs-12 col-md-6 col-small-bloc no-padding-horizontal">
                  <div className="col-xs-12 bloc-parent bloc-small-parent">
                    <div className="bloc-small bloc anthracite">
                      <img className='img-responsive'src={require('../assets/img2.jpg')} />
                    </div>

                  </div>

                  <div className="col-xs-12 bloc-parent bloc-small-parent">
                    <div className="bloc-small bloc brick">
                      <img className='img-responsive'src={require('../assets/img3.jpg')} />
                    </div>

                  </div>

                </div>
                <div className="col-xs-12 col-md-6 bloc-parent bloc-high-parent">
                  <div className="bloc-high bloc indigo">
                    <img className='img-responsive'src={require('../assets/img4.jpg')} />
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
        <div className="mosaic-2 section-mosaic mosaic-croissante">
          <div className="container">
            <div className="row row-1">
              <div className="col-xs-12 col-sm-3 col-md-6 col-small-high-bloc no-padding-horizontal">
                <div className="col-xs-12 col-md-6 col-small-bloc no-padding-horizontal">
                  <div className="col-xs-12 bloc-parent bloc-small-parent">
                    <div className="bloc-small bloc brick">
                      <img className='img-responsive'src={require('../assets/img5.jpg')} />
                    </div>

                  </div>

                  <div className="col-xs-12 bloc-parent bloc-small-parent">
                    <div className="bloc-small bloc indigo">
                      <img className='img-responsive'src={require('../assets/img6.jpg')} />
                    </div>

                  </div>

                </div>
                <div className="col-xs-12 col-md-6 bloc-parent bloc-high-parent">
                  <div className="bloc-high bloc yellow">
                    <img className='img-responsive'src={require('../assets/img7.jpg')} />
                  </div>

                </div>

              </div>

              <div className="col-xs-12 col-sm-9 col-md-6 bloc-parent bloc-big-parent">
                <div className="bloc-big bloc green">
                  <img className='img-responsive'src={require('../assets/img8.jpg')} />
                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="mosaic-3 section-mosaic mosaic-decroissante">
          <div className="container">
            <div className="row row-1">
              <div className="col-xs-12 col-sm-9 col-md-6 bloc-parent bloc-big-parent">
                <div className="bloc-big bloc green">
                  <img className='img-responsive'src={require('../assets/img9.jpg')} />
                </div>

              </div>

              <div className="col-xs-12 col-sm-3 col-md-6 col-small-high-bloc no-padding-horizontal">
                <div className="col-xs-12 col-md-6 bloc-parent bloc-high-parent">
                  <div className="bloc-high bloc anthracite">
                    <img className='img-responsive'src={require('../assets/img10.jpg')} />
                  </div>

                </div>
                <div className="col-xs-12 col-md-6 col-small-bloc no-padding-horizontal">
                  <div className="col-xs-12 bloc-parent bloc-small-parent">
                    <div className="bloc-small bloc brick">
                      <img className='img-responsive'src={require('../assets/img11.jpg')} />
                    </div>

                  </div>

                  <div className="col-xs-12 bloc-parent bloc-small-parent">
                    <div className="bloc-small bloc yellow">
                      <img className='img-responsive'src={require('../assets/img12.jpg')} />
                    </div>

                  </div>

                </div>


              </div>

            </div>

          </div>

        </div>

        <div className="mosaic-4 section-mosaic mosaic-decroissante">
          <div className="container">
            <div className="row row-1">
              <div className="col-xs-12 col-sm-9 col-md-6 bloc-parent bloc-big-parent">
                <div className="bloc-big bloc brick">
                  <img className='img-responsive'src={require('../assets/img13.jpg')} />
                </div>

              </div>

              <div className="col-xs-12 col-sm-3 col-md-6 col-small-high-bloc no-padding-horizontal">
                <div className="col-xs-12 col-md-6 col-small-bloc no-padding-horizontal">
                  <div className="col-xs-12 bloc-parent bloc-small-parent">
                    <div className="bloc-small bloc blue">
                      <img className='img-responsive'src={require('../assets/img14.jpg')} />
                    </div>

                  </div>

                  <div className="col-xs-12 bloc-parent bloc-small-parent">
                    <div className="bloc-small bloc anthracite">
                      <img className='img-responsive'src={require('../assets/img15.jpg')} />
                    </div>

                  </div>

                </div>
                <div className="col-xs-12 col-md-6 bloc-parent bloc-high-parent">
                  <div className="bloc-high bloc green">
                    <img className='img-responsive'src={require('../assets/img16.jpg')} />
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="mosaic-5 section-mosaic mosaic-croissante">
          <div className="container">
            <div className="row row-1">
              <div className="col-xs-12 col-sm-3 col-md-6 col-small-high-bloc no-padding-horizontal">
                <div className="col-xs-12 col-md-6 col-small-bloc no-padding-horizontal">
                  <div className="col-xs-12 bloc-parent bloc-small-parent">
                    <div className="bloc-small bloc blue">
                      <img className='img-responsive'src={require('../assets/img17.jpg')} />
                    </div>

                  </div>

                  <div className="col-xs-12 bloc-parent bloc-small-parent">
                    <div className="bloc-small bloc green">
                      <img className='img-responsive'src={require('../assets/img18.jpg')} />
                    </div>

                  </div>

                </div>
                <div className="col-xs-12 col-md-6 bloc-parent bloc-high-parent">
                  <div className="bloc-high bloc brick">
                    <img className='img-responsive'src={require('../assets/img1.jpg')} />
                  </div>

                </div>

              </div>

              <div className="col-xs-12 col-sm-9 col-md-6 bloc-parent bloc-big-parent">
                <div className="bloc-big bloc yellow">
                  <img className='img-responsive'src={require('../assets/img2.jpg')} />
                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="mosaic-6 section-mosaic mosaic-decroissante">
          <div className="container">
            <div className="row row-1">
              <div className="col-xs-12 col-sm-9 col-md-6 bloc-parent bloc-big-parent">
                <div className="bloc-big bloc anthracite">
                  <img className='img-responsive'src={require('../assets/img3.jpg')} />
                </div>

              </div>

              <div className="col-xs-12 col-sm-3 col-md-6 col-small-high-bloc no-padding-horizontal">
                <div className="col-xs-12 col-md-6 bloc-parent bloc-high-parent">
                  <div className="bloc-high bloc indigo">
                    <img className='img-responsive'src={require('../assets/img4.jpg')} />
                  </div>

                </div>
                <div className="col-xs-12 col-md-6 col-small-bloc no-padding-horizontal">
                  <div className="col-xs-12 bloc-parent bloc-small-parent">
                    <div className="bloc-small bloc blue">
                      <img className='img-responsive'src={require('../assets/img5.jpg')} />
                    </div>

                  </div>

                  <div className="col-xs-12 bloc-parent bloc-small-parent">
                    <div className="bloc-small bloc green">
                      <img className='img-responsive'src={require('../assets/img6.jpg')} />
                    </div>

                  </div>

                </div>


              </div>

            </div>

          </div>

        </div>

        <div className="mosaic-7 section-mosaic mosaic-decroissante">
          <div className="container">
            <div className="row row-1">
              <div className="col-xs-12 col-sm-9 col-md-6 bloc-parent bloc-big-parent">
                <div className="bloc-big bloc brick">
                  <img className='img-responsive'src={require('../assets/img7.jpg')} />
                </div>

              </div>

              <div className="col-xs-12 col-sm-3 col-md-6 col-small-high-bloc no-padding-horizontal">
                <div className="col-xs-12 col-md-6 col-small-bloc no-padding-horizontal">
                  <div className="col-xs-12 bloc-parent bloc-small-parent">
                    <div className="bloc-small bloc indigo">
                      <img className='img-responsive'src={require('../assets/img8.jpg')} />
                    </div>

                  </div>

                  <div className="col-xs-12 bloc-parent bloc-small-parent">
                    <div className="bloc-small bloc blue">
                      <img className='img-responsive'src={require('../assets/img9.jpg')} />
                    </div>

                  </div>

                </div>
                <div className="col-xs-12 col-md-6 bloc-parent bloc-high-parent">
                  <div className="bloc-high bloc anthracite">
                    <img className='img-responsive'src={require('../assets/img10.jpg')} />
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="mosaic-8 section-mosaic mosaic-croissante">
          <div className="container">
            <div className="row row-1">
              <div className="col-xs-12 col-sm-3 col-md-6 col-small-high-bloc no-padding-horizontal">
                <div className="col-xs-12 col-md-6 col-small-bloc no-padding-horizontal">
                  <div className="col-xs-12 bloc-parent bloc-small-parent">
                    <div className="bloc-small bloc green">
                      <img className='img-responsive'src={require('../assets/img11.jpg')} />
                    </div>

                  </div>

                  <div className="col-xs-12 bloc-parent bloc-small-parent">
                    <div className="bloc-small bloc yellow">
                      <img className='img-responsive'src={require('../assets/img12.jpg')} />
                    </div>

                  </div>

                </div>
                <div className="col-xs-12 col-md-6 bloc-parent bloc-high-parent">
                  <div className="bloc-high bloc brick">
                    <img className='img-responsive'src={require('../assets/img13.jpg')} />
                  </div>

                </div>

              </div>

              <div className="col-xs-12 col-sm-9 col-md-6 bloc-parent bloc-big-parent">
                <div className="bloc-big bloc indigo">
                  <img className='img-responsive'src={require('../assets/img14.jpg')} />
                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="mosaic-9 section-mosaic mosaic-decroissante">
          <div className="container">
            <div className="row row-1">
              <div className="col-xs-12 col-sm-9 col-md-6 bloc-parent bloc-big-parent">
                <div className="bloc-big bloc brick">
                  <img className='img-responsive'src={require('../assets/img15.jpg')} />
                </div>

              </div>

              <div className="col-xs-12 col-sm-3 col-md-6 col-small-high-bloc no-padding-horizontal">
                <div className="col-xs-12 col-md-6 bloc-parent bloc-high-parent">
                  <div className="bloc-high bloc yellow">
                    <img className='img-responsive'src={require('../assets/img16.jpg')} />
                  </div>

                </div>
                <div className="col-xs-12 col-md-6 col-small-bloc no-padding-horizontal">
                  <div className="col-xs-12 bloc-parent bloc-small-parent">
                    <div className="bloc-small bloc green">
                      <img className='img-responsive'src={require('../assets/img17.jpg')} />
                    </div>

                  </div>

                  <div className="col-xs-12 bloc-parent bloc-small-parent">
                    <div className="bloc-small bloc anthracite">
                      <img className='img-responsive'src={require('../assets/img18.jpg')} />
                    </div>

                  </div>

                </div>


              </div>

            </div>

          </div>

        </div>

      </div>
      )
  }
});



const data = [
    {
        title: 'Title One',
        id: 'img1',
        key: 1,
        url: require('../assets/img1.jpg'),
        caption: 'Image One'
    },
    {
        title: 'Title Two',
        id: 'img2',
        key: 2,
        url: require('../assets/img2.jpg'),
        caption: 'Image Two'
    },
    {
        title: 'Title Three',
        id: 'img3',
        key: 3,
        url: require('../assets/img3.jpg'),
        caption: 'Image Three'
    },
    {
        title: 'Title Four',
        id: 'img4',
        key: 4,
        url: require('../assets/img4.jpg'),
        caption: 'Image Four'
    },
    {
        title: 'Title Five',
        id: 'img5',
        key: 5,
        url: require('../assets/img5.jpg'),
        caption: 'Image Five'
    },
    {
        title: 'Title Six',
        id: 'img6',
        key: 6,
        url: require('../assets/img6.jpg'),
        caption: 'Image Six'
    },
    {
        title: 'Title Seven',
        id: 'img7',
        key: 7,
        url: require('../assets/img7.jpg'),
        caption: 'Image Seven'
    },
    {
        title: 'Title Eight',
        id: 'img8',
        key: 8,
        url: require('../assets/img8.jpg'),
        caption: 'Image Eight'
    },
    {
        title: 'Title Nine',
        id: 'img9',
        key: 9,
        url: require('../assets/img9.jpg'),
        caption: 'Image Nine'
    },
    {
        title: 'Title Ten',
        id: 'img10',
        key: 10,
        url: require('../assets/img10.jpg'),
        caption: 'Image Ten'
    },
    {
        title: 'Title Eleven',
        id: 'img11',
        key: 11,
        url: require('../assets/img11.jpg'),
        caption: 'Image Eleven'
    },
    {
        title: 'Title Twelve',
        id: 'img12',
        key: 12,
        url: require('../assets/img12.jpg'),
        caption: 'Image Twelve'
    },
    {
        title: 'Title Thirteen',
        id: 'img13',
        key: 13,
        url: require('../assets/img13.jpg'),
        caption: 'Image Thirteen'
    },
    {
        title: 'Title Fourteen',
        id: 'img14',
        key: 14,
        url: require('../assets/img14.jpg'),
        caption: 'Image Fourteen'
    },
    {
        title: 'Title Fifteen',
        id: 'img15',
        key: 15,
        url: require('../assets/img15.jpg'),
        caption: 'Image Fifteen'
    },
    {
        title: 'Title Sixteen',
        id: 'img16',
        key: 16,
        url: require('../assets/img16.jpg'),
        caption: 'Image Sixteen'
    },
    {
        title: 'Title Seventeen',
        id: 'img17',
        key: 17,
        url: require('../assets/img17.jpg'),
        caption: 'Image Seventeen'
    },
    {
        title: 'Title Eighteen',
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
const LightboxGallery = (props) => <div>
      <div className='col-xs-12'>
          <div className='row'>
            <div className='col-xs-12'>

            </div>
          </div>
      </div>
      <div className='container col-xs-12'>
          <Portfolio />
      </div>
</div>


const MosaicGallery = () => <div>
      <h1>Image Gallery</h1>
      <Gallery />
</div>

const Portfolio = () => <div>
      <h1>Image Gallery With Lightbox</h1>
      <div className='container'>
          <PhotoGallery photos={data} />
      </div>
      <PopupBox />
</div>





const NotFound = () => <h1>404.. This page is not found!</h1>
const Instagram = () => <h3>Instagram Feed</h3>
const TwitterFeed = () => <h3>Twitter Feed</h3>

export default App
