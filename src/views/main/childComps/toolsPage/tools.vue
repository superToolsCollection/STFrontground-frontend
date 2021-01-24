<template>
    <div class="tools" >
        <div class="area" v-for="(it, index) in list"  :key="index">
            <!-- class为setShow的元素存在的意义纯粹是为了让content-main出现在我想看到的地方 -->
            <div class="setShow" :id= "'area'+index"></div>
            <content-main :content=it @packUp="packUp('area'+index)" ></content-main>
        </div>                  
    </div>
</template>
<script>

import contentMain from './content.vue'

import {mainData} from 'assets/js/data.js' 


export default{
    components:{
        contentMain
    },
    data(){
       return {
           list: mainData,
        }
    },
    computed:{
        
    },
    methods:{
        packUp: function(param){
            console.log("收起")
            console.log(param)
            // this.$refs[param].scrollIntoView();
            // console.log(this.$refs[param])
            // console.log(this.$refs)
            let elem = document.getElementById(param);
            // let height = elem.offsetHeight;
            // console.log(height)
            // elem.scrollTo({top:height})
            // elem.scrollIntoView(true);
            elem.scrollIntoView({behavior: "smooth", block: "start"});

        }
        
        
    }
}
</script>
<style lang='scss' scoped>
@import "scss-normalize";
.tools{
    position: relative;
    
    // left: 0;
    // right: 0;
    // top: 0;
    // margin-left: auto;
    // margin-right: auto;
    // margin-bottom: vh(50);
    // border: 1px solid red;
    box-sizing: border-box;
    width:vw(1250);
    // height: vh(580);
    // @include changeHeight(&,50);
    // overflow: hidden;
    .area{
        position: relative;
        .setShow{
            position: absolute;
            top: vh(-77);
        }
        margin-bottom: vh(50);
        border: 1px solid #e9e7ef;
        box-shadow: 3px 3px 3px #e9e7ef;
        border-radius: vh(5);
        box-sizing: border-box;
    }
   
}

</style>
