"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
// serverless.ts
const server_1 = require("./src/server");
const aws_lambda_1 = __importDefault(require("@fastify/aws-lambda"));
exports.handler = (0, aws_lambda_1.default)(server_1.app);
