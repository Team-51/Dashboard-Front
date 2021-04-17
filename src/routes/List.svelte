
<script>
import { onMount, beforeUpdate } from "svelte";


    export let id;
    let jsonData;
    let getData = () => {
        console.log(id)
        jsonData =  [
                {
                    img: "/images/sample_1.jpg",
                    name: "Jumanji",
                    desc1: " 12A | 2h 3min | Action, Adventure, Comedy | 11 December 2019 (UK)",
                    desc2: "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
                },
                {
                    img: "/images/sample_1.jpg",
                    name: "Jumanji",
                    desc1: " 12A | 2h 3min | Action, Adventure, Comedy | 11 December 2019 (UK)",
                    desc2: "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
                },
                {
                    img: "/images/sample_1.jpg",
                    name: "Jumanji",
                    desc1: " 12A | 2h 3min | Action, Adventure, Comedy | 11 December 2019 (UK)",
                    desc2: "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
                },
                {
                    img: "/images/sample_1.jpg",
                    name: "Jumanji",
                    desc1: " 12A | 2h 3min | Action, Adventure, Comedy | 11 December 2019 (UK)",
                    desc2: "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
                },
                {
                    img: "/images/sample_1.jpg",
                    name: "Jumanji",
                    desc1: " 12A | 2h 3min | Action, Adventure, Comedy | 11 December 2019 (UK)",
                    desc2: "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
                },
                {
                    img: "/images/sample_1.jpg",
                    name: "Jumanji",
                    desc1: " 12A | 2h 3min | Action, Adventure, Comedy | 11 December 2019 (UK)",
                    desc2: "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
                },
            ]
    }
    beforeUpdate(getData)

</script>

<!-- Card code block start -->
<div
  class="grid xl:grid-cols-1 my-4 gap-4  mx-10"
>
    {#each jsonData as  title}
        <div class="bg-white dark:bg-gray-800 rounded shadow p-6">
        <div class="flex items-center justify-between w-full sm:w-full mb-8">
            <div class="flex items-center">
            <div class="p-1 bg-blue-200 ">
                <img
                src={title.img}
                width="200px"
                alt ={1}
                />
    
            </div>
            <div class="ml-6">
                <h3
                class="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl"
                >
                {title.name}
                </h3>
                <p
                class="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5"
                >
                {title.desc1}
                </p>
                <p
                class="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5"
                >
                {title.desc2}
            </p>
            </div>
            </div>
        </div>
        </div>
     
    {/each}
</div>