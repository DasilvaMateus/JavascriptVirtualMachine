class InstructionSet {
    static MOV(vm, [reg1, reg2]) {
        vm.registers[reg1] = vm.registers[reg2];
    }

    static ADD(vm, [reg1, reg2]) {
        vm.registers[reg1] += vm.registers[reg2];
    }

    static SUB(vm, [reg1, reg2]) {
        vm.registers[reg1] -= vm.registers[reg2];
    }

    static JMP(vm, [address]) {
        vm.pc = address;
    }

    static CMP(vm, [reg1, reg2]) {
        vm.registers["cmp"] = vm.registers[reg1] - vm.registers[reg2];
    }

    static JZ(vm, [address]) {
        if (vm.registers["cmp"] === 0) vm.pc = address;
    }

    static JNZ(vm, [address]) {
        if (vm.registers["cmp"] !== 0) vm.pc = address;
    }

    static HALT(vm) {
        vm.running = false;
    }
}

module.exports = InstructionSet;
