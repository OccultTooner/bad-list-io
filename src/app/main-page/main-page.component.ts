import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  movieList = [
    {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Theodore Rex",
      movieDescription:"Discover more"
    },
    {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"BayFormer 1",
      movieDescription:"Discover more"
    },
    {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Date Movie",
      movieDescription:"Discover more"
    },
    {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Desert Mirage",
      movieDescription:"Discover more"
    },
    {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Son of the Mask",
      movieDescription:"Discover more"
    },
    {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"sir billi",
      movieDescription:"Discover more"
    },
    {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Bayformer 5",
      movieDescription:"Discover more"
    },

    {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Sneakerella",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Hunchback sequel",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Lady and the tramp 2",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Fantastic 4orce",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Little panda fighter ",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Pinocchio (pauly shore)",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Ratatoing",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Kung Fu Bunny",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Marmaduke netflix",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Arctic dog",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Surfs Up 2",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Garbage Pail Kids",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Stuart little 3",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Pinocchio (fan dub) ",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Car go",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Food fight",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Bayformer 2",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Bayformer 3/4",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Chrismass tree",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Bee movie ripoff",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Lifes a jungle",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Panda vs aliens",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Freedom force",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"AVGN the movie",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Christmas light",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Disaster movie",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Tall girl/2",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:" Lover (ralphthemoviemaker)",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"To boldly flee",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Izzie  way home",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Finding Jesus",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"Christmas light 2",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/bebopHill.png",
      movieTitle:"What's up",
      movieDescription:"Discover more"
    }, 
  ]
  totalTasks = 0;
  constructor() {
    this.totalTasks = this.movieList.length;
   }

  ngOnInit(): void {
  }

}
