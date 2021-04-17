<script>
    export let profile
    import Banner from '../components/Banner.svelte';
    import {onMount} from 'svelte';
    onMount ( () => {
      let tabsContainer = document.querySelector("#tabs");

let tabTogglers = tabsContainer.querySelectorAll("a");
console.log(tabTogglers);

tabTogglers.forEach(function(toggler) {
  toggler.addEventListener("click", function(e) {
    e.preventDefault();

    let tabName = this.getAttribute("href");

    let tabContents = document.querySelector("#tab-contents");

    for (let i = 0; i < tabContents.children.length; i++) {
      
      tabTogglers[i].parentElement.classList.remove("border-t", "border-r", "border-l", "-mb-px", "bg-white");  tabContents.children[i].classList.remove("hidden");
      if ("#" + tabContents.children[i].id === tabName) {
        continue;
      }
      tabContents.children[i].classList.add("hidden");
      
    }
    e.target.parentElement.classList.add("border-t", "border-r", "border-l", "-mb-px", "bg-white");
  });
});

document.getElementById("default-tab").click();

    })


    
</script>


Hello {profile}
<header class="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
  
  <!-- Logo text or image -->
  <div class="flex items-center justify-between mb-4 md:mb-0 font-header1">
    <h1 class="leading-none text-2xl text-grey-darkest">
      <a class="no-underline text-grey-darkest hover:text-black" href="#">
        Movie Master
      </a>
    </h1>

    <a class="text-black hover:text-orange md:hidden" href="#">
      <i class="fa fa-2x fa-bars"></i>
    </a>
  </div>
  <!-- END Logo text or image -->
  
  <!-- Search field -->
  <form class="mb-4 w-full md:mb-0 md:w-1/4">
    <label class="hidden" for="search-form">Search</label>
    <input class="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full" placeholder="Search" type="text">
    <button class="hidden">Submit</button>
  </form>
  <!-- END Search field -->
  
  <!-- Global navigation -->
  <nav>
    <ul class="list-reset md:flex md:items-center">
      <li class="md:ml-4">
        <a class="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
          Products
        </a>
      </li>
      <li class="md:ml-4">
        <a class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
          About
        </a>
      </li>
      <li class="md:ml-4">
        <a class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
          Contact
        </a>
      </li>
    </ul>
  </nav>
  <!-- END Global navigation -->

</header>
<Banner />

<div class="rounded border mx-auto mt-4" style="">
  <!-- Tabs -->
  <ul id="tabs" class="inline-flex pt-2 px-1 w-full border-b">
    <li class="bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px"><a id="default-tab" href="#first">Cast</a></li>
    <li class="px-4 text-gray-800 font-semibold py-2 rounded-t"><a href="#second">Creators</a></li>
    <li class="px-4 text-gray-800 font-semibold py-2 rounded-t"><a href="#third">Awards</a></li>
    <li class="px-4 text-gray-800 font-semibold py-2 rounded-t"><a href="#fourth">Production Houses</a></li>
  </ul>

  <!-- Tab Contents -->
  <div id="tab-contents">
    <div id="first" class="p-4">
      First tab
    </div>
    <div id="second" class="hidden p-4">
      Second tab
    </div>
    <div id="third" class="hidden p-4">
      Third tab
    </div>
    <div id="fourth" class="hidden p-4">
      Fourth tab
    </div>
  </div>
</div>