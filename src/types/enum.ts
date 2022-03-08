export enum playerBattleStatus {
    wait,
    atk,
    def,
    skill,
    item
}
export const battleTypeText: any = {
    atk: (current: string, number: number, target: string) => {
        return `${current} make ${number} damage to ${target}`
    }
}