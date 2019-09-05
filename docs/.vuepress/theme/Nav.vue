<template>
  <header class="px-6 bg-white flex flex-wrap items-center lg:py-4 py-8">
     <input class="hidden" type="checkbox" id="menu-toggle" />
     <label id="hamburger" for="menu-toggle" class="fixed cursor-pointer lg:hidden block">
       <svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
     </label>
     <!-- menu -->
    <div class="bg-blue-400 fixed top-0 left-0 bottom-0 w-64 p-8" id="sideMenu">
      <ul class="">
        <li class="text-white"><a class="" href="#">Blogs</a></li>
        <li class="text-white"><a class="" href="#">About</a></li>
        <li class="text-white"><a class="" href="#">Contact Me</a></li>
      </ul>
     </div>

  </header>
</template>

<script>
import SearchBox from '@SearchBox'
export default {
	components: {SearchBox}
}
</script>
<style>
  #sideMenu {
    transform: translate(-100%, 0%);
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  }
  #menu-toggle:checked ~ #sideMenu {
    display: block;
    transform: translate(0%, 0%);
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);

  }
  #menu-toggle:checked ~ #hamburger {
    transform: translate(12rem, 0);
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    fill: #FFF;
    z-index: 2;
  }
</style>
