"use strict";
/**
 * Returns value stored in environment variable with the given `name`.
 * Throws Error if no such variable or if variable undefined; thus ensuring type-safety.
 * @param name - name of variable to fetch from this process's environment.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const env = (name) => {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing: process.env['${name}'].`);
    }
    return value;
};
exports.default = env;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52LXZhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25maWcvZW52LXZhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7R0FJRzs7QUFFSCxNQUFNLEdBQUcsR0FBRyxDQUFDLElBQVksRUFBVSxFQUFFO0lBQ2pDLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7SUFFL0IsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLElBQUksS0FBSyxDQUFDLENBQUE7S0FDdEQ7SUFFRCxPQUFPLEtBQUssQ0FBQTtBQUNoQixDQUFDLENBQUE7QUFFRCxrQkFBZSxHQUFHLENBQUEifQ==