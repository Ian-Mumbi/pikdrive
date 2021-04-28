<template>
  <h2 class="title-page">Orders</h2>
  <router-link to="/" class="btn">Home</router-link>
  <button class="button" @click="toggleForm">
    {{ !showForm ? "Add New Order" : "Close Form" }}
  </button>
  <Form
    @form-data="addOrder"
    v-if="showForm"
    :inputs="{ orderNumber, count }"
    :labels="labels"
  />
  <Table
    @click-button="deleteOrder"
    v-if="!showForm"
    :columns="columns"
    :rows="rows"
  />
</template>

<script>
import Table from "../components/Table";
import Form from "../components/Form";

export default {
  name: "Order",
  components: {
    Table,
    Form,
  },
  methods: {
    toggleForm() {
      this.showForm = !this.showForm;
    },

    async fetchOrders() {
      const res = await fetch(`${process.env.VUE_APP_API_URL}/orders`);

      const data = await res.json();

      return data;
    },

    async addOrder(order) {
      console.log("order ", order);
      const res = await fetch(`${process.env.VUE_APP_API_URL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      const data = await res.json();

      this.rows = [...this.rows, data];

      this.showForm = false;
    },

    async deleteOrder(col) {
      const res = await fetch(
        `${process.env.VUE_APP_API_URL}/orders/${col._id}`,
        {
          method: "DELETE",
        }
      );

      res.status === 200
        ? (this.rows = this.rows.filter((row) => row._id !== col._id))
        : alert("Error deleting item!");
    },
  },
  async created() {
    this.rows = await this.fetchOrders();
  },
  data() {
    return {
      columns: [
        { label: "Order #", path: "orderNumber" },
        { label: "Count", path: "count" },
        { label: "Delete", other: "Delete" },
      ],
      rows: [],
      orderNumber: "",
      count: "",
      labels: ["Order Number", "Count"],
      showForm: false,
    };
  },
};
</script>
