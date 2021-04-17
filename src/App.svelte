<script>
  export let profile = "saksham";
  /**
   * 0: not logged in, genereal page
   * 1: logged and all ok
   * 2: changing security settings
   * 3: logging in
   */
  import { Router, Route, Link } from "svelte-navigator";

  import Login from "./routes/Login.svelte";
  import Title from "./routes/Title.svelte";
  import NewAccount from "./routes/NewAccount.svelte";
  import Settings from "./routes/Settings.svelte";
  import Tailwindcss from "./Tailwindcss.svelte";
  import Carousel from "./components/Carousel.svelte";
  import Profile from "./routes/Profile.svelte";
  import Search from "./routes/Search.svelte";
  import Feed from "./routes/Feed.svelte";
  import Cast from "./routes/Cast.svelte";
  import List from "./routes/List.svelte";
</script>

<Router>
  <header
    class="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4"
  >
    <!-- Logo text or image -->
    <div class="flex items-center justify-between mb-4 md:mb-0 font-header1">
      <h1 class="leading-none text-2xl text-grey-darkest">
		<Link to="/" class="no-underline text-grey-darkest hover:text-black">
          Movie Master
        </Link>
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

  <main>
    <Route path="cast/:id">
      <Cast />
    </Route>
    <Route path="title/:id" let:params>
      <Title id={params.id} />
    </Route>
    <Route path="/search">
      <Search />
    </Route>
    <Route path="/">
      <Feed />
    </Route>
    <Route path="profile/:id">
      <Profile />
    </Route>
    <Route path="settings">
      <Settings />
    </Route>
    <Route path="new">
      <NewAccount />
    </Route>
    <Route path="login">
      <Login />
    </Route>
    <Route path="list/:id" let:params>
      <List id={params.id}/>
    </Route>
  </main>
  <Tailwindcss />
</Router>

<style>
  main {
    padding: 1em;
    margin: 0 auto;
    font-family: 'Antic Slab', serif;
  }

  @import url('https://fonts.googleapis.com/css2?family=Antic+Slab&display=swap');
</style>
