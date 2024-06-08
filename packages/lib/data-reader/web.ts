import fs from 'node:fs/promises';

export const read = async <T extends Record<string, unknown>>(path: string): Promise<T> => {
    const file = await fs.open(path, 'r');

    for await (const line of file.readLines()) {
    }
};
