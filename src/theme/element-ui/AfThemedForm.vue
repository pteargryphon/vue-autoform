<template>
    <el-form ref="form" v-model="model" label-position="top">
        <slot></slot>
    </el-form>
</template>

<script>

    export default {
        data() {
            return {
                model : this.value
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
                    this.$refs.form.validate((valid)=>{
                        resolve(valid);
                    });
                })
            },
            reset() {
                this.$refs.form.resetFields();
            }
        }
    }
</script>