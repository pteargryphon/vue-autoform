<template>
    <v-text-field ref="dateField" :label="label" type="date" v-model="dateVal" prepend-icon="event" :min="min" :max="max"></v-text-field>
</template>

<script>
    import moment from 'moment'
    import Locale from '../../locales'
    export default {
        data() {
            return {
                menu : false,
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
                type: String
            },
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
            dateVal : {
                get() {
                    return this.model ? moment(this.model).format("YYYY-MM-DD") : null;
                },
                set(newVal) {
                    if(!newVal) {
                        this.model = null;
                        this.$emit('input', null);
                        return;
                    }

                    let date = moment.parseZone(newVal).toISOString();
                    this.model = date;
                    this.$emit('input', date);
                }
            },
            momentLocale() {
                return this.locale ? this.locale.substring(0,2) : 'en';
            },
            label() {
                return this.schema.label || this.schema.name;
            },
            min() {
                return this.schema.min ? moment(this.schema.min).format('YYYY-MM-DD') : undefined
            },
            max() {
                return this.schema.max ? moment(this.schema.max).format('YYYY-MM-DD') : undefined
            },
            rules() {
                return []
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
