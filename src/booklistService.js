// Web APIのベースURL
//const URL_BASE = 'http://localhost:8080/api/'                                   // ローカルテスト用
// 20201219 変更 *****START*****
//const URL_BASE = 'https://YOUR_APPNAME.azurewebsites.net/api/'    // App Service用
const URL_BASE = 'https://mynavi-booklist-taokey.azurewebsites.net/api/'    // App Service用
// 20201219 変更 ***** END *****
import Vue from 'vue'
import axios from 'axios'

// Vue.js のインスタンス
export default new Vue({
    methods: {
        getItems() {
            return axios.get(URL_BASE + 'booklist')
                .then((res) => {
                    return res.data;
                });
        },
        getItem(id) {
            return axios.get(URL_BASE + 'booklist/search/' + id )
                .then((res) => {
                    return res.data;
                });
        },
        getByTitle(title) {
            return axios.get(URL_BASE + 'booklist/titlesearch/' + title )
                .then((res) => {
                    return res.data;
                });
        },
        addItem(item) {
            return axios.post(URL_BASE + 'booklist/add', item)
                .then((res) => {
                    return res.data;
                });
        },
        saveItem(item) {
            return axios.post(URL_BASE + 'booklist/update', item)
                .then((res) => {
                    return res.data;
                });
        },
        deleteItem(id) {
            return axios.get(URL_BASE + 'booklist/delete/' + id)
                .then((res) => {
                    return res.data;
                });
        }
    }
});