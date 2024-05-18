const VM = require("../VM.js");
const InstructionSet = require("../InstructionSet.js");
const program = require("../program.js");

const vm = new VM(256, InstructionSet);
vm.registers.r2 = 5;
vm.registers.r3 = 10;

vm.loadProgram(program);
vm.run();

console.log(vm.registers);
