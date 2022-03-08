  var movie = [
      {a:"https://i.ytimg.com/vi/f_vbAtFSEc0/maxresdefault.jpg"},
      {a:"https://i0.wp.com/neplych.com/wp-content/uploads/2022/02/Gangubai-Kathiawadi-Movie.jpg?fit=1440%2C960&ssl=1"},
      {a:"https://www.eaglesvine.com/wp-content/uploads/2021/07/1625665142_Bhuj-Motion-Poster-On-Hows-The-Hype-Blockbuster-Or-Lacklustre-780x470.jpg"},
      {a:"https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422"},
      {a:"https://www.koimoi.com/wp-content/new-galleries/2021/11/satyameva-jayate-2-trailer-2-ft-john-abraham-on-hows-the-hype-001.jpg"}
  
  ]
    localStorage.setItem("movie" ,JSON.stringify(movie))
     var movie=JSON.parse(localStorage.getItem("movie"))
    console.log(movie)
   let slideshow =document.getElementById("slideshow");
   let i=1;
   let img=document.createElement("img");
      img.setAttribute("id","img")
       img.src=movie[0].a;
       slideshow.append(img)
    setInterval(function (){
       if(i==movie.length){
           i=0;
       }
       let movies=movie[i];
       slideshow.innerHTML=null;
       let img=document.createElement("img");
       img.setAttribute("id","img")
       img.src=movies.a;
       slideshow.append(img)
       i++
    },1000)
