<template>
    <v-container>
        <span class="caption">{{label}}</span>
        <v-layout row>
            <v-flex xs6>
                <v-text-field ref="dateField" type="date" v-model="dateVal" prepend-icon="event" :min="min" :max="max"></v-text-field>
            </v-flex>
            <v-flex xs6>
                <v-text-field ref="timeField" type="time" v-model="timeVal" :min="timeMin" :max="timeMax"  pattern="[0-9]{2}:[0-9]{2}"></v-text-field>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
    import moment from "moment";
    import Locale from "../../locales";
    export default {
        data() {
            return {
                model: this.value
            };
        },
        watch: {
            value(newVal) {
                this.model = this.value;
            },

        },
        props: {
            value: {
                type: String
            },
            schema: {
                type: Object,
                required: true
            },
            locale: {
                type: String,
                default: "en-us"
            }
        },
        computed: {
            dateVal : {
                get() {
                    return this.model ? moment.parseZone(this.model).format("YYYY-MM-DD") : null;
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

            timeVal : {
                get() {
                    return this.model ? moment.parseZone(this.model).format("HH:mm") : null;
                },
                set(newVal) {
                    if(!newVal) {
                        this.model = moment.parseZone(this.model).hour(0).minute(0).toISOString();
                        this.$emit('input', this.model);
                        return;
                    }

                    let spl = newVal.split(":");
                    if(spl.length !== 2) {
                        this.model = moment.parseZone(this.model).hour(0).minute(0).toISOString();
                        this.$emit('input', this.model);
                        return;
                    }

                    let date = moment.parseZone(this.model).hour(parseInt(spl[0])).minute(parseInt(spl[1])).toISOString();
                    this.model = date;
                    this.$emit('input', date);
                }
            },
            momentLocale() {
                return this.locale ? this.locale.substring(0, 2) : "en";
            },
            label() {
                return this.schema.label || this.schema.name;
            },
            min() {
                console.log("min", this.schema.min);
                return this.schema.min ? moment.parseZone(this.schema.min).format("YYYY-MM-DD") : undefined;
            },
            max() {
                return this.schema.max ? moment.parseZone(this.schema.max).format("YYYY-MM-DD") : undefined;
            },
            timeMin() {

                let current = moment.parseZone(this.model);
                let min = moment.parseZone(this.schema.min);
                if(current.year() === min.year() && current.month() === min.month() && current.day() === min.day()) {
                    return [min.hour(),min.minute()].join(":")
                }
                return undefined;//this.schema.min || undefined;
            },
            timeMax() {
                let current = moment.parseZone(this.model);
                let max = moment.parseZone(this.schema.max);
                if(current.year() === max.year() && current.month() === max.month() && current.day() === max.day()) {
                    return [max.hour(),max.minute()].join(":")
                }
                return undefined;//this.schema.max || undefined;
            },
            rules() {
                return [];
            }
        },
        methods: {
            onInput(val) {
                this.$emit("input", this.model);
            },
            formatDate(date) {
                return new Date(date).toLocaleDateString();
            }
        },
        beforeMount() {
            if (!this.value && this.schema.defaultValue) {
                this.model = this.schema.defaultValue;
                this.$emit("input", this.model);
            }
        }
    };
</script>
