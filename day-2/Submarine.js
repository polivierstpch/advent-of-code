class Submarine {
    depth = 0
    pos = 0;
    aim = 0;

    handleCommand(command) {
        const [action, value] = command.split(' ');

        switch (action) {
            case 'forward':
                this.pos += +value;
                this.depth += this.aim * +value;
                break;
            case 'down':
                this.aim += +value;
                break;
            case 'up':
                this.aim -= +value; 
            default:
                break;
        }
    }

    handleCommands(commands) {
        commands.forEach(command => {
            this.handleCommand(command);
        });

    }

    getSubmarineCourse() {
        return this.pos * this.depth;
    }
}

module.exports = Submarine;