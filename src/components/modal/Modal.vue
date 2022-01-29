<template>
  <teleport to="body">
    <div></div>
    <dialog class="ui-modal" open>
      <header class="ui-modal-head" v-if="modalData.title">
        {{ modalData.title ? modalData.title : "Modal" }}
        <button class="close" @click="$emit('closed')">X</button>
      </header>
      <section class="ui-modal-body" v-if="modalData.body">
        {{ modalData.body ? modalData.body : "Are you sure?" }}
      </section>
      <section class="ui-modal-body" v-if="modalData.bodySlot">
        <slot name="body" />
      </section>
      <footer class="ui-modal-footer">
        <button class="close" @click="$emit('closed')">Cancel</button>
        <slot />
      </footer>
    </dialog>
  </teleport>
</template>
<script>
export default {
  inheritAttrs: false,
  props: ["modalData"],
  emits: ["closed"],
  data() {
    return {
      modalOpen: false,
    };
  },
};
</script>
<style lang="scss" scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}
dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  font-size: 16px;
}

header {
  background-color: #01d167;
  color: white;
  width: 100%;
  padding: 1rem;
  font-weight: bold;
  text-align: left;
  .close {
    color: white;
    position: absolute;
    right: 7px;
    top: 10px;
  }
}

header h2 {
  margin: 0;
}

section {
  padding: 2rem;
  font-weight: bold;
}

footer {
  padding: 20px 20px 30px;
  display: flex;
  justify-content: right;
  align-items: center;
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
button.close {
  padding: 10px 20px;
  background-color: transparent;
}
@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>
