export interface GlobalErrorState {
    fatalError: null | {
        error: any;
    };
    setFatalError: (error: any) => void;
    clearFatalError: () => void;
}
export declare const useGlobalErrorStore: import("zustand").UseBoundStore<import("zustand").StoreApi<GlobalErrorState>>;
