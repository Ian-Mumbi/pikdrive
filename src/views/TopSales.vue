<template>
  <h2 class="title-page">TopSales</h2>
  <router-link to="/" class="btn">Home</router-link>
  <Table :columns="columns" :rows="rows" />
</template>

<script>
import Table from "../components/Table";
export default {
  name: "TopSales",
  components: {
    Table,
  },
  methods: {
    async fetchTopSales() {
      const res = await fetch(
        `${process.env.VUE_APP_API_URL}/orders/top-sales`
      );

      const data = await res.json();

      return data;
    },
  },
  async created() {
    this.rows = await this.fetchTopSales();
  },
  data() {
    return {
      columns: [
        { label: "Order #", path: "orderNumber" },
        { label: "Count", path: "count" },
      ],
      rows: [],
    };
  },
};
</script>
