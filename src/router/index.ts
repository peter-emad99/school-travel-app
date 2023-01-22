import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import type { RouteRecordRaw } from "vue-router";
import NotFound from "@/views/NotFound.vue";

let routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    alias: ["/home", "/main"],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/destination/:id/:slug",
    name: "destinations",
    component: () => import("@/views/DestinationView.vue"),
    props: (route) => ({
      ...route.params,
      id: +route.params.id,
    }),
    children: [
      {
        path: ":expSlug",
        name: "experiences",
        component: () => import("@/views/ExperienceView.vue"),
        props: (route) => ({
          ...route.params,
          id: +route.params.id,
        }),
      },
    ],
    beforeEnter: (to, from) => {},
  },
];

// data.destinations.forEach((dest) =>
//   routes.push({
//     path: `/${dest.slug}`,
//     name: dest.name,
//     component: () => import("@/views/TravelPage.vue"),
//     props: { destination: dest },
//     children: dest.experiences.map((exp): RouteRecordRaw => {
//       return {
//         path: `${exp.slug}`,
//         component: () => import("@/components/ExperienceView.vue"),
//         props: { experience: exp },
//       };
//     }),
//   })
// );

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0, behavior: "smooth" }), 300);
      })
    );
  },
});

export default router;
