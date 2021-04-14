const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout"),
    // component: () => import("pages/EditSurat.vue"),

    children: [
      { path: "", component: () => import("pages/Index.vue") },
      {
        path: "laporan-baru",
        component: () => import("pages/LaporanBaru.vue"),
      },
      {
        path: "/surat",
        component: () => import("pages/ListSurat.vue"),
      },
      {
        path: "/surat/create",
        component: () => import("pages/CreateSurat.vue"),
      },
      {
        path: "/surat/edit/:id",
        props: true,
        component: () => import("pages/EditSurat.vue"),
      },
      {
        path: "/surat/:id",
        name: "detailSurat",
        component: () => import("pages/DetailSurat.vue"),
      },
      // {
      //   path: "/surat/detail/",
      //   component: () => import("pages/DetailSurat.vue"),
      // },
    ],
  },
  // {
  //   path: "/surat/detail/:id",
  //   name: "detailSurat",
  //   component: () => import("pages/DetailSurat.vue"),
  // },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
