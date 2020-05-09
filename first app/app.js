new Vue({
    el: '#global',

    data: {
        statusEdit: false,
        shopping: [],
        newElement: '',
        spaceUP: '20'
    },

    methods: {
        listIsEmpty: function() {
            return this.shopping.length === 0;
        },
        newElementEmpty: function() {
            return this.newElement.length === 0;
        },
        getStatusEdit: function() {
            return this.statusEdit;
        },
        updateStatusEdit: function(newStatus) {
            this.statusEdit = newStatus;
        },
        addElement: function() {
            this.shopping.push(this.newElement);
            this.newElement = '';
            
            let spaceUP = parseFloat(this.spaceUP);
            if (spaceUP > 3.3) {
                spaceUP -= 0.4;
                this.spaceUP = spaceUP.toString();
            }
        },
        removeElement: function() {
            this.shopping.pop();

            let spaceUP = parseFloat(this.spaceUP);

            if (spaceUP < 20.0){
                spaceUP += 0.4;
                this.spaceUP = spaceUP.toString();
            }
        },
    }
})