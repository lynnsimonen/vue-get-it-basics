app.component('ShoppingList', {
    props: {
        title: String,
        items: Array,
    },

    methods: {
        removeIt(item){
            this.$emit('remove-item', item);
        }
    },
    template: `
      <div class="get-it-list">
          <h3>{{ title }}</h3>
          <ul class="list-group list-group-flush border-bottom">
            <shopping-list-item 
                v-for="item in items"  
                :item="item" 
                :key="item.name"
                @remove-item="removeIt"
            ></shopping-list-item>
          </ul>
          <p>
            <small>Total: {{items.length}}</small>
          </p>
      </div>
    `,
});

// --- COMPONENT = SHOPPINGLISTITEM ---
app.component('ShoppingListItem', {
    //gets called when component is rendered
    data(){
        return{
uid: 'sli-' + Math.floor(Math.random() * 10e16), //generate large random number
        }
    },
    props: {
        item: Object,
    },

    methods: {
        add(){
            this.item.qty++;
        },
        subtract(){
            this.item.qty--;
            if (this.item.qty >= 0) {
                this.$emit('remove-item', this.item);
            }
        },
    },

    template: `
      <li class="list-group-item">
          <div class="form-check">
            <input type="checkbox" :id="uid" class="form-check-input" v-model="item.purchased">
            <label :for="uid" :class=" 'form-check-label ' + (item.purchased ? 'purchased' : '')">{{ item.name }}</label>
<!--            <label :for="uid" :class="{'form-check-label':true,-->
<!--                                        'purchased' : item.purchased-->
<!--                                      }" > {{item.name}}</label>-->
          </div>
          <div  v-if="item.qty" class=" d-flex justify-content-between">
            <div>
              <small>Qty: {{ item.qty }}</small>
            </div>
            <div>
              <button class="btn btn-tiny" @click="add" ><i class="fas fa-plus-circle"></i></button>
              <button class="btn btn-tiny" v-on:click="subtract" ><i class="fas fa-minus-circle"></i></button>
            </div>
          </div>
        </li>     
    `,
});


//------------------------------------------------------------------------------------------------------------------
// Component names should be TitleCase/PascalCase
// and should be multi-word, but singular in plurality.
// When used in HTML/templates, they become kabob-case.
app.component('example', {
    // data:    Data created and maintained by this component.
    //          This function is like a constructor. It gets called
    //          separately for each instance of this component
    data: function(){
        return {}
    },

    // props:   Data passed into the component via attributes.
    //          Props can be optional or required. Objects and arrays
    //          are pass-by-reference. Primitives (number, string, boolean)
    //          are pass-by-value.
    props: {
        item: Object,
    },

    // methods: Usually "events" triggered by v-on:
    methods: {

    },

    // computed:    Values that are updated and cached if dependencies change.
    //              Computed value functions need to return a value.
    //              Treat these like regular values that you would use
    //              in data or props.
    computed: {

    },

    // template:    A string "template" of HTML. It should consist of only
    //              ONE root HTML element. You can reference any
    //              data, props, methods, computed, etc using: {{ name }}
    template: `
     
    `,
});
