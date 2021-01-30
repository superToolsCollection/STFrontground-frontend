<template>
    <div class="userTagContainer">
        <div @click="toAccount">个人空间</div>
        <div @click="toSignIn">退出登陆</div>
    </div>
</template>

<script>

// import bgImg from 'assets/img/background.png'

export default{
    data(){
       return {

        }
    },
    computed:{
        
    },
    methods:{
        toAccount:function(){
            this.$router.push('/account')
        },
        toSignIn:function(){
            this.$router.push('/sign/signIn')
        }
     }
}
</script>
<style lang='scss' scoped>
@import "scss-normalize";
.userTagContainer{
    height: vh(80);
    width: vw(100);
    // border: 2px solid black;
    // background-color: #dcdcdc;
    background-color: #f5f5f5;
    z-index: 3;
    border-radius: 4px;
    div{
        // border: 1px solid red;

        height: 50%;
        width: 100%;
        // text-align: center;
        // vertical-align: middle;
        //内容垂直居中
        display: flex;
        align-items: center;
        //内容水平居中
        justify-content: center;
    }
    &::before{
        display: block;
        position: absolute;
        top: vh(-30);
        @include setAttribute('&',left,50%,15);
        content: '';
        // width: vh(20);
        // height: vh(20);
        border: solid transparent;
        border-width: vh(15);
        border-bottom-color: #f5f5f5;
        width: 0;
        height: 0;
        // background-color: red;
    }
}


</style>
