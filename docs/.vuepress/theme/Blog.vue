<template>
    <div>
        <div>
            <a href="/">← Home</a>
        </div>
        <div class="content mx-16 lg:mx-24">
            <h1 class="text-center">{{ $page.frontmatter.title }}</h1>
            <h6 class="text-center italic font-light m-4">{{ $page.frontmatter.excerpt }}</h6>
            <h4>{{ $page.frontmatter.nonexistent }}</h4>
            <Content />
        </div>
    </div>
</template>
<script>
export default {};
</script>
