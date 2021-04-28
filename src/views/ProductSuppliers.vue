<template>
  <h2 class="title-page">Product Suppliers</h2>
  <router-link to="/" class="btn">Home</router-link>
  <p class="paragraph">
    Note you require administrative priviledges for this!!
  </p>
  <button class="button" @click="toggleForm">
    {{ !showForm ? "Add Product & Supplier" : "Close Form" }}
  </button>
  <Form
    @form-data="addProductSupplier"
    v-if="showForm"
    :inputs="{ product, supplier }"
    :labels="labels"
  />
  <Table v-if="!showForm" :columns="columns" :rows="rows" />
</template>

<script>
import Table from "../components/Table";
import Form from "../components/Form";

export default {
  name: "ProductSuppliers",
  components: {
    Table,
    Form,
  },
  methods: {
    toggleForm() {
      this.showForm = !this.showForm;
    },

    async fetchProductSuppliers() {
      const res = await fetch(`${process.env.VUE_APP_API_URL}/productSupplier`);

      const data = await res.json();

      return data.map((obj) => ({
        product: obj.product.name,
        supplier: obj.supplier.name,
      }));
    },

    async addProductSupplier(productSupplier) {
      const res = await fetch(
        `${process.env.VUE_APP_API_URL}/productSupplier`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productSupplier),
        }
      );

      const data = await res.json();

      this.rows = [...this.rows, data];

      this.showForm = false;
    },
  },
  async created() {
    this.rows = await this.fetchProductSuppliers();
  },
  data() {
    return {
      columns: [
        { label: "Product", path: "product" },
        { label: "Supplier", path: "supplier" },
      ],
      rows: [],
      supplier: "",
      product: "",
      labels: ["ProductID", "SupplierID"],
      showForm: false,
    };
  },
};
</script>

<style scoped>
.paragraph {
  color: var(--color-primary-dark);
  font-style: italic;
  text-transform: uppercase;
  padding: 1rem 2rem;
}
</style>
