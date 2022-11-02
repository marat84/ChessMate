export const state = () => ({
  tab: 0,
  blind: false,
});

export const mutations = {
  setSimpleTab(s, value) {
    s.tab = value;
  },
  setBlind(s, value) {
    s.blind = value;
  },
};

export const getters = {
  getSimpleTab: s => s.tab,
  getBlind: s => s.blind,
};
