<template>
    <div class="colShowContainer" >
        <div class="col" @mousewheel="handleWhell">
            <div class="colContentToShow"  v-for="(it, index) in list"  :key=" 'content' + index">
                <!-- <col-content  :content = it ></col-content> -->
                <col-content></col-content>
            </div>
            
        </div>
        <div class="labelContainer">
            <div class="label" v-for="(it, index) in list"  :key="'label' + index" :class="{'labelHightLight': indexCol===index}"></div>  
        </div>                
    </div>
</template>
<script>

// import contentMain from './content.vue'

import {mainData} from 'assets/js/data.js' 
import ColContent from './colContent.vue'


export default{
    components:{
        'colContent': ColContent
    },
    mounted(){
        this.colWidth = document.getElementsByClassName('colContentToShow')[0].offsetWidth;
    },
    data(){
       return {
           list: mainData,
           colWidth:0,
           indexCol: 0,

        }
    },
    computed:{
        
    },
    methods:{
       handleWhell: function(e){
           if(e.deltaY>0){
                // console.log("向上翻页",this.colWidth)
                if( this.indexCol < this.list.length-1){
                    this.indexCol++;
                    document.getElementsByClassName('colContentToShow')[0].style.marginLeft =  -this.colWidth*this.indexCol + 'px';
                }
           } else if(e.deltaY<0){
               if( this.indexCol > 0){
                    this.indexCol--;
                    document.getElementsByClassName('colContentToShow')[0].style.marginLeft =  -this.colWidth*this.indexCol + 'px';
                }
            //    console.log("向下翻页")
           }
       }
        
        
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
    width:vw(1235);
    height: vh(560);
    // overflow: hidden;


    // width: 100%;
    // height: vh(580);
    // @include changeHeight(&,50);
   
    .col{
        height: vh(520);
        width: vw(1235);
        // width: min-content;
        // margin-right: vw(-1300);
        // margin-left: vw(-1135);
         overflow: hidden;
        overflow: visible;
        white-space: nowrap;
        
        box-sizing: border-box;
        border:  1px solid pink; 
        .colContentToShow{
            // float: left;
            display: inline-block;
            width:vw(1235);
            border:  1px solid blue;            
            box-sizing: border-box;
            height: vh(500);
            // transition: right 0.5s ease; 

            transition: margin-left 2s;
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
            background-color: lightgrey;
            transition: background-color 2s;
        }
        .labelHightLight{
            background-color: red;
        }
    }
    
    
   
}

</style>
