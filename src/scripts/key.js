const Key = {

    _pressed: {},

    print_test: function(){
        console.log("key print");
    },

    setup: function(){
        document.addEventListener('keydown', (e) => {
            this._pressed[e.key] = true;
            console.log(this._pressed);
        })
        document.addEventListener('keyup', (e) => {
            this._pressed[e.key] = false;
        })
    }
}

export default Key;