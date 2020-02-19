import Vue from 'vue';
import Router from 'vue-router';

const originPush = Router.prototype.push;
Router.prototype.push = function push(location){
    return originPush.call(this, location).catch(err => err);
}

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/account',
            name: 'account',
            children: [
                {
                    path: 'person',
                    name: 'person',
                    component: () => import('@/components/account/person/person'),
                    meta: {title: 'person'}
                },
            ]
        }
    ]
})