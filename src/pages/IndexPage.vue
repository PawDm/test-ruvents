<template>
  <q-page class="column container ">
    <div class="row">
      <q-btn color="primary" @click="store.dispatch('example/toFillStore')">to fill storage</q-btn>
    </div>
    <div class="row q-mt-md justify-center">
      <my-input outlined v-model="searchValue"></my-input>
      <q-btn @click="toSearch" class="q-ml-sm search-btn" outline color="primary" icon="search" label="Search" />
    </div>
    <p class="result q-mt-xl">
      {{ store.getters['example/countOfFoundValues'] }}
    </p>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import MyInput from '../components/MyInput.vue'

export default {
  components: {
    MyInput,
  },
  setup() {
    const store = useStore()

    const searchValue = ref('')

    const toSearch = () => {
      store.dispatch('example/toSearch', searchValue.value)
    }

    return {
      store,
      searchValue,
      toSearch
    }
  }
}
</script>
<style lang="sass" scoped>
.container
  margin: 0 auto
  padding: 1em
  max-width: 960px
.result
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
  flex-grow: 1
  font-size: 20em
.search-btn
  @media screen and (max-width: 380px)
    margin-top: 1em
</style>
