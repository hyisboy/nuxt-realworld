<template>
  <nav>
    <ul class="pagination" >
      <!-- ngRepeat: pageNumber in $ctrl.pageRange($ctrl.totalPages) -->
      <li
        class="page-item "
        v-for="index in pageTotal"
        :class="{ active: currentIndex == index }"
        :key="index"
      >
        <span class="page-link ng-binding"  @click="change(index)" >{{ index }}</span>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "pagenation",
  props: {
    total: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 20,
    },
  },
  data() {
    return {
      currentIndex: 1,
    };
  },
  methods: {
    change(index) {
      this.currentIndex = index;
      this.$emit("changePage", index);
    },
    reset() {
        this.currentIndex = 1;
    }
  },
  computed: {
    pageTotal() {
      return Math.ceil(this.total / this.limit);
    },
  },
};
</script>

<style>
</style>