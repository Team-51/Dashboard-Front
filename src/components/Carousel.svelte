<script>
    import { onDestroy, onMount } from "svelte";
    import { fade } from 'svelte/transition';
      const images = [
        {
          img: "/images/sample_1.jpg",
          text1: "",
          text2: ""
        },
        {
          img: "/images/sample_3.jpg",
          text1: "",
          text2: ""
        },
        {
          img: "/images/sample_2.jpg",
          text1: "",
          text2: ""
        },
        {
          img: "/images/sample_1.jpg",
          text1: "",
          text2: ""
        },
        {
          img: "/images/sample_3.jpg",
          text1: "",
          text2: ""
        },
        {
          img: "/images/sample_2.jpg",
          text1: "",
          text2: ""
        },
        {
          img: "/images/sample_1.jpg",
          text1: "",
          text2: ""
        },
      ]
    var slider = "";
      onMount (() => {
        if (slider) slider.rebuild()
        else {
          slider = tns({
            container: (".my-slider"),
            autoHeight: true,
            items: 4,
            swipeAngle: false,
            speed: 600,
            autoplayTimeout: 1000,
            nav: false,
            autoplay: true,
            autoplayButtonOutput: false,
            prevButton:document.getElementById("prev-carousel"),
            nextButton:document.getElementById("next-carousel"),
            mouseDrag: true
          });
          
        }
      });
    </script>
    <div class="my-slider"  >
      {#each images as item,i }
          <div  class="mx-2 my-2" >
            <img src = {item.img} alt ={i} style="width:100%; height:200px; object-fit:   cover;"/>
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