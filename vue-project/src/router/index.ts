import { createRouter, createWebHistory } from "vue-router";
import CandidateDetails from "../views/CandidateDetails.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: CandidateDetails,
    },
  ],
});

export default router;
