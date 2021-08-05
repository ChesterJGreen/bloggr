
<template>
  <div class="profile-page container-fluid">
    <BlogThread :blogs="blogs" />
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { blogsService } from '../services/BlogsService'
import Pop from '../utils/Notifier'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'

export default {
  setup() {
    const router = useRoute()
    onMounted(async() => {
      try {
        await blogsService.getAll({ creatorId: router.params.id })
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      blogs: computed(() => AppState.blogs)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
