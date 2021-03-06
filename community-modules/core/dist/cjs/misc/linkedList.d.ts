// Type definitions for @ag-grid-community/core v23.1.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
export declare class LinkedList<T> {
    private first;
    private last;
    add(item: T): void;
    remove(): T;
    isEmpty(): boolean;
}
