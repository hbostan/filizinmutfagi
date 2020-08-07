<template>
  <div class="col-sm">
    <div class="card h-100" data-toggle="modal" :data-target="'#modal-' + recipie.id">
      <img class="card-img-top" :src="recipie.thumbnail" :alt="'Image:' + recipie.name" />
      <div class="card-body">
        <h5 class="card-title text-center">{{ recipie.name }}</h5>
        <p class="card-text text-center">
          {{ shortCaption }}
        </p>
      </div>
    </div>

    <div
      class="modal fade"
      :id="'modal-' + recipie.id"
      tabindex="-1"
      role="dialog"
      aria-labelledby="mealname"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="mealname">{{ recipie.name }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="card-horizontal">
              <div class="recipie-slides">
                <div
                  :id="'carousel-' + recipie.id"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <ol class="carousel-indicators" v-if="recipie.images.length > 1">
                    <li
                      v-for="(image, index) in recipie.images"
                      :key="index"
                      :data-target="'#carousel-' + recipie.id"
                      :data-slide-to="index"
                      :class="{ active: index === 0 }"
                    ></li>
                  </ol>
                  <div class="carousel-inner">
                    <div
                      v-for="(image, index) in recipie.images"
                      :key="index"
                      :class="{ active: index === 0 }"
                      class="carousel-item"
                    >
                      <img class="d-block" :src="image" alt="First slide" />
                    </div>
                  </div>
                  <a
                    v-if="recipie.images.length > 1"
                    class="carousel-control-prev"
                    :href="'#carousel-' + recipie.id"
                    role="button"
                    data-slide="prev"
                  >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    v-if="recipie.images.length > 1"
                    class="carousel-control-next"
                    :href="'#carousel-' + recipie.id"
                    role="button"
                    data-slide="next"
                  >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>

              <div class="recipie-body">
                <h4 class="recipie-title">{{ recipie.name }}</h4>
                <p class="card-text">
                  {{ recipie.caption }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'Recipie',
  props: {
    recipie: {
      id: String,
      name: String,
      caption: String,
      thumbnail: String,
      images: [],
    },
  },
  computed: {
    shortCaption() {
      return this.recipie.caption.substring(0, 120);
    },
    carouselElement() {
      return $(`#carousel- + ${this.recipie.id}`);
    },
    modalElement() {
      return $(`#modal-${this.recipie.id}`);
    },
  },
  mounted() {
    this.carouselElement.on('slide.bs.carousel', function () {
      this.modalElement.focus();
    });
    this.carouselElement.on('click', function () {
      this.modalElement.focus();
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  object-fit: cover;
}

.col-sm {
  padding-top: 1em;
  padding-bottom: 1em;
}

.card-horizontal {
  display: flex;
  align-items: stretch;
  align-content: stretch;
}

.carousel-item img {
  width: 100%;
}

.recipie-slides {
  flex: 1;
  width: 100%;
}

.recipie-body {
  flex: 1;
  min-height: 1px;
  padding: 1.25rem;
}

.recipie-title {
  margin-bottom: 0.75rem;
}

.recipie-text:last-child {
  margin-bottom: 0;
}
</style>
