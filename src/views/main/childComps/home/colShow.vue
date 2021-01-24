<template>
    <div class="colShowContainer" >
        <div class="col">
            <div class="content" v-for="(it, index) in list"  :key=" 'content' + index">
                <!-- <content-main :content=it @packUp="packUp('area'+index)" ></content-main> -->
                {{index}}
            </div>
        </div>
        <div class="label" v-for="(it, index) in list"  :key="'label' + index"></div>                  
    </div>
</template>
<script>

// import contentMain from './content.vue'

import {mainData} from 'assets/js/data.js' 


export default{
    // components:{
    //     contentMain
    // },
    data(){
       return {
           list: mainData,
        }
    },
    computed:{
        
    },
    methods:{
       
        
        
    }
}
</script>
<style lang='scss' scoped>
@import "scss-normalize";
.colShowContainer{
    position: relative;
    
    // left: 0;
    // right: 0;
    // top: 0;
    // margin-left: auto;
    // margin-right: auto;
    // margin-bottom: vh(50);
    // border: 1px solid red;
    box-sizing: border-box;
    width:vw(1135);

    // width: 100%;
    // height: vh(580);
    // @include changeHeight(&,50);
    overflow: hidden;
    .col{
        .content{
            width:vw(1135);


        }
    }
    
   
}

</style>
