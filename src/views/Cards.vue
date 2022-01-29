<template>
  <div class="text-left asp_card">
    <img
      src="../assets/images/Logo-mobile.svg"
      class="mobile-logo"
      alt="logo"
    />
    Available balance
    <app-card />
  </div>
</template>

<script>
import Card from "@/components/card/Card.vue";
export default {
  components: {
    "app-card": Card,
  },
};
</script>
<style scoped lang="scss">
.mobile-logo {
  display: none;
  @media (max-width: 768px) {
    display: block;
    margin-left: auto;
  }
}
</style>
