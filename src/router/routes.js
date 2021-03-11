const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
  },
  {
    path: "/laporan-baru",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/LaporanBaru.vue") }],
  },
  {
    path: "/surat",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/ListSurat.vue") }],
  },
  {
    path: "/surat/create",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/CreateSurat.vue") }],
  },
  {
    path: "/surat/edit/:id",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/EditSurat.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
