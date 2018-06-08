import AfForm from './AfForm.vue';
import wysiwyg from "vue-wysiwyg";


const AutoForm  = {
    install(Vue, options) {
        Vue.use(wysiwyg, {
            hideModules: {
                headings: true,
                code : true,
                orderedList : true,
                unorderedList : true,
                image : true,
                table : true,
                removeFormat : true,
                separator : true
            },
        });
        Vue.component(AfForm.name, AfForm);
    }
};

export default AutoForm;