// import { ref } from 'vue';

// const getNowTime = () => {
//     nowTime.value = dayjs().format('YYYY[年]M[月]D[日] HH:mm')
//     setTimeout(getNowTime, 1000);
// };

// const getTodayDate = () =>{
//     return dayjs().format('YYYY-MM-DD')
// }

const sleep = (time: number = 2000) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, time)
    })
}
export { sleep };