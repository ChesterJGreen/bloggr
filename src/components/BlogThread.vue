<template>
  <div class="col-md-4" v-for="b in blogs" :key="b.id">
    <BlogCard :blog="b" />
  </div>
</template>

<script>
export default {
  name: 'Thread',
  props: {
    blogs: {
      type: Array,
      required: true
    }
  }
}
</script>
