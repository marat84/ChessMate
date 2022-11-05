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
  async fetch({commit}, params) {
    const additionalURL = params.add ? params.add : '';
    const page = params.page ? `?page=${params.page}` : '?page=1';
    const gender = params.gender ? `&gender=${params.gender}` : '';
    const name = params.name ? `&full_name__icontains=${params.name}` : '';

    await this.$axios.$get(`/ru/api/participants/${additionalURL}${page}${gender}${name}`)
      .then((response) => {
        console.log(response);
        commit('setData', response);
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



