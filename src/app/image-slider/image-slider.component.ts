import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

  imageArray =["https://i.ytimg.com/vi/RKwJG8gM1lE/maxresdefault.jpg",
  "https://inteng-storage.s3.amazonaws.com/images/APRIL/sizes/black_hole_resize_md.jpg"];
  i=0;
  selectedImage="";
  constructor() {
    
   }

  ngOnInit() {
   
   this.imageAuto();
  let b=this;
   setInterval(function(){
     b.imageAuto();
    
  },5000)
  }

  imageAuto()
  {
    let images = this.imageArray;
    this.selectedImage = images[this.i++];
    if(this.i>=images.length )
      this.i=0;      
      console.log(this.i);
    
  }

}
