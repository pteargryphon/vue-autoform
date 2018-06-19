<template>
    <v-text-field ref="timeField" type="time" prepend-icon="access_time" v-model="model" :min="min" :max="max" @input="onInput" pattern="[0-9]{2}:[0-9]{2}"></v-text-field>

</template>

<script>
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
            }
        },
        computed: {
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

        },
        methods: {
            onInput (val) {
                this.$emit('input', this.model)
            },
            formatDate(date) {
                return new Date(date).toLocaleDateString()
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
