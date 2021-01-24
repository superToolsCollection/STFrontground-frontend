<template>
    <div class="colShowContainer" >
        <div class="col">
            <div class="content" v-for="(it, index) in list"  :key=" 'content' + index">
                <!-- <content-main :content=it @packUp="packUp('area'+index)" ></content-main> -->
                {{index}}
            </div>
        </div>
        <div class="labelContainer">
            <div class="label" v-for="(it, index) in list"  :key="'label' + index"></div>  
        </div>                
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
    margin-left: auto;
    margin-right: auto;
    // margin-bottom: vh(50);
    border: 1px solid red;
    box-sizing: border-box;
    width:vw(1135);
    height: vh(560);
    // overflow: hidden;


    // width: 100%;
    // height: vh(580);
    // @include changeHeight(&,50);
   
    .col{
        height: vh(520);
        width: vw(1135);
        // width: min-content;
        // margin-right: vw(-1300);
        margin-left: vw(-1135);
        //  overflow: hidden;
        overflow: visible;
        white-space: nowrap;
        
        box-sizing: border-box;
        border:  1px solid pink; 
        .content{
            // float: left;
            display: inline-block;
            width:vw(1135);
            border:  1px solid blue;            
            box-sizing: border-box;
            height: vh(500);
        }
    }
    .labelContainer{
        position: absolute;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        bottom: vh(30);
        width: min-content;
        white-space: nowrap;
        .label{
            display: inline-block;
            margin: 0 10px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: red;
        }
    }
    
    
   
}

</style>
