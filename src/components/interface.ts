//chứa toàn bộ type của từng state trong redux

interface boardState{
    board: string[],
    position: number,
    row: number,
    key: string
}

export interface rootState{
    board: boardState
}