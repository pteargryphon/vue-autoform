<template>
    <v-layout row wrap>
        <v-flex xs12 md6>
            <v-text-field
                    :label="longitudeLabel"
                    type="number"
                    step="0.00000001"
                    min="-85.05112878"
                    max="85.05112878"
                    v-model="longitudeModel"
                    @input="onInput">
            </v-text-field>
        </v-flex>
        <v-flex xs12 md6>
            <v-text-field
                    :label="latitudeLabel"
                    type="number"
                    step="0.00000001"
                    min="-180"
                    max="180"
                    v-model="latitudeModel"
                    @input="onInput">
            </v-text-field>
        </v-flex>
    </v-layout>
</template>

<script>
    import _ from 'lodash';
    import moment from 'moment';
    import Locale from '../../locales/index'
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
                this.model = this.schema.defaultValue
                this.$emit('input', this.model);
            }
        }
    }
</script>
