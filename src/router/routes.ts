
import Home from '~/view/Home.vue';
import Battle from '~/view/Battle.vue';
import Chara from '~/view/Chara.vue';
export default [
    {
        path: '/',
        component: Home,
        redirect: '',
        children: [
            {
                // 当 /profile 匹配成功
                path: 'profile',
                component: Battle,
                redirect: '',
            },
            {
                path: 'chara',
                component: Chara,
                redirect: '',
            },
        ],
    }
]