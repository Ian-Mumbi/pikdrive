<template>
  <h2 class="title-page">Suppliers</h2>
  <router-link to="/" class="btn">Home</router-link>
  <button class="button" @click="toggleForm">Add Product</button>
  <Form
    @form-data="addSupplier"
    v-if="showForm"
    :inputs="{ name }"
    :labels="labels"
  />
  <Table
    @click-button="deleteSupplier"
    v-if="!showForm"
    :columns="columns"
    :rows="rows"
  />
</template>

<script>
import Table from "../components/Table";
import Form from "../components/Form";

export default {
  name: "Suppliers",
  components: {
    Table,
    Form,
  },
  methods: {
    toggleForm() {
      this.showForm = !this.showForm;
    },

    async fetchSuppliers() {
      const res = await fetch(`${process.env.VUE_APP_API_URL}/suppliers`);

      const data = await res.json();

      this.rows = [...this.rows, data];

      return data;
    },

    async addSupplier(supplier) {
      const res = await fetch(`${process.env.VUE_APP_API_URL}/suppliers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(supplier),
      });

      const data = await res.json();

      this.rows = [...this.rows, data];

      this.showForm = false;
    },

    async deleteSupplier(col) {
      const res = await fetch(
        `${process.env.VUE_APP_API_URL}/suppliers/${col._id}`,
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
    this.rows = await this.fetchSuppliers();
  },
  data() {
    return {
      columns: [
        { label: "Name", path: "name" },
        { label: "Delete", other: "Delete" },
      ],
      rows: [],
      name: "",
      labels: ["Supplier's Name"],
      showForm: false,
    };
  },
};
</script>
