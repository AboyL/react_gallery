import React, { Component } from 'react';
import { ImgFigure } from './component/imgFigure.jsx';
import './App.scss';

// 获取画廊数据
const imgData = require('./data/gallery_data.json');
// 图片所在文件夹
const imgDirectory = "./img/gallery_img/";
// 获取图片的Url
const galleryImgs = (function getImgUrl(imgDataArr) {
  for (let i = 0, j = imgDataArr.length; i < j; i++) {
    var imgUrl = imgDataArr[i];
    // imgUrl.imgUrl = require('./img/gallery_img/' + imgDataArr[i].fileName);
    imgUrl.imgUrl = require(imgDirectory + imgDataArr[i].fileName);
    
    imgDataArr[i] = imgUrl;
  }   
  return imgDataArr;
}(imgData)) 


console.log(galleryImgs);

class App extends Component {
  constructor() {
    super();
    this.controllerUnits = [];
    this.imgFigures = [];
    galleryImgs.forEach((img,index) => {
      let key="img"+index;
      this.imgFigures.push(<ImgFigure data={img} key={key}/>)      
    });
  }


  render() {
    return (
      <section className="stage">
        <section className="img-sec">
          {this.imgFigures}
        </section>
        <nav className="controller-nav">
          {this.controllerUnits}
        </nav>
      </section>
    );
  }
}

export default App;
