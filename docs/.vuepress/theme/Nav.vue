<template>
  <header class="px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">


  <div class="bg-gray-300 fixed top-0 left-0 bottom-0 w-64" id="menu">
    <ul class="">
      <li><a class="" href="#">Blogs</a></li>
      <li><a class="" href="#">About</a></li>
      <li><a class="" href="#">Contact Me</a></li>
    </ul>

  </div>
   <label for="menu-toggle" class="cursor-pointer lg:hidden block">
     <svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
   </label>
   <input class="hidden" type="checkbox" id="menu-toggle" />

  </header>
</template>

<script>
import SearchBox from '@SearchBox'
export default {
	components: {SearchBox}
}
</script>
<style>
    #menu-toggle:checked + #menu {
      display: block;
    }
</style>
