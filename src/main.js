import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Modal from "./components/modal/Modal.vue";
const app = createApp(App);
app.component("ui-modal", Modal);

app.use(router);
app.mount("#app");
