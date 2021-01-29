<template>
    <div class="colShowContainer" >
        <div class="col" @mousewheel="handleWhell">
            <col-content class="colContentToShow"  
            v-for="(it, index) in list"  :key=" 'colContent' + index" :content = it
            @destroycolContent="destroycolContent" ></col-content>            
        </div>
        <div class="labelContainer" v-if="list.length>1">
            <div class="label" v-for="(it, index) in list"  :key="'label' + index"
             :class="{'labelHightLight': indexCol===index}"
             @click="skipTo(index)"></div>  
        </div>                
    </div>
</template>
<script>

// import contentMain from './content.vue'

// import {mainContent} from 'assets/js/data.js' 
import ColContent from './colContent.vue'
import {throttle} from 'assets/js/fun.js'


export default{
    // created: function(){
    //     console.log('creatColShow')
    //     var t = {}
    //     t.value = mainContent
    //     this.$store.commit('setContentItem',t)
    // },
    components:{
        'colContent': ColContent
    },
    mounted(){
        if(document.getElementsByClassName('colContentToShow')[0]){
            this.colWidth = document.getElementsByClassName('colContentToShow')[0].offsetWidth;
        }
        // console.log('contentItem',this.$store.state.a.contentItem)

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

            var getData = this.$store.getters.getCollections;
            var data = []
            // console.log(getData.length,getData.length/16)
            for(var i=0; i < getData.length/16;i++){
                // console.log('pushData')
                var t = getData.slice(i*16, Math.min((i+1)*16,getData.length))
                // console.log(t)
                data.push({
                    title: '收藏',
                    tag: 0,
                    data: t
                })
            } 
            return data;
        }
    },
    watch:{
        indexCol(newValue){
            if((newValue>=0)&&(newValue<this.list.length)){
                document.getElementsByClassName('colContentToShow')[0].style.marginLeft =  -this.colWidth*newValue + 'px';
            }else{
                console.log('src\\views\\main\\childComps\\home\\colShow.vue中的 indexCol ERRO','the value of indexCol is',newValue);
            }
        }
    },
    methods:{
       handleWhell(e){
        //    匿名函数的this由定义所在的地方决定，具名函数的this由调用者决定
           throttle(()=>{
                // console.log(this);
                if((e.deltaY>0)&&(this.indexCol < this.list.length-1)){
                    //    console.log("向上翻页")
                    this.indexCol++;
                } else if((e.deltaY<0)&&(this.indexCol>0)){
                    //    console.log("向下翻页")
                    this.indexCol--;
                }
            })
        }, 
        skipTo(index){
            this.indexCol = index;      
        },
       
       //在取消收藏的过程中，如果刚好滑动到最后一个colContent的位置，并且该colContent中没有内容了即该组件销毁了，记得再一次调整滑动位置
       destroycolContent(){
           if((this.indexCol>=this.list.length)&&(this.indexCol!=0)){
               this.indexCol--;
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
            @include hoverCursor;
        }
        .labelHightLight{
            background-color: red;
        }
    }
    
    
   
}

</style>
