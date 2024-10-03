"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.anxietyFormInput = exports.signinInput = exports.signupInput = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupInput = zod_1.default.object({
    username: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
    name: zod_1.default.string().optional()
});
exports.signinInput = zod_1.default.object({
    username: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
});
exports.anxietyFormInput = zod_1.default.object({
    1: zod_1.default.number().min(1).max(4),
    2: zod_1.default.number().min(1).max(4),
    3: zod_1.default.number().min(1).max(4),
    4: zod_1.default.number().min(1).max(4),
    5: zod_1.default.number().min(1).max(4),
    6: zod_1.default.number().min(1).max(4),
    7: zod_1.default.number().min(1).max(4),
    8: zod_1.default.number().min(1).max(4),
    9: zod_1.default.number().min(1).max(4),
    10: zod_1.default.number().min(1).max(4),
    11: zod_1.default.number().min(1).max(4),
    12: zod_1.default.number().min(1).max(4),
    13: zod_1.default.number().min(1).max(4),
    14: zod_1.default.number().min(1).max(4),
    15: zod_1.default.number().min(1).max(4),
    16: zod_1.default.number().min(1).max(4),
    17: zod_1.default.number().min(1).max(4),
});
