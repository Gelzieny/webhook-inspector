"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("@/env");
const drizzle_kit_1 = require("drizzle-kit");
exports.default = (0, drizzle_kit_1.defineConfig)({
    dialect: 'postgresql',
    dbCredentials: {
        url: env_1.env.DATABASE_URL,
    },
    out: './src/db/migrations',
    schema: './src/db/schema/index.ts',
    casing: 'snake_case',
});
