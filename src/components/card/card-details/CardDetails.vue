<template>
  <div class="card__head">
    <div class="flex-align-items ui-card-head" @click="toggleCard">
      <img
        class="icon"
        src="../../../assets/images/Group11.svg"
        alt="transaction-icon"
      />
      Card details
      <img
        class="arrow-down"
        :class="{ 'arrow-up': !toggle }"
        src="../../../assets/images/down-arrow.svg"
        alt="down-arrow"
      />
    </div>

    <div class="ui-card-body" :class="{ show: toggle }" v-if="currItem">
      <p><b>Name:</b> {{ currItem.name }}</p>
      <p><b>Cardit Limit:</b> {{ currItem.cardLimit }}</p>
      <p><b>Spend:</b> {{ currItem.spend }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["currItem"],
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    toggleCard() {
      this.toggle = !this.toggle;
    },
  },
};
</script>
<style scoped lang="scss">
.card__head {
  margin-bottom: 24px;
}
.ui-card-head {
  padding: 24px;
  font-size: 14px;
  color: #0c365a;
  cursor: pointer;

  .icon {
    padding-right: 12px;
  }

  .arrow-down {
    margin-left: auto;
  }

  .arrow-up {
    transform: rotate(180deg);
  }
}

.ui-card-body {
  display: none;
  cursor: pointer;
  padding: 10px 24px;

  &.show {
    display: block;
  }
}
</style>
