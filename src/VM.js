// src/VM.js
class VM {
    constructor(memorySize, instructionSet) {
        this.memory = new Array(memorySize).fill(0);
        this.registers = { r1: 0, r2: 0, r3: 0, r4: 0 };
        this.pc = 0;
        this.running = true;
        this.instructionSet = instructionSet;
    }

    loadProgram(program) {
        this.memory = program.concat(
            new Array(this.memory.length - program.length).fill(0)
        );
    }

    fetch() {
        return this.memory[this.pc++];
    }

    execute(instruction) {
        if (this.instructionSet[instruction.op]) {
            this.instructionSet[instruction.op](this, instruction.args);
        } else {
            throw new Error(`Unknown instruction: ${instruction.op}`);
        }
    }

    run() {
        while (this.running) {
            const instruction = this.fetch();
            if (instruction.op === "HALT") {
                this.running = false;
            } else {
                this.execute(instruction);
            }
        }
    }
}

module.exports = VM;
