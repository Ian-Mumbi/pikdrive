<template>
  <div class="container">
    <p v-if="rows.length === 0">You have no items for this category yet!</p>
    <table class="table" v-if="rows.length > 0">
      <thead class="thead-dark">
        <tr>
          <th
            scope="col"
            v-for="col in [{ label: '#', path: 'listing' }, ...columns]"
            :key="col.path"
          >
            {{ col.label }}
          </th>
        </tr>
      </thead>
      <tbody v-for="(row, index) in rows" :key="row.id">
        <th scope="row">{{ index + 1 }}</th>
        <td v-for="col in columns" :key="col.path">
          <p v-if="col.path">{{ row[col.path] }}</p>
          <p v-if="col.other">
            <button class="button" @click="clickButton(row)">
              {{ col.other }}
            </button>
          </p>
        </td>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    columns: Array,
    rows: Array,
  },
  methods: {
    clickButton(row) {
      this.$emit("click-button", row);
    },
  },
};
</script>

<style scoped>
.container {
  margin: 3rem auto;
}
.button,
.button:active,
.button:focus {
  border: none;
  padding: 0.8rem 1.5rem;
  background-color: var(--color-primary);
  color: #fff;
  border-radius: 5rem;
  font-size: 1.8rem;
  display: inline-block;
}
</style>
