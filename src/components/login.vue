<template >
    <form @submit.prevent="submit">
        <h2 class="text-center text-warning fw-bold">Log in</h2>
        <label>
            <input class="form-control mt-4" type="email" v-model="form.email" placeholder="Email" />
        </label>
        <label>
            <input class="form-control mt-4" type="password" v-model="form.password" placeholder="Password" />
        </label>
        <button class="btn btn-warning fw-bold fs-5" type="submit">
            <loader v-if="isLoading" small color="pink"></loader>
            <template v-else>
                Log in
            </template>
        </button>
    </form>
</template>

<script>
const initForm = () => ({
    email: null,
    password: null,
});
import Loader from "./loader.vue";

export default {
    name: "login",
    components: {
        Loader
    },
    props: {
        // usersLength: {
        //     type: Number,
        //     required: true,
        // },
        isLoading: {
            type: Boolean,
            required: false,
        },
    },
    data() {
        return {
            form: initForm(),
        };
    },
    methods: {
        submit() {
            this.$emit("submit", { ...this.form, id: this.usersLength + 1 });
            this.reset();
        },
        reset() {
            this.form = initForm();
        },
    },
};
</script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

label,
button {
    width: 300px;
    display: block;
    margin: 0 auto 15px;
}

input {
    width: 100%;
    display: block;
    padding: 5px;
    margin-top: 5px;
    box-sizing: border-box;
    border-radius: 5px;
    border-color: rgb(255, 255, 255);
}

/* input:valid { border-color: rgb(0, 185, 0); } */
input:invalid { border-color: rgb(196, 0, 0); }
input:focus-within::placeholder,textarea:focus-within::placeholder { font-weight: bold; }

button {
    padding: 10px;
}
</style>