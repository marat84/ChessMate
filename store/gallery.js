export const state = () => ({
  data: [],
  error: '',
});

export const mutations = {
  setData(s, value) {
    s.data = value;
  },

  setError(s, value) {
    s.error = value;
  },
};

export const actions = {
  async fetch({commit}) {
    await this.$axios.$get(`/ru/api/gallery/`)
      .then((response) => {
        commit('setData', response.results);
      })
      .catch(error => {
        if (error.response) {
          commit('setError', {
            status: error.response.status,
          });
        } else {
          commit('setError', {
            status: 'noConnect',
          });
        }

        console.error(error);
      });
  },
};

export const getters = {
  getData: s => s.data,
  getError: s => s.error,
};



