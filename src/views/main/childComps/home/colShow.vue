<template>
    <div class="colShowContainer" >
        <div class="col" @mousewheel="handleWhell">
            <div class="colContentToShow"  v-for="(it, index) in list"  :key=" 'content' + index">
                <col-content  :content = it ></col-content>
                <!-- <col-content></col-content> -->
            </div>
            
        </div>
        <div class="labelContainer">
            <div class="label" v-for="(it, index) in list"  :key="'label' + index" :class="{'labelHightLight': indexCol===index}"></div>  
        </div>                
    </div>
</template>
<script>

// import contentMain from './content.vue'

import {mainContent} from 'assets/js/data.js' 
import ColContent from './colContent.vue'


export default{
    created: function(){
        console.log('creatColShow')
        var t = {}
        t.value = mainContent
        this.$store.commit('setContentItem',t)
    },
    components:{
        'colContent': ColContent
    },
    mounted(){
        this.colWidth = document.getElementsByClassName('colContentToShow')[0].offsetWidth;
    },
    data(){
       return {
        //    list: mainContent,
           colWidth:0,
           indexCol: 0,

        }
    },
    computed:{
        list:function(){

            // {
            //          title: '精品专区',
            //          tag: 1,
            //          data:  [{img: "assets/img/main/loadFail.svg",
            //             title:'什么都没有',
            //             description:'真的什么都没有，或者传递参数出错',
            //             url:''
            //          }]
            //     }
            // console.log('hereColShow.vue')
            var getData = this.$store.getters.getCollections;
            var data = []
            for(var i=0; i < getData.length/16;i++){
                var t = getData.slice(i*16, Math.min((i+1)*16,getData.length))
                data.push({
                    title: '收藏',
                    tag: 0,
                    data: t
                })
            } 
            return data;
        }
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
    // border: 1px solid red;
    box-sizing: border-box;
    width:vw(1000);
    height: vh(560);
    // overflow: hidden;


    // width: 100%;
    // height: vh(580);
    // @include changeHeight(&,50);
   
    .col{
        height: vh(500);
        width: vw(882);
        margin-left: auto;
        margin-right: auto;
        // width: min-content;
        // margin-right: vw(-1300);
        // margin-left: vw(-1135);
        overflow: hidden;
        white-space: nowrap;

        // border: 1px solid green;
        
        box-sizing: border-box;
        .colContentToShow{
            // float: left;
            display: inline-block;
            // border:  1px solid blue;            
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
