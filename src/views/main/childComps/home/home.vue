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
    methods:{}
}
</script>

<style lang='scss' scoped>
@import "scss-normalize";

.homeContainer{
    border: 1px solid red;

    .search{
        width: vw(900);
        height: vh(40);
        box-sizing: border-box;
        // margin-top: vh(9);
        margin: vh(30) auto;
        text-align: center;
        border: 1px solid green;
        box-sizing: border-box;
        input{
            box-sizing: border-box;
            width: 100%;
            height: 100%;
        }
        
    }
    .colShow{
        // width: calc(100% - 100px);
        height: vh(500);
        border: 1px solid yellow;
        margin: vh(30) auto;
        width:vw(1135);


    }


}

</style>
