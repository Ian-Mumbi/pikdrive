<template>
  <h2 class="title-page">Products</h2>
  <router-link to="/" class="btn">Home</router-link>
  <button class="button" @click="toggleForm">Add Product</button>

  <Form
    @form-data="addProduct"
    v-if="showForm"
    :inputs="{ name, description, quantity }"
    :labels="labels"
  />
  <Table
    @click-button="deleteProduct"
    v-if="!showForm"
    :columns="columns"
    :rows="rows"
  />
</template>

<script>
import Table from "../components/Table";
import Form from "../components/Form";
export default {
  name: "Products",
  components: {
    Table,
    Form,
  },
  methods: {
    async fetchProducts() {
      const res = await fetch(`${process.env.VUE_APP_API_URL}/products`);

      const data = await res.json();

      return data;
    },

    toggleForm() {
      this.showForm = !this.showForm;
    },

    async addProduct(product) {
      const res = await fetch(`${process.env.VUE_APP_API_URL}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      const data = await res.json();

      this.rows = [...this.rows, data];

      this.showForm = false;
    },

    async deleteProduct(col) {
      const res = await fetch(
        `${process.env.VUE_APP_API_URL}/products/${col._id}`,
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
    this.rows = await this.fetchProducts();
  },
  data() {
    return {
      columns: [
        { label: "Name", path: "name" },
        { label: "Description", path: "description" },
        { label: "Quantity", path: "quantity" },
        { label: "Delete", other: "Delete" },
      ],
      rows: [],
      name: "",
      description: "",
      quantity: "",
      labels: ["Name", "Description", "Quantity"],
      showForm: false,
    };
  },
};
</script>
