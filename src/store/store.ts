import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export interface Store<S> {
    state: S;
    subscribe: (state: Dispatch<SetStateAction<S>>) => void;
    unsubscribe: (state: Dispatch<SetStateAction<S>>) => void;
    set: (state: S) => void;
}

export class StoreImpl<S> implements Store<S> {
    private subscriptions: Dispatch<SetStateAction<S>>[] = [];

    public constructor(public state: S) {}

    public subscribe(state: Dispatch<SetStateAction<S>>): void {
        this.subscriptions.push(state);
    }

    public unsubscribe(state: Dispatch<SetStateAction<S>>): void {
        this.subscriptions = this.subscriptions.filter($state => $state !== state);
    }

    public set(updateState: S): void {
        this.state = updateState;
        this.subscriptions.forEach(setState => setState(updateState));
    }
}

export function createStore<S>(state: S): Store<S> {
    return new StoreImpl(state);
}

export function useStore<S>(store: Store<S>) {
    const [state, setState] = useState(store.state);

    useEffect(() => {
        store.subscribe(setState);
        return () => store.unsubscribe(setState);
    }, []);

    return [state, store.set];
}
