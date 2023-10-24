export interface Command<P, R> {
    execute(param: P) : R;
}