<template>
  <div class="container">
    <header class="blog-header py-3">
      <div class="row flex-nowrap justify-content-between align-items-center">
        <div class="col-4">
          <a
            class="text-muted"
            href="https://www.instagram.com/filizinmutfagi06"
            target="_blank"
            ><i class="fab fa-instagram fa-2x hover-gradient" aria-hidden="true"></i
          ></a>
        </div>
        <div class="col-4 text-center">
          <a class="blog-header-logo text-dark" href="#">
            <img :src="require('@/assets/filizin_mutfagi_logo.png')" />
          </a>
        </div>
        <div class="col-4 d-flex justify-content-end align-items-center">
          <form class="form-inline" @submit.prevent="search">
            <input
              class="form-control plain-input"
              placeholder="search"
              v-model="searchQuery"
            />
            <button class="plain-button" type="submit">
              <i class="fas fa-search fa-lg" style="padding-top: 0.25rem;"></i>
            </button>
          </form>
        </div>
      </div>
    </header>
    <div class="py-1 mb-2">
      <div class="d-flex justify-content-between">
        <p class="p-2 text-muted">B</p>
        <p class="p-2 text-muted">U</p>
        <p class="p-2 text-muted"></p>
        <p class="p-2 text-muted">Y</p>
        <p class="p-2 text-muted">E</p>
        <p class="p-2 text-muted">M</p>
        <p class="p-2 text-muted">E</p>
        <p class="p-2 text-muted">K</p>
        <p class="p-2 text-muted">L</p>
        <p class="p-2 text-muted">E</p>
        <p class="p-2 text-muted">R</p>
        <p class="p-2 text-muted"></p>
        <p class="p-2 text-muted">B</p>
        <p class="p-2 text-muted">I</p>
        <p class="p-2 text-muted">R</p>
        <p class="p-2 text-muted"></p>
        <p class="p-2 text-muted">H</p>
        <p class="p-2 text-muted">A</p>
        <p class="p-2 text-muted">R</p>
        <p class="p-2 text-muted">I</p>
        <p class="p-2 text-muted">K</p>
        <p class="p-2 text-muted">A</p>
        <p class="p-2 text-muted"></p>
        <p class="p-2 text-muted">A</p>
        <p class="p-2 text-muted">D</p>
        <p class="p-2 text-muted">A</p>
        <p class="p-2 text-muted">M</p>
        <p class="p-2 text-muted">I</p>
        <p class="p-2 text-muted">M</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    async search() {
      await this.$store.dispatch('searchRecipies', this.searchQuery);
      this.searchQuery = '';
    },
  },
};
</script>

<style scoped>
.hover-gradient {
  cursor: pointer;
  background-image: radial-gradient(#6c757d 0%, #6c757d 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  z-index: 100;
}

.hover-gradient:after {
  position: absolute;
  top: 0;
  left: 0;
  content: '\f16d';
  background-image: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: -100;
  transition: opacity 0.3s linear;
  opacity: 0;
}

.hover-gradient:hover:after {
  opacity: 1;
}

.blog-header {
  line-height: 1;
  border-bottom: 1px solid #e5e5e5;
  font-weight: medium;
}

.blog-header-logo {
  font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
  font-size: 2.25rem;
}

.blog-header-logo:hover {
  text-decoration: underline overline;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
}

.plain-button {
  color: #6c757d;
  background-color: transparent;
  border: none;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  outline: none;
}

.plain-button:focus {
  box-shadow: 0 0px 4px rgb(108, 117, 125);
  outline: none;
}

.form-control {
  border: none;
}

.form-control:focus {
  /* border-color: #e5e5e5; */
  box-shadow: 0 8px 8px -8px rgb(108, 117, 125);
}

.plain-input {
  background-color: transparent;
  border-bottom: 1px solid #6c757d;
  border-radius: 0px;
}
</style>
