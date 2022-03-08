  var movie1 = [
      {a:"https://i.ytimg.com/vi/f_vbAtFSEc0/maxresdefault.jpg"},
      {a:"https://i0.wp.com/neplych.com/wp-content/uploads/2022/02/Gangubai-Kathiawadi-Movie.jpg?fit=1440%2C960&ssl=1"},
      {a:"https://www.eaglesvine.com/wp-content/uploads/2021/07/1625665142_Bhuj-Motion-Poster-On-Hows-The-Hype-Blockbuster-Or-Lacklustre-780x470.jpg"},
      {a:"https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422"},
      {a:"https://www.koimoi.com/wp-content/new-galleries/2021/11/satyameva-jayate-2-trailer-2-ft-john-abraham-on-hows-the-hype-001.jpg"}
  
  ]
    localStorage.setItem("movie1" ,JSON.stringify(movie1))
     var movie1=JSON.parse(localStorage.getItem("movie1"))
    console.log(movie1)
   let slideshow =document.getElementById("slideshow");
   let i=1;
   let img=document.createElement("img");
      img.setAttribute("id","img")
       img.src=movie1[0].a;
       slideshow.append(img)
    setInterval(function (){
       if(i==movie1.length){
           i=0;
       }
       let movies1=movie1[i];
       slideshow.innerHTML=null;
       let img=document.createElement("img");
       img.setAttribute("id","img")
       img.src=movies1.a;
       slideshow.append(img)
       i++
    },1000)

      var movies = [
          {image:"https://www.deccanherald.com/sites/dh/files/articleimages/2021/12/17/file7ivjchsfnw1f6gj8eay-1061813-1639743521.jpg", name:"Pushpa", action:"Action,Drama",rate:"9"},
          {image:"https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_QL75_UX380_CR0,0,380,562_.jpg", name:"The Batman", action:"Action,Drama",rate:"8.5"},
          {image:"https://www.imdb.com/title/tt0068646/mediaviewer/rm746868224/?ref_=tt_ov_i", name:"The Godfather", action:"Crime,Drama",rate:"9.2"},
          {image:"https://www.imdb.com/title/tt0317248/mediaviewer/rm1021136128/?ref_=tt_ov_i", name:"City of God", action:"Crime,Drama",rate:"8.3"},
          {image:"https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,2,380,562_.jpg", name:"life Is Beautiful", action:"Crime,Drama,Romance,War",rate:"8"},
          {image:"https://m.media-amazon.com/images/M/MV5BOWY0MzZkN2QtODI1MC00Nzg0LWE3YmUtNTNhMWU4YTFjOTA4XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UY562_CR21,0,380,562_.jpg", name:" Bhuj: The Pride of India", action:"Crime,Drama,Romance,War",rate:"8.2"},
          {image:"https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_QL75_UY562_CR4,0,380,562_.jpg", name:"PK", action:"Comedy,Drama,Sci-Fi",rate:"9.5"},
          {image:"https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR5,0,380,562_.jpg", name:"3 Idiots", action:"Crime,Drama",rate:"9.6"},
          {image:"https://m.media-amazon.com/images/M/MV5BMTY1Nzg4MjcwN15BMl5BanBnXkFtZTcwOTc1NTk1OQ@@._V1_QL75_UY562_CR5,0,380,562_.jpg", name:"Bhaag Milkha Bhaag", action:"Biography,Drama,Sport",rate:"8.7"}

      ]
      localStorage.setItem("movies" ,JSON.stringify(movies))
      var movies=JSON.parse(localStorage.getItem("movies"))
      console.log(movies)
      display(movies)
      function display(data){
        document.querySelector("#movies").innerHTML=""
        movies.map(function(elem,index){
           var div= document.createElement("div")
         div.setAttribute("id","div1")
         var img = document.createElement("img");
         img.setAttribute("src", elem.image);
         img.setAttribute("id","img")
         var div2= document.createElement("div")
         div.setAttribute("id","div2")
           var name=document.createElement("h5")
           name.innerText=elem.name;
           div.append(name)
           document.querySelector("#movies").append(div)
        })

      }
  