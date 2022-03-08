import { defineStore } from 'pinia'
import { playerBattleStatus, battleTypeText } from '~/types/enum'
import { sleep } from "~/hooks/utils";
export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    battle_status: playerBattleStatus.wait,
    queue: <any>[],
    cur_act: <any>{},
    cur_index: 0,
    list: [
      { id: 0, name: "s", speed: 1, atk: 1, red: 100 },
      { id: 1, name: "m", speed: 2, atk: 1, red: 100 },
      { id: 2, name: "h", speed: 3, atk: 1, red: 100 },
      { id: 3, name: "h", speed: 4, atk: 1, red: 100 },
      { id: 4, name: "h", speed: 5, atk: 1, red: 100 },
    ],
    showList: <any>[],
    enemy_list: [
      { id: 0, name: "ss", speed: 1, atk: 1, red: 100 },
      { id: 1, name: "mm", speed: 2, atk: 1, red: 100 },
      { id: 2, name: "hh", speed: 3, atk: 1, red: 100 },
      { id: 3, name: "hh", speed: 4, atk: 1, red: 100 },
      { id: 4, name: "hh", speed: 5, atk: 1, red: 100 },
    ]
  }),
  getters: {},
  actions: {
    init() {
      this.cur_index = 0
      this.cur_act = this.list[this.cur_index]
    },
    async addQueue(target: any) {
      this.queue.push({
        cur_act: this.cur_act,
        act: "atk",
        target: target
      });
      this.cur_index++
      if (this.cur_index > this.list.length - 1) {
        // this.cur_act = {};
        await sleep(800);
        this.releaseQueue();
      } else {
        this.cur_act = this.list[this.cur_index];
      }
    },
    async releaseQueue() {
      const list = this.queue
      const cur = list[0];
      this.showList.push(
        battleTypeText[cur.act](
          cur.cur_act.name,
          cur.cur_act.atk,
          cur.target.name
        )
      );
      cur.target.red -= 8
      list.shift();
      if (list.length) {
        console.log('===== 队列长度 =====')
        console.log(list.length)
        await sleep(1000);
        this.releaseQueue();
      } else {
        console.log('===== 释放结束 =====')
        this.init()
      }
    },

  }
})