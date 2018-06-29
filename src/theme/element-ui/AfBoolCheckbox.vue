<template>
    <el-form-item :label="label" :required="required" :prop="schema.name">
        <el-checkbox v-bind="extras" v-model="model" @change="onInput">{{currentValueLabel}}</el-checkbox>
    </el-form-item>
</template>

<script>
    import Locale from '../../locales'
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
                type: Boolean
            },
            schema: {
                type: Object,
                required: true
            },
            locale: {
                type: String,
                default : 'en-us'
            },
            required : {
                type: Boolean,
                default: false
            }
        },
        computed: {
            extras() {
                return this.schema.extras ? this.schema.extras : {}
            },
            currentValueLabel() {
                return this.model ? this.trueLabel : this.falseLabel
            },
            trueLabel() {
                return this.schema.trueLabel || Locale[this.locale].yes;
            },
            falseLabel() {
                return this.schema.falseLabel || Locale[this.locale].no;
            },
            label() {
                return this.schema.label || this.schema.name;
            },
        },
        methods: {
            onInput (e) {
                this.$emit('input', this.value)
            }
        },
        mounted() {
            if(!this.value && this.schema.defaultValue) {
                this.model = this.schema.defaultValue
            }
        }
    }
</script>
