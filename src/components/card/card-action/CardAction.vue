<template>
  <div class="card__head">
    <div class="flex-align-items ui-card-head">
      <div class="card__head__item" @click="freezCard">
        <img
          class="icon"
          src="../../../assets/images/freeze-card.svg"
          alt="freeze-icon"
        />
        <p class="text-center">Freeze card</p>
      </div>
      <div class="card__head__item">
        <img
          class="icon"
          src="../../../assets/images/Set-spend-limit.svg"
          alt="spend-icon"
        />
        <p class="text-center">Set spend limit</p>
      </div>
      <div class="card__head__item">
        <img
          class="icon"
          src="../../../assets/images/GPay.svg"
          alt="GPay-icon"
        />
        <p class="text-center">Add to GPay</p>
      </div>
      <div class="card__head__item">
        <img
          class="icon"
          src="../../../assets/images/Replace-card.svg"
          alt="Replace-icon"
        />
        <p class="text-center">Replace card</p>
      </div>
      <div class="card__head__item" @click="cancelCard">
        <img
          class="icon"
          src="../../../assets/images/Deactivate-card.svg"
          alt="Deactivate-icon"
        />
        <p class="text-center">Cancel card</p>
      </div>
    </div>
    <ui-modal @closed="modalStatus" :modalData="modalData" v-if="modalOpen">
      <template #default>
        <button class="submit" @click="submitted">Submit</button>
      </template>
    </ui-modal>
  </div>
</template>
<script>
export default {
  emits: ["submitfreez"],
  data() {
    return {
      modalData: [],
      modalOpen: false,
      modalVal: "",
    };
  },
  methods: {
    freezCard() {
      this.modalData = {
        title: "Freeze Card",
        body: "Are you sure to freeze this card?",
      };
      this.modalVal = "freeze";
      this.modalOpen = true;
    },
    cancelCard() {
      this.modalData = {
        title: "Cancel Card",
        body: "Are you sure to Cancel this card?",
      };
      this.modalVal = "cancel";
      this.modalOpen = true;
    },
    modalStatus() {
      this.modalOpen = false;
    },
    submitted() {
      this.$emit("submitfreez", this.modalVal);
      this.modalOpen = false;
    },
  },
};
</script>
<style scoped lang="scss">
.card__head {
  margin-bottom: 24px;
  @media (max-width: 768px) {
    margin-left: -30px;
    margin-right: -30px;
  }
}
.ui-card-head {
  padding: 20px 20px 10px;
  font-size: 14px;
  color: #0c365a;
  cursor: pointer;
  justify-content: center;
  margin-top: 30px;
  align-items: baseline;

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

  &.show {
    display: block;
  }
}
.card__head__item {
  word-break: break-word;
  position: relative;
  width: calc(20% - 10px);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100px;
}
.text-center {
  text-align: center;
}
button {
  border: 0;
  box-shadow: none;
  font-size: 16px;
  cursor: pointer;
}
button.submit {
  padding: 10px 20px;
  background-color: #01d167;
  color: white;
  border-radius: 4px;
}
</style>
