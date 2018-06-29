<template>
    <el-form-item :label="label" :required="required" :prop="schema.name">
        <el-date-picker
                v-bind="extras"
                clearable
                @change="onInput"
                v-model="model"
                type="date"
                :format="dateFormat"
                :picker-options="pickerOptions">
        </el-date-picker>
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
            value(newVal, oldVal) {
                this.model = this.value;
            }
        },
        props: {
            value : {
                type: String
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
            label() {
                return this.schema.label || this.schema.name;
            },
            min() {
                return this.schema.min || undefined
            },
            max() {
                return this.schema.max || undefined
            },
            rules() {
                return []
            },
            dateFormat() {
                return Locale[this.locale].elementUiDateFormat || 'yyyy/MM/dd'
            },
            pickerOptions() {
                return {
                    disabledDate : (time) => {
                        if(this.schema.min) {
                            const min = new Date(this.schema.min);
                            return time.getTime() < min.getTime();
                        }
                        if(this.schema.max) {
                            const max = new Date(this.schema.max);
                            return time.getTime() > max.getTime();
                        }
                        return false;
                    }
                }
            }
        },
        methods: {
            onInput (val) {
                let date = new Date(val);
                this.$emit('input', date.toJSON())
            }
        },
        mounted() {
            if(!this.value && this.schema.defaultValue) {
                this.model = this.schema.defaultValue;
                this.$emit('input', this.model)
            }
        }
    }
</script>
