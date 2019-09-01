<template>
    <div>
        <div class="backlink">
            <a href="/">← Home</a>
        </div>
        <div class="content">
            <h1>{{ $page.frontmatter.title }}</h1>
            <h3>{{ $page.frontmatter.excerpt }}</h3>
            <h3>{{ $page.frontmatter.nonexistent }}</h3>
            <Content />
              {{ hello }}
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      hello: "hello vuepress"
    }
  }
};
</script>
