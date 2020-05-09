new Vue({
    el: '#header',
    data: {
        isEmpty: true,
        status: "default",
        title: "Hello World",
        newItem: "",
        items: []
    },
    methods: {
        saveItem: function() {
            this.items.push(this.newItem);
            this.is_empty = this.listEmpty();
            this.newItem = "";
        },
        removeItem: function() {
            this.items.pop();
            this.is_empty = this.listEmpty();
        },
        listEmpty: function() {
            return this.items.length === 0;
        },
        newItemEmpty: function() {
            return this.newItem.length === 0;
        },
        updateStatus: function() {
            if (this.status == 'default') {
                this.status = 'edit';
            }
            else {
                this.status = 'default';
            }
        }
    }
});