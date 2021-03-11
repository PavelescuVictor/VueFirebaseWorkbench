const state = {
    authStatusChoices: {
        DEFAULT: "",
        PENDING: "pending",
        SUCCESS: "succes",
        ERROR: "error"
    },
    authStatus: authStatusChoices.DEFAULT,
    isLoggedIn: false,
};

const getters = {
    isLoggedIn: (state) => state.isLoggedIn,
    authStatus: (state) => state.authStatus,
},

const actions = {
    login({ commit, getters }, user) {
        return new Promise((resolve, reject) => {
            commit("AUTH_REQUEST");
            firebase.auth().useDeviceLanguage();
    
            const provider = new firebase.auth.GoogleAuthProvider();
    
            firebase.auth().signInWithRedirect(provider)
            .then(result => {
                console.log(result);
                const loggedInFlag = true;
                commit("AUTH_SUCCESS");
                commit("LOGIN", loggedInFlag);
                resolve(result)
            })
            .catch(error => {
                reject(error);
            })
        });
    },

    logout({ commit }) {
        return new Promise((resolve, reject) => {
            firebase
            .auth()
            .signOut()
            .then(() => {
                commit("LOGOUT");
                resolve()
            })
            .catch((error) => {
                reject(error);
            });
        });
    },
},

const mutations = {
    AUTH_REQUEST(state) {
        state.authStatus = state.authStatusChoices.PENDING;
    },

    AUTH_SUCCESS(state) {
        state.authStatus = state.authStatusChoices.SUCCESS;
    },

    AUTH_ERROR(state, error) {
        state.authStatus = state.authStatusChoices.ERROR;
    },

    AUTH_RESET(state) {
        state.authStatus = state.authStatusChoices.DEFAULT;
    },

    LOGIN(state) {
        state.isLoggedIn = true;
    },

    LOGOUT(state) {
        state.isLoggedIn = false;
    }
},

export default {
    state,
    getters,
    actions,
    mutations,
};