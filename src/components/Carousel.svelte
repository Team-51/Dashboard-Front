<script>
    import { onMount } from "svelte";
    import { fade } from 'svelte/transition';
      const images = [
        {
          img: "./images/building.jpeg",
          text1: "",
          text2: ""
        },
        {
          img: "./images/lib1.jpg",
          text1: "",
          text2: ""
        },
        {
          img: "./images/lib2.jpg",
          text1: "",
          text2: ""
        },
        {
          img: "./images/lib3.jpg",
          text1: "",
          text2: ""
        },
      ]
      onMount (() => {
          var elem = document.querySelector('.main-carousel');
          var slider = tns({
            container: ".my-slider",
            autoHeight: true,
            items: 1,
            swipeAngle: false,
            speed: 400,
            nav: false,
            autoplay: false,
            prevButton:document.getElementById("prev-carousel"),
            nextButton:document.getElementById("next-carousel"),
            mouseDrag: true
          });
      });
    </script>
    <div class="my-slider"  >
      {#each images as item,i }
          <div >
            <img src = {item.img} alt ={i} style="width:100%; height:300px; object-fit: cover;"/>
          </div>
      {/each}
    </div>
      <a id="prev-carousel"  class="z-10 left carousel-control-left"><i class="fa fa-chevron-left"></i></a>
      <a id="next-carousel"  class="z-10 right carousel-control-right"><i class="fa fa-chevron-right"></i></a>
    
    <style>
    /* Control buttons  */
    .carousel-control-left{
        position: absolute;
        width: 50px;    
        background: none;
      color: #222;
      font-size: 2.3em;
      text-shadow: none;
      margin-top: -150px;
    }
    .carousel-control-right {
        position: absolute;
        width: 50px;    
        right:0px;
        background: none;
      color: #222;
      font-size: 2.3em;
      text-shadow: none;
      text-align: end;
      margin-top: -150px;
    
    }
    </style>