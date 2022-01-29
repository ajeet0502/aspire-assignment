<template>
  <div>
    <button @click="addCard">
      <img src="../../../assets/images/box.svg" class="mr1" /> New card
    </button>
    <ui-modal @closed="modalStatus" :modalData="modalData" v-if="modalOpen">
      <template #body>
        <form @submit.prevent="submitForm">
          <div
            class="form-group"
            :class="{ invalid: userNameValidity === 'invalid' }"
          >
            <label for="exampleInputEmail1">Card Name</label>
            <input
              id="exampleInputEmail1"
              class="form-control"
              placeholder="Card Name"
              type="text"
              v-model.trim="userName"
              @blur="validateInput"
            />
            <p v-if="userNameValidity === 'invalid'">
              Please enter a valid name!
            </p>
          </div>
          <div class="mt1 pt1">
            <button class="submit" type="submit">Submit</button>
          </div>
        </form>
      </template>
    </ui-modal>
  </div>
</template>
<script>
export default {
  emits: ["submitData"],
  data() {
    return {
      modalOpen: false,
      modalData: [],
      userName: "",
      userNameValidity: "pending",
    };
  },
  methods: {
    modalStatus() {
      this.modalOpen = false;
    },
    addCard() {
      this.modalData = {
        title: "Add Card",
        body: "",
        bodySlot: true,
      };
      this.modalOpen = true;
    },
    submitForm() {
      this.validateInput();
      this.$emit("submitData", this.userName);
      this.modalOpen = false;
    },
    validateInput() {
      if (this.userName === "") {
        this.userNameValidity = "invalid";
      } else {
        this.userNameValidity = "valid";
      }
    },
  },
};
</script>
<style scoped lang="scss">
button {
  background-color: #325baf;
  border-radius: 4px;
  padding: 8px 12px;
  color: white;
  border: none;
  display: flex;
  font-size: 13px;
  font-weight: bold;
}
.form-control {
  display: block;
  width: 92%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
label {
  display: block;
  margin-bottom: 0.5rem;
  text-align: left;
}
.invalid {
  p {
    color: red;
    text-align: left;
  }
}
</style>
