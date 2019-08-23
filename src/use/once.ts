import { useEffect } from 'react';

export function useOnce(callback: Function) {

    useEffect(() => {
        const cleanup = callback();

        const isPromise = Boolean(cleanup && cleanup.then);

        if (isPromise) {
            return;
        }

        return cleanup;
    });
}
