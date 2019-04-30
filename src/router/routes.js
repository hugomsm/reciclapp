const routes = [{
  path: "/",
  component: () => import("layouts/layoutLogin.vue"),
  children: [{
      path: "",
      component: () => import("pages/Index.vue")
    },
    {
      path: "home",
      component: () => import("layouts/layoutMenu.vue"),
      children: [{
          path: "pageMapa",
          component: () => import("pages/pageMapa.vue")
        },
        {
          path: "pageNovo",
          component: () => import("pages/pageNovo.vue")
        },
        {
          path: "pageCalculadora",
          component: () => import("pages/pageCalculadora.vue")
        },
        {
          path: "pageLoja",
          component: () => import("pages/pageLoja.vue")
        },
        {
          path: "pageEcopontos",
          component: () => import("pages/pageEcopontos.vue")
        },
        {
          path: "pageCooperativas",
          component: () => import("pages/pageCooperativas.vue")
        },
        {
          path: "pageInfo",
          component: () => import("pages/pageInfo.vue")
        }
      ]
    }
  ]
}];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
