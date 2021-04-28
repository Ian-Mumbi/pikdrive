import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home";
import Orders from "../views/Orders";
import TopSales from "../views/TopSales";
import Products from "../views/Products";
import Suppliers from "../views/Suppliers";
import ProductSuppliers from "../views/ProductSuppliers";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/orders",
    name: "Orders",
    component: Orders,
  },
  {
    path: "/topSales",
    name: "TopSales",
    component: TopSales,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/suppliers",
    name: "Suppliers",
    component: Suppliers,
  },
  {
    path: "/productSuppliers",
    name: "ProductSuppliers",
    component: ProductSuppliers,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
