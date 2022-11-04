export const state = () => ({
  data: [
    {
      id: 1,
      icon: '/images/partner-1.svg',
    },
    {
      id: 2,
      icon: '/images/partner-2.svg',
    },
    {
      id: 3,
      icon: '/images/partner-3.svg',
    },
    {
      id: 4,
      icon: '/images/partner-4.svg',
    },
    {
      id: 5,
      icon: '/images/partner-5.svg',
    },
    {
      id: 6,
      icon: '/images/partner-6.svg',
    },
  ],
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
  /*async fetch({commit}) {
    await this.$axios.$get(`/api/main-page`)
      .then((response) => {
        commit('setData', response.data);
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
  },*/
};

export const getters = {
  getData: s => s.data,
  getError: s => s.error,
};



