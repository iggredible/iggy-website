<template>
  <header class="px-6 bg-white flex flex-wrap items-center py-8">
     <input class="hidden" type="checkbox" id="menu-toggle" />
     <label id="hamburger" for="menu-toggle" class="fixed cursor-pointer block"> <!-- maybe do top:0 left: 0 for hamburger? -->
     <!--   <svg class="text&#45;gray&#45;900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v&#45;2z"></path></svg> -->
     <!-- </label> -->
     <div id="burgerToggle" class="">
       <span></span>
       <span></span>
       <span></span>
     </div>
</label>
     <!-- menu -->
    <div class="bg-gray-800 fixed top-0 left-0 bottom-0 w-64" id="sideMenu">
      <ul class="m-8">
        <li class="my-4"><About /></li>
        <li class="my-4 text-white font-light"><a class="" href="#">Blogs</a></li>
        <li class="my-4 text-white font-light"><a class="" href="#">About</a></li>
        <li class="my-4 text-white font-light"><a class="" href="#">Contact Me</a></li>
      </ul>
     </div>

  </header>
</template>

<script>
import SearchBox from '@SearchBox'
import About from './About';
export default {
	components: {
    SearchBox, 
    About
  }
}
</script>
<style>
  #sideMenu {
    transform: translate(-100%, 0%);
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  }
  #menu-toggle:checked ~ #sideMenu {
    transform: translate(0%, 0%);
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);

  }
  #menu-toggle:checked ~ #hamburger span {
		background: #FFF;
/* add x transforming effect hamburger */
    /* fill: #FFF; */
    /* z-index: 5; */
  }

#hamburger {
	z-index: 5;
}

  #burgerToggle span {
    width: 33px;
    height: 4px;
		margin-bottom: 5px;
    display: block;
    position: relative;
    background: #2d3748;
    border-radius: 3px;
    z-index: 2;
		transform-origin: 4px 0px;
  
		transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
  }
#burgerToggle span:first-child
{
  transform-origin: 0% 0%;
}

#burgerToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

#burgerToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#burgerToggle input:checked ~ span:nth-last-child(2)
{
	transform: rotate(-45deg) translate(0, -1px);
}

</style>
