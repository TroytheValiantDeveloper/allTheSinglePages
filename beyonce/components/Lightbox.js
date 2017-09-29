import React from 'react'
import Lightbox from 'react-image-lightbox-universal'

import image1 from '../assets/img1.jpg';
import image2 from '../assets/img2.jpg';
import image3 from '../assets/img3.jpg';
import image4 from '../assets/img4.jpg';
import image5 from '../assets/img5.jpg';
import image6 from '../assets/img6.jpg';
import image7 from '../assets/img7.jpg';
import image8 from '../assets/img8.jpg';
import image9 from '../assets/img9.jpg';
import image10 from '../assets/img10.jpg';
import image11 from '../assets/img11.jpg';
import image12 from '../assets/img12.jpg';
import image13 from '../assets/img13.jpg';
import image14 from '../assets/img14.jpg';
import image15 from '../assets/img15.jpg';
import image16 from '../assets/img16.jpg';
import image17 from '../assets/img17.jpg';
import image18 from '../assets/img18.jpg';

var images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18
];

module.exports = React.createClass({
  getInitialState: function() {
    return {
      index: 0,
      isOpen: false
    };
  },
  openLightBox: function() {
    this.setState({ isOpen: true });
  },
  closeLightbox: function() {
    this.setState({ isOpen: false });
  },
  moveNext: function() {
    this.setState({ index: (this.state.index + 1) % images.length });
  },
  movePrev: function() {
    this.setState({ index: (this.state.index + images.length - 1) % images.length });
  },
  render: function() {
    var lightbox = '';
    if (this.state.isOpen) {
      lightbox = (
        <Lightbox
          mainSrc={images[this.state.index]}
          nextSrc={images[(this.state.index + 1) % images.length]}
          prevSrc={images[(this.state.index + images.length - 1) % images.length]}

          onCloseRequest={this.closeLightbox}
          onMovePrevRequest={this.movePrev}
          onMoveNextRequest={this.moveNext}
        />
      );
    }

    return (
      <div>
        <button type="button" onClick={this.openLightBox}>Open Lightbox</button>
        {lightbox}
      </div>
    );
  }
});

export default Lightbox
