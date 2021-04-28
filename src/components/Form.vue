<template>
  <section>
    <div class="form-container">
      <div class="book">
        <div class="form">
          <form @submit="onSubmit">
            <div
              class="group"
              v-for="(input, index) in Object.keys(inputs)"
              :key="index"
            >
              <input
                type="text"
                class="input"
                v-model="data[input]"
                :placeholder="labels[index]"
                required
                max="45"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Form",
  props: {
    inputs: Object,
    labels: Array,
  },
  data() {
    return {
      data: { ...this.inputs },
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      this.$emit("form-data", this.data);
    },
  },
};
</script>

<style scoped>
section {
  padding: 15rem 0;
  width: 100%;
}

.form-container {
  padding: 0 10rem;
  margin-top: -8rem;
}

.book {
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url("../assets/img.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 3px;
  overflow: hidden;
  flex-direction: column;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.35);

  height: 50rem;
}

.form {
  width: 50%;
  padding: 6rem;
}

.input {
  font-size: 1.5rem;
  padding: 1.5rem 1.5rem;
  border-radius: 2px;
  background-color: var(--color-white);
  border: none;
  border-bottom: 0.3rem solid transparent;
  width: 90%;
  display: block;
  margin-bottom: 2rem;
}

@media only screen and (max-width: 56.25em) {
  .input {
    width: 100%;
  }

  .form {
    /* width: 100%; */
    padding: 2rem;
  }

  .button {
    width: 100%;
  }
}

@media only screen and (max-width: 37.5em) {
  .input {
    width: 100%;
  }

  .form {
    width: 100%;
    padding: 2rem;
  }
  .button {
    width: 100%;
  }
}

.input:focus {
  outline: none;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.35);
  border-bottom: 0.3rem solid var(--color-green);
}

.input:focus:invalid {
  border-bottom: 0.3rem solid var(--color-primary-dark);
}
.input::-webkit-input-placeholder {
  color: var(--color-grey-dark-1);
}

button {
  border: none;
  width: 90%;
  display: block;
  padding: 1.5rem 2rem;
  border-radius: 5px;
  margin-top: 5rem;
  font-size: 1.5rem;
  color: var(--color-grey-dark-1);
  text-transform: uppercase;
}
</style>
