<template>
    <div class="homeContainer">
        <div class="search">
            <input type="text">
        </div>

        <div class="colShow">
            <col-show></col-show>
        </div>
    </div>
</template>
<script>
import colShow from './colShow.vue'
export default{
    components:{
        colShow
    },
    data(){
       return {}
    },
    computed:{},
    methods:{},
    // destroyed(){
    //     console.log('销毁home页面')
    // },
    // beforeCreate(){
    //     console.log('创建home页面')
    // }
}
</script>

<style lang='scss' scoped>
@import "scss-normalize";

.homeContainer{
    // border: 1px solid red;

    .search{
        width: vw(700);
        height: vh(45);
        box-sizing: border-box;
        // margin-top: vh(9);
        margin: vh(30) auto;
        text-align: center;
        // border: 1px solid green;
        box-sizing: border-box;
        input{
            box-sizing: border-box;
            width: 100%;
            height: 100%;
        }
        
    }
    .colShow{
        // width: calc(100% - 100px);
        height: vh(560);
        width: vw(1000);
        // border: 1px solid yellow;
        margin-top: vh(30);
        margin-left: auto;
        margin-right: auto;
        overflow: hidden;
        // width:vw(1135);


    }


}

</style>
