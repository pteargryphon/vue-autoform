<template>
    <div>
        <label>{{label}}</label>
        <wysiwyg :id="id"
                 v-model="model"
                 @input="$emit('input', $event)"
        ></wysiwyg>
    </div>


</template>

<script>
    import "vue-wysiwyg/dist/vueWysiwyg.css";
    export default {
        data() {
            return {
                model : this.value,
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
            id() {
                return this.label.replace(' ','');
            },
            label() {
                return this.schema.label || this.schema.name;
            }
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

