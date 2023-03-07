const app = Vue.createApp({
    // data: all the data for the app, must return an object
    data: function() {
        return {
            newItem: {
                name: '',
                qty: 1,
                category: 'need',
                purchased: false,
            },
            shoppingList: [
                {name: 'Hammer', qty: 1, purchased: true, category: 'need'},
                {name: 'Nails', qty: 10, purchased: false, category: 'need'},
                {name: 'Sliding Compound Miter Saw', qty: 1, purchased: false, category: 'want'},
            ],
        }
    },

    // methods: usually "events" triggered by v-on:
    methods: {

    },

    // computed: values that are updated and cached if dependencies change
    computed: {

    },

    //mounted:  called after the instance has been mounted,
    mounted: function () {

    },

    // watch:   calls the function if the value changes
    // https://travishorn.com/add-localstorage-to-your-vue-app-in-2-lines-of-code-56eb2c9f371b
    watch: {

    }
});
