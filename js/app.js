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
        addIt(){
            this.shoppingList.push(this.newItem);
            //clear the form
            this.newItem = {
                name: '',
                qty: 1,
                cataegory: 'need',
                purchased: false,
            }
        },
        removeItem(item){
            this.shoppingList.splice(this.shoppingList.indexOf(item), 1);
        }
    },

    // computed: values that are updated and cached if dependencies change
    computed: {
    needList: function() {
        return this.shoppingList.filter(function(item){
            // return true if want to keep the item in the returned list
            return item.category === 'need' && !item.purchased;
        });
    },
    gotList(){
        return this.shoppingList.filter(function(item){
            // return true if want to keep the item in the returned list
            return item.purchased;
        });
    },
        wantList(){
            return this.shoppingList.filter(function(item){
                // return true if want to keep the item in the returned list
                return item.category === 'want' && !item.purchased;
            });
        },
    },


    //mounted:  called after the instance has been mounted,
    mounted: function () {
        if(localStorage.getItem('shoppingList')){
            this.shoppingList = JSON.parse(localStorage.getItem('shoppingList'));
        }

    },

    // watch:   calls the function if the value changes
    // https://travishorn.com/add-localstorage-to-your-vue-app-in-2-lines-of-code-56eb2c9f371b
    watch: {
        shoppingList: {
            //call this BEFORE any item changes
            handler: function(newList){
                localStorage.setItem('shoppingList', JSON.stringify(newList))

            },
            //deep tells vue to watch nested properties
            deep: true
        }
    }
});
