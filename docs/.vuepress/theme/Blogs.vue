<template>
    <div>
        <div class="content">
            <h1>{{ $page.frontmatter.title }}</h1>
        </div>
        <div>
            <div class="m-8" v-for="post in posts">
              <div class="text-sm uppercase">{{ post.frontmatter.date}}</div>
              <a class="text-2xl font-bold" :href="post.path">{{ post.title }}</a>
							<div class="text-start">{{ post.frontmatter.excerpt }}</div>
              <a class="text-sm text-blue-400" :href="post.path">Read More →</a>
            </div>
        </div>
    </div>
</template>
<script>
// this component will display only blogs
export default {
    computed: {
        posts() {
          console.log('pages: ', this.$site.pages);
            return this.$site.pages
                .filter(page => page.path.endsWith(".html") && page.path.startsWith(this.$page.path) && !page.path.endsWith("/about.html"))
                .sort((a, b) => Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date));
        }
    }
};
</script>
