<script>
	export let profile;
</script>
<header
class="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4"
>
<!-- Logo text or image -->
<div class="flex items-center justify-between mb-4 md:mb-0 font-header1">
  <h1 class="leading-none text-2xl text-grey-darkest">
	<a href="/" class="no-underline text-grey-darkest hover:text-black">
	  Movie Master
	</a>
  </h1>
</div>
<!-- END Logo text or image -->

<!-- Search field -->
<form class="mb-4 w-full md:mb-0 md:w-1/4">
  <label class="hidden" for="search-form">Search</label>
  <input
	class="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full"
	placeholder="Search"
	type="text"
  />
  <button class="hidden">Submit</button>
</form>
<!-- END Search field -->

<!-- Global navigation -->
<nav>
  <ul class="list-reset md:flex md:items-center">
	<li class="md:ml-4">
	  <a
	  class="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
	  href={profile ? `/profile/${profile}`: "login"}
	  >
	  <i class="fa fa-user" />
	  {profile || "Login" }
	  </a>
	</li>
	<li class="md:ml-4">
	  <a
		class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
		href="/search"
	  >
		Advanced Search
	  </a>
	</li>
	<li class="md:ml-4">
	  <a
		class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
		href="/settings"
	  >
		Dashboard
	  </a>
	</li>
  </ul>
</nav>
<!-- END Global navigation -->
</header>