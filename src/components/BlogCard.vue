<template>
  <div class="col-12">
    <div class="d-flex mt-2 shadow-light bg-gray border border-light" data-toggle="modal" :data-target="'#blog-modal-'+blog.id">
      <img class="cover-img" :src="blog.imgUrl" alt="" srcset="">
      <div class="d-flex flex-grow-1 justify-content-between">
        <h4 class="py-2 px-3">
          {{ blog.title }}
        </h4>
        <div class="align-self-end" v-if="account.id === blog.creatorId">
          <button class="btn btn-danger" @click.stop="destroy">
            delete
          </button>
        </div>
        <!-- NOTE @click.stop prevents the parent element from being clicked -->
        <router-link router-link :to="{ name: 'Profile', params: {id: blog.creator.id } }" @click.stop="" class="creator p-3 align-self-end">
          <img class="h-100 rounded-pill" :src="blog.creator.picture" alt="" srcset="">
          {{ blog.creator.name }}
        </router-link>
      </div>
    </div>
  </div>
  <BlogModal :blog="blog" />
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  props: {
    blog: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      account: computed(() => AppState.account)

    }
  }
}
</script>
<style lang="scss" scoped>
.cover-img {
  height: 200px;
  width: 250px;
  object-fit: cover;
}
a {
  color: inherit;
  text-decoration: inherit;
}
.creator{
  height: 3em;
}
</style>
