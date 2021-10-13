const fs = require("fs");
const loader = require("@assemblyscript/loader/umd");

const imports = {
    myConsole: {
        log(messagePtr) { // Called as `console.log` in assembly/index.ts
            console.log(wasmModule.exports.__getString(messagePtr));
        }
    }
};
const wasmModule = loader.instantiateSync(fs.readFileSync(__dirname + "/build/untouched.wasm"), {});
module.exports = wasmModule.exports;
