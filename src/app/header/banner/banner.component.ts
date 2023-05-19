import { Component } from '@angular/core';

interface Image {
    url: string,
    description: string
  }

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss', '../../../styles.scss']
})

export class BannerComponent {

  constructor() {}

  images: Image[] = [
    {
      url: "assets/images/image_1.jpg",
      description: "Imagem da BMW"
    },
    {
      url: "assets/images/image_2.jpg",
      description: "Imagem que representa finanças"
    },
    {
      url: "assets/images/image_3.jpg",
      description: "Imagem de torres de energia heólica"
    },
    {
      url: "assets/images/image_4.jpg",
      description: "Imagem que representa indústrias"
    },
  ]

  currentImage: number = 0;

  nextImage() {
    if (this.currentImage === this.images.length - 1) {
      this.currentImage = 0;
    } else {
      this.currentImage++;
    }
  }

  prevImage() {
    if (this.currentImage === 0) {
      this.currentImage = this.images.length - 1;
    } else {
      this.currentImage--;
    }
  }

  interval: any = 0;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.nextImage();
    }, 5000);
  }

  ngClearInterval() {
    clearInterval(this.interval);
  }
}
