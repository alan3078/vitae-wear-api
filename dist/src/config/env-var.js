"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
/**
 * Returns value stored in environment variable with the given `name`.
 * Throws Error if no such variable or if variable undefined; thus ensuring type-safety.
 * @param name - name of variable to fetch from this process's environment.
 */
function env(name) {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing: process.env['${name}'].`);
    }
    return value;
}
exports.env = env;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52LXZhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25maWcvZW52LXZhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7OztHQUlHO0FBQ0YsU0FBZ0IsR0FBRyxDQUFDLElBQVk7SUFDN0IsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVoQyxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsSUFBSSxLQUFLLENBQUMsQ0FBQztLQUNyRDtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQVJGLGtCQVFFIn0=