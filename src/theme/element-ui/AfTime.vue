<template>
    <el-form-item :label="label" :required="required" :prop="schema.name">
        <el-time-picker
                v-bind="extras"
                clearable
                v-model="modelDate"
                :picker-options="pickerOptions"
                format="HH:mm">
        </el-time-picker>
    </el-form-item>
</template>

<script>
    import moment from 'moment'
    export default {
        data() {
            return {
                menu : false,
                model : this.value,
            }
        },
        watch : {
            value(newVal) {
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
            pickerOptions() {
                let options = {};
                if(this.min) {
                    options.minTime = this.min;
                }
                if(this.max) {
                    options.maxTime = this.max;
                }
                options.step = this.step;
                console.log(options);
                return options;
            },
            modelDate : {
                get() {
                    if(!this.model) return null;
                    let vals = this.model.split(":");
                    if(vals.length === 2) {
                        moment.locale(this.momentLocale)
                        let val = moment();
                        val.hour(parseInt(vals[0]));
                        val.minute(parseInt(vals[1]));
                        return val.toDate();
                    }
                    return null;
                },
                set(newVal) {
                    let val = moment(newVal);
                    this.model = val.format('HH:mm');
                    this.$emit('input', this.model)
                }
            },
            momentLocale() {
                return this.locale ? this.locale.substring(0,2) : 'en';
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
            step() {
                return this.schema.step || '00:30'
            },
            rules() {
                return []
            },

        },
        methods: {
            onInput (val) {
                this.$emit('input', this.model)
            }
        },
        beforeMount() {
            if(!this.value && this.schema.defaultValue) {
                this.model = this.schema.defaultValue;
                this.$emit('input', this.model)
            }
        }
    }
</script>
