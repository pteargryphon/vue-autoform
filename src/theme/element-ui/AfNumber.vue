<template>
    <!--
    <el-input-number
            v-model="num1"
            @change="onInput"
            :min="min"
            :max="max"
            :step="step">

    </el-input-number>-->
    <el-form-item :label="label" :required="required" :prop="schema.name">
        <el-input
                v-bind="extras"
                type="number"
                :min="min"
                :max="max"
                :step="step"
                v-model="model"
                @change="onInput">
            <template v-if="schema.prefix" slot="prepend">
                {{schema.prefix}}
            </template>
            <template v-if="schema.suffix" slot="append">
                {{schema.suffix}}
            </template>
        </el-input>
    </el-form-item>


</template>

<script>
    import _ from 'lodash';
    import Locale from '../../locales';
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
                type: Number
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
            step() {
                return this.schema.step || 1;
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
                let messages = Locale[this.locale];
                let items = [];
                if(this.schema.max) {
                    items.push( (v) => v <= this.schema.max || Locale.format(messages.maxNumber, this.label, this.schema.max) )
                }
                if(this.schema.min) {
                    items.push( (v) => v >= this.schema.min || Locale.format(messages.minNumber, this.label, this.schema.min) )
                }
                return items
            }
        },
        methods: {
            parse( val ) {
                if(_.isNumber(val)) {
                    return val;
                }

                if(_.isString(val)) {
                    if(_.isSafeInteger(this.step)) {
                        return parseInt(val, 10);
                    }
                    return parseFloat(val);
                }

                return val;
            },
            onInput (e) {
                this.model = this.parse(this.model);
                this.$emit('input', this.model)
            }
        },
        mounted() {
            if(!this.value && this.schema.defaultValue) {
                this.model = this.schema.defaultValue
            }
        }
    }
</script>
<style>
    input[type=number] {
        width: 100%;
    }
</style>