<template>
  <div class="main">
    <section class="main__sidebar">
      <app-header />
    </section>
    <section class="main__content">
      <router-view />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from "@/components/header/TheHeader.vue";

export default {
  name: "app",
  components: {
    "app-header": TheHeader,
  },
};
</script>

<style lang="scss">
body {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  @media (max-width: 768px) {
    color: white;
  }
}
body {
  margin: 0;
  padding: 0;
}
.main {
  display: flex;
  &__sidebar {
    width: 340px;
    background-color: #0c365a;
    @media (max-width: 768px) {
      display: none;
    }
  }
  &__content {
    padding: 60px 60px 90px;
    width: calc(100% - 340px);
    @media (max-width: 1024px) {
      padding: 30px 30px 40px;
    }
    @media (max-width: 768px) {
      width: 100%;
      background-color: #0c365a;
    }
  }
}
.flex-align-items {
  display: flex;
  align-items: center;
}
.mr1 {
  margin-right: 0.5rem;
}
.mt1 {
  margin-right: 0.5rem !important;
}
.pt1 {
  padding-top: 1rem !important;
}
.pb1 {
  padding-bottom: 1rem;
}
.pl1 {
  padding-left: 1rem;
}
.pr1 {
  padding-right: 1rem;
}
.flex {
  display: flex;
}
.text-left {
  text-align: left;
}
.ui-card {
  border-radius: 8px;
  border: 1px solid #fcfcfc;
  box-shadow: 0px 2px 12px #00000014;
  &-head {
    border-radius: 8px;
    background-color: #f5f9ff;
    border: 1px solid #f5f5f5;
    display: flex;
  }
  &-body {
    border: 1px solid #f0f0f0;
  }
}
.clear:after {
  content: "";
  clear: both;
}
.card_number span {
  margin-right: 25px;
  display: inline-block;
}
button {
  cursor: pointer;
}
</style>
