import * as uuid from 'uuid';

export type UUID = string;

export function createUUID (): UUID {
    return uuid.v4();
}
