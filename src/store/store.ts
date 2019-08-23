import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export interface Store<S> {
    state: S;
    subscribe: (setState: Dispatch<SetStateAction<S>>) => void;
    unsubscribe: (setState: Dispatch<SetStateAction<S>>) => void;
    set: (updateState: S) => void;
}

export class StoreImpl<S> implements Store<S> {
    private subscriptions: Dispatch<SetStateAction<S>>[] = [];

    public constructor(public state: S) {}

    public subscribe(setState: Dispatch<SetStateAction<S>>): void {
        this.subscriptions.push(setState);
    }

    public unsubscribe(setState: Dispatch<SetStateAction<S>>): void {
        this.subscriptions = this.subscriptions.filter($setState => $setState !== setState);
    }

    public set = (updateState: S) => {
        this.state = updateState;
        this.subscriptions.forEach(setState => setState(updateState));
    };
}

export function createStore<S>(state: S): Store<S> {
    return new StoreImpl(state);
}

export function useStore<S>(store: Store<S>): [S, (state: S) => void] {
    const [state, setState] = useState(store.state);

    useEffect(() => {
        store.subscribe(setState);
        return () => store.unsubscribe(setState);
    }, [store]);

    return [state, store.set];
}
