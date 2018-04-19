<template>
    <el-row>
        <el-col :xs="24" :md="12">
            <label>{{longitudeLabel}}</label>
            <el-input-number v-model="num1" @change="onInput" :min="-85.051128" :max="85.051128" :step="0.000001" controls-position="right"></el-input-number>
        </el-col>
        <el-col :xs="24" :md="12">
            <label>{{latitudeLabel}}</label>
            <el-input-number v-model="num2" @change="onInput" :min="-180" :max="180" :step="0.000001"  controls-position="right"></el-input-number>
        </el-col>
    </el-row>
</template>

<script>
    import _ from 'lodash';
    import moment from 'moment';
    import Locale from '../../locales/index'
    export default {
        data() {
            return {
                num1 : 0,
                num2 : 0,
                model : this.value
            }
        },
        watch : {
            value() {
                this.model = this.value;
                this.num1 = this.longitudeModel;
                this.num2 = this.latitudeModel;
            },
            num1(newVal) {
                this.longitudeModel = newVal;
            },
            num2(newVal) {
                this.latitudeModel = newVal;
            }
        },
        props: {
            value : {},
            schema: {
                type: Object,
                required: true
            },
            locale: {
                type: String,
                default : 'en-us'
            }
        },
        computed: {
            latitudeModel : {
                get() {
                    return this.model ? this.model.coordinates[1] : null;
                },
                set(val) {
                    if(!this.model) {
                        this.model = {
                            type : 'Point',
                            coordinates : [0,0]
                        }
                    }
                    if(val || val === 0) {
                        this.model.coordinates[1] = parseFloat(val);
                    } else {
                        this.model.coordinates[1] = 0;
                    }
                }
            },
            longitudeModel : {
                get() {
                    return this.model ? this.model.coordinates[0] : null;
                },
                set(val) {
                    if(!this.model) {
                        this.model = {
                            type : 'Point',
                            coordinates : [0,0]
                        }
                    }
                    if(val || val === 0) {
                        this.model.coordinates[0] = parseFloat(val);
                    } else {
                        this.model.coordinates[0] = 0;
                    }
                }
            },
            longitudeLabel() {
                let messages = Locale[this.locale];
                return messages ? messages.longitude : 'Longitude';
            },
            latitudeLabel() {
                let messages = Locale[this.locale];
                return messages ? messages.latitude : 'Latitude';
            },
            label() {
                return this.schema.label || this.schema.name;
            }
        },
        methods: {
            onInput (val) {
                this.$emit('input', this.model)
            }
        },
        mounted() {
            if(!this.value && this.schema.defaultValue) {
                this.model = this.schema.defaultValue;
                this.$emit('input', this.model);
            }
        }
    }
</script>
