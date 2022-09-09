//chứa toàn bộ type của từng state trong redux

interface boardState{
    board: string[],
    position: number
}

export interface rootState{
    board: boardState
}