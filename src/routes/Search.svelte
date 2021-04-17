<form class="bg-smoke-dark p-6 md:p-10 rounded w-full shadow-lg">
    
    <h1 class="font-serif text-2xl md:text-3xl leading-tight text-center font-normal  mb-8">Advanced Search</h1>

    <div class="flex flex-wrap items-end -mx-3">
      <div class="w-full px-3 mb-6">
        <label class="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-password">Keywords</label>
        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-password" type="search" placeholder="Keywords">
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-city">Country</label>
        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-city" type="text" placeholder="Country">
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-state">
        Genre
      </label>
        <div class="relative">
          <select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-state">
          <option>Comedy</option>
          <option>Thriller</option>
          <option>Horror</option>
          <option>Action</option>
        </select>
          <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 px-3 md:mb-0">
        <button class="font-bold leading-tight bg-red hover:bg-red-light border border-red hover:border-red-light w-full  uppercase tracking-wide py-3 px-4 rounded">Search</button>
      </div>
    </div>

  </form>