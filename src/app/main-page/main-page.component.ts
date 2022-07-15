import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  movieList = [
    {
      movieImage:"~../../assets/images/Theodore-rex-DVD.jpg",
      movieTitle:"Theodore Rex",
      movieDescription:"Discover more"
    },
    {
      movieImage:"~../../assets/images/bayformer1.jpg",
      movieTitle:"BayFormer 1",
      movieDescription:"Discover more"
    },
    {
      movieImage:"~../../assets/images/dateMovie.jpg",
      movieTitle:"Date Movie",
      movieDescription:"Discover more"
    },
    {
      movieImage:"~../../assets/images/desertMirage.jpg",
      movieTitle:"Desert Mirage",
      movieDescription:"Discover more"
    },
    {
      movieImage:"~../../assets/images/Sonofthemask.jpg",
      movieTitle:"Son of the Mask",
      movieDescription:"Discover more"
    },
    {
      movieImage:"~../../assets/images/sirBilly.jpg",
      movieTitle:"sir billi",
      movieDescription:"Discover more"
    },
    {
      movieImage:"~../../assets/images/Transformers_5.jpg",
      movieTitle:"Bayformer 5",
      movieDescription:"Discover more"
    },

    {
      movieImage:"~../../assets/images/sneakerella.jpg",
      movieTitle:"Sneakerella",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/The_Hunchback_of_Notre_Dame_II.jpg",
      movieTitle:"Hunchback sequel",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/ladyAndTheTramp2.jpg",
      movieTitle:"Lady and the tramp 2",
      movieDescription:"Discover more"
    },  {
      movieImage:"~../../assets/images/littlePandaFighter.jpg",
      movieTitle:"Little panda fighter ",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/pinochiio.jpg",
      movieTitle:"Pinocchio (pauly shore)",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/ratatoing.jpg",
      movieTitle:"Ratatoing",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/kungFuBunny.jpg",
      movieTitle:"Kung Fu Bunny",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/marmaduke.jpg",
      movieTitle:"Marmaduke netflix",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/articDogs.jpg",
      movieTitle:"Arctic dog",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/surfUp2.jpg",
      movieTitle:"Surfs Up 2",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/garbagePaleKids.jpg",
      movieTitle:"Garbage Pail Kids",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/stuartLittle3.jpg",
      movieTitle:"Stuart little 3",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/pinochiio.jpg",
      movieTitle:"Pinocchio (fan dub) ",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/carGo.jpg",
      movieTitle:"Car go",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/Foodfight!_DVD_cover.jpg",
      movieTitle:"Food fight",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/transformers2.jpg",
      movieTitle:"Bayformer 2",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/Transformers_3.jpg",
      movieTitle:"Bayformer 3",
      movieDescription:"Discover more"
    },
    {
      movieImage:"~../../assets/images/Transformers_4.jpg",
      movieTitle:"Bayformer 4",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/chrismasTree.jpg",
      movieTitle:"Chrismass tree",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/planBee.jpg",
      movieTitle:"Bee movie ripoff",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/lifeAJungle.jpg",
      movieTitle:"Lifes a jungle",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/pandaVsAlien.jpg",
      movieTitle:"Panda vs aliens",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/fantanstic4orce.jpg",
      movieTitle:"Freedom force",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/avgn.jpg",
      movieTitle:"AVGN the movie",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/xmasLight.jpg",
      movieTitle:"Christmas light",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/disasterMovie.jpg",
      movieTitle:"Disaster movie",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/tallGirl.jpg",
      movieTitle:"Tall girl",
      movieDescription:"Discover more"
    }, 
    {
      movieImage:"~../../assets/images/Tall_Girl_2.jpg",
      movieTitle:"Tall gir2",
      movieDescription:"Discover more"
    },{
      movieImage:"~../../assets/images/lover.jpg",
      movieTitle:" Lover (ralphthemoviemaker)",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/toBoldlyFlee.png",
      movieTitle:"To boldly flee",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/Izzie's_Way_Home.jpg",
      movieTitle:"Izzie  way home",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/findingJesus.jpg",
      movieTitle:"Finding Jesus",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/xmasBrigade.jpg",
      movieTitle:"Christmas light 2",
      movieDescription:"Discover more"
    }, {
      movieImage:"~../../assets/images/whatUp.jpg",
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
