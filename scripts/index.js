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
