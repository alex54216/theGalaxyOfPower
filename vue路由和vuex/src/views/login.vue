<template>
    <div>
        我是login
        <router-link :to="`login/goods1/1`">goods1</router-link>
        <button @click="onlogin" :disable="reso">{{reso?'登陆中...':'登陆'}}</button>
        <router-view></router-view>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        data() {
            return {
                reso: false
            }
        },
       methods: {
            ...mapActions(['aclogin']),
           onlogin() {
               // window.isLogin = true;
               //同步的commit
               // this.$store.commit('login')
               //异步的dispatch
               this.reso = true
               this.aclogin().then((isLogin)=>{
                   this.reso = false
                   this.$router.push({
                       path:this.$route.query.redirect || '/'
                   })
               })

           }
       }, 
    }
</script>

<style scoped>

</style>