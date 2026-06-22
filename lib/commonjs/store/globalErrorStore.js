"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGlobalErrorStore = void 0;
const zustand_1 = require("zustand");
exports.useGlobalErrorStore = (0, zustand_1.create)((set) => ({
    fatalError: null,
    setFatalError: (error) => set({ fatalError: { error } }),
    clearFatalError: () => set({ fatalError: null }),
}));
