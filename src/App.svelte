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
  import Header from "./components/Header.svelte";
  import Profile from "./routes/Profile.svelte";
  import Search from "./routes/Search.svelte";
  import Feed from "./routes/Feed.svelte";
  import Cast from "./routes/Cast.svelte";
  import List from "./routes/List.svelte";
</script>

<Router>
  <Header />
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
