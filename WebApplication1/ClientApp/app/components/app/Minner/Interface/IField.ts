export interface IField<T> {
    Click(Field: T, n: number, m: number): void;
    SetFlag(Field: T, n: number, m: number): void;
    GetCode(Field: T, n: number, m: number): number;
    MineAround(Field: T, n: number, m: number): string;
}