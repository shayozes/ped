import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedMailItem: {},
    mailItems: [
      {
        box: 'inbox',
        id: 99967,
        title: 'כותרת המייל3',
        sent: Date.now() - 1000 * 60 * 60 * 2 * 1,
        from: 'שם-השולח',
        content: '0000000009000000000900000000090000000009123123123',
      },
      {
        box: 'outbox',
        id: 999,
        title: 'כותרת המייל3',
        sent: Date.now() - 1000 * 60 * 60 * 2 * 1,
        from: 'שם-השולח',
        content: '0000000009000000',
      },
      {
        box: 'junk',
        id: 9967,
        title: 'כותרת המייל3',
        sent: Date.now() - 1000 * 60 * 60 * 2 * 1,
        from: 'שם-השולח',
        content: '0000000009000000000900000000090000000009123123123',
      },
    ],
  },
  getters: {
    getSelectedMailItem(state) {
      return state.selectedMailItem;
    },
    getMailItems: state => box => state.mailItems.filter(item => item.box === box),
    getInboxItems(state, getters) {
      return getters.getMailItems('inbox');
    },
    getOutboxItems(state, getters) {
      return getters.getMailItems('outbox');
    },
    getJunkItems(state, getters) {
      return getters.getMailItems('junk');
    },
  },

  mutations: {
    updateMailItem(state, mailItem) {
      state.selectedMailItem = mailItem;
    },
    addMail(state, mailItem) {
      state.mailItems.push(mailItem);
    },
    removeMail(state, mailItem) {
      const curr = state.mailItems.find(item => item.id === mailItem.id);
      state.mailItems.splice(state.mailItems.indexOf(curr), 1);
    },
  },

  actions: {
    resetMailItem(state) {
      state.commit('updateMailItem', {});
    },
    changeMailBox(state, mailItem, newBox) {
      const newItem = mailItem;
      newItem.box = newBox;

      state.commit('removeMail', mailItem);
      state.commit('addMail', newItem);
    },
  },
});
