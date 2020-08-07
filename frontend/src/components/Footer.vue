<template>
  <footer class="blog-footer">
    <p>
      Food blog built by
      <a href="javscript:void(0);">#bitirme</a> gang.
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {};
  },
};
</script>

<style scoped>
.blog-footer {
  padding: 1.5rem 0;
  color: #999;
  text-align: center;
  background-color: #f9f9f9;
  border-top: 0.05rem solid #e5e5e5;
  width: 100%;
}
.blog-footer p:last-child {
  margin-bottom: 0;
}
</style>
