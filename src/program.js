const program = [
    { op: "MOV", args: ["r1", "r2"] },
    { op: "ADD", args: ["r1", "r3"] },
    { op: "CMP", args: ["r1", "r2"] },
    { op: "JZ", args: [6] },
    { op: "SUB", args: ["r1", "r2"] },
    { op: "JMP", args: [2] },
    { op: "HALT", args: [] },
];

module.exports = program;
