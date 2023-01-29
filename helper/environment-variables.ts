export function requireEnvironmentVariable(name: string, devDefault: string): string {
    const value = process.env[name];

    if (value === undefined) {
        if (process.env.NODE_ENV === 'development') {
            console.warn(`Environment variable ${name} is not set. Using default value ${devDefault}`);
            return devDefault;
        } else {
            throw new Error(`Environment variable ${name} is not set.`);
        }
    }
    return value!!;
}

export function optionalEnvironmentVariable(name: string, defaultValue: string): string {
    const value = process.env[name];

    if (value === undefined) {
        console.warn(`Environment variable ${name} is not set. Using default value: ${defaultValue}`);
        return defaultValue;
    }
    return value;
}
