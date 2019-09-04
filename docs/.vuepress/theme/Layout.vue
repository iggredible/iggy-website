<template>
      <div class="container max-w-5xl mx-auto">
				<Nav />
        <!-- intro -->
        <div class="w-full flex md:flex-row flex-col" v-if="isBlogs">
          <!-- <div class="md:w&#45;1/3"> -->
          <!--   <About /> -->
          <!-- </div> -->

						<!-- separate this into its own component later -->
						<!-- blogs -->
          <div>
            <Blogs v-if="isBlogs" />
            <!-- AboutPage if isAbout change what is displayed here -->
            <!-- can laso do projects -->
          </div>
        </div>
        <div class="max-w-3xl mx-auto">
          <Blog v-if="!isBlogs" />
        </div>
      
      </div>
        <!-- <section class="section"> -->
        <!--     <div class="container"> -->
        <!--     </div> -->
        <!-- </section> -->
</template>
<script>
import Blogs from './Blogs';
import Blog from './Blog';
import About from './About';
import Nav from './Nav';
export default {
    components: {
        Blogs,
        Blog,
        About,
				Nav
    },
    computed: {
        isBlogs() {
            return this.$page.path.endsWith("/") 
        }
    }
};
</script>
<style lang="stylus">
@import './styles/theme.styl';
</style>
