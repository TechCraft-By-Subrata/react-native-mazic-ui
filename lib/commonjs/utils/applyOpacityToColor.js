"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const applyOpacityToColor = (color, opacity) => {
    if (!color)
        return `rgba(0,0,0,${opacity})`;
    const trimmed = color.trim();
    if (trimmed.startsWith('#')) {
        const hex = trimmed.slice(1);
        if (hex.length === 6) {
            const r = parseInt(hex.slice(0, 2), 16);
            const g = parseInt(hex.slice(2, 4), 16);
            const b = parseInt(hex.slice(4, 6), 16);
            return `rgba(${r},${g},${b},${opacity})`;
        }
        if (hex.length === 8) {
            const r = parseInt(hex.slice(0, 2), 16);
            const g = parseInt(hex.slice(2, 4), 16);
            const b = parseInt(hex.slice(4, 6), 16);
            const existingAlpha = parseInt(hex.slice(6, 8), 16) / 255;
            const finalAlpha = Math.max(0, Math.min(1, existingAlpha * opacity));
            return `rgba(${r},${g},${b},${finalAlpha})`;
        }
    }
    const rgbaMatch = trimmed.match(/rgba?\(([^)]+)\)/);
    if (rgbaMatch) {
        const parts = rgbaMatch[1].split(',').map(part => part.trim());
        const [r, g, b] = parts;
        const existingAlpha = parts[3] ? parseFloat(parts[3]) : 1;
        const finalAlpha = Math.max(0, Math.min(1, existingAlpha * opacity));
        return `rgba(${r},${g},${b},${finalAlpha})`;
    }
    return color;
};
exports.default = applyOpacityToColor;
