let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // показывает текущую ступеньку
        console.log( this.step );
    }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep();

ladder.up().up().down().showStep();