import Vue from 'vue';
import VueRouter from 'vue-router';
import Inbox from '../components/Inbox.vue';
import Outbox from '../components/Outbox.vue';
import JunkEmail from '../components/JunkEmail.vue';
import NewMailForm from '../components/NewMailForm.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/Inbox',
    },
    {
      path: '/Inbox',
      component: Inbox,
      meta: {
        title: 'דואר נכנס',
        showExtraContent: true,
      },
    },
    {
      path: '/Outbox',
      component: Outbox,
      meta: {
        title: 'דואר יוצא',
        showExtraContent: true,
      },
    },
    {
      path: '/JunkEmail',
      component: JunkEmail,
      meta: {
        title: 'דואר זבל',
        showExtraContent: false,
      },
    },
    {
      path: '/NewMailForm',
      component: NewMailForm,
      meta: {
        title: 'מייל חדש',
        showExtraContent: false,
      },
    },
  ],
});
