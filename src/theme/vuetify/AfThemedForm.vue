<template>
    <v-form v-model="valid" ref="form" lazy-validation>
        <slot></slot>
    </v-form>
</template>

<script>
    export default {
        data() {
            return {
                model : this.value,
                valid : true
            }
        },
        watch : {
            value() {
                this.model = this.value;
            }
        },
        props: {
            value : {
                type: Object
            }
        },
        methods : {
            validate() {
                return new Promise((resolve) => {
                    const valid = this.$refs.form.validate();
                    resolve(valid);
                });
            },
            reset() {
                this.$refs.form.reset();
            }
        }
    }
</script>