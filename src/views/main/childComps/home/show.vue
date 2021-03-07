<template>
    <div class="colShowContainer" >
        <div class="outerContainer" id="outerContainer" @mousewheel="handleWhell">
            <div class="col" id="colContainer" :style="{left:colContainerleft}">
                <div ref="colItem" v-for="it in list" @mousedown="dragStart(it.index,$event)" :key="'col'+it.key" class="item" :id="'col'+it.key">
                    <item  :content="it" ></item>  
                </div>                     
            </div>
        </div>
        
        <div class="labelContainer" v-if="numCol>1">
            <div class="label" v-for="(it, index) in numCol"  :key="'label' + index"
             :class="{'labelHightLight': indexCol===index}"
             @click="skipTo(index)"></div>  
        </div>                
    </div>
</template>
<script>

// import contentMain from './content.vue'

// import {mainContent} from 'assets/js/data.js' 
// import ColContent from './colContent.vue'
import {throttle,throttleTime} from 'assets/js/fun.js';
import Item from './collItem.vue'



export default{
    // created: function(){
    //     console.log('creatColShow')
    //     var t = {}
    //     t.value = mainContent
    //     this.$store.commit('setContentItem',t)
    // },
    // created(){
    //     let t = this.list.length===0?1:Math.ceil(this.list.length/this.style.Num);
    //     for(let i=0;i<t;i++)this.colArray[i]=i; 
    //     // console.log('col',this.numCol,this.colArray);
    // },
    props:{
        style:{
            type: Object,
            default: function(){
                return {
                    colNum: 4,//一个页面中每行显示几个元素
                    Num:16,//一个页面中有多少元素，
                }
            }
        }
    },
    components:{
        'Item':Item
    },
    mounted(){
        // if(document.getElementsByClassName('colContentToShow')[0]){
        //     this.colWidth = document.getElementsByClassName('colContentToShow')[0].offsetWidth;
        // }
        // console.log('contentItem',this.$store.state.a.contentItem)
        let colElem = document.getElementById('outerContainer');
        this.colWidth = this.itemOuterWidth*(this.style.colNum-1)+this.itemWidth;

        let itemSet = this.$refs.colItem;
        itemSet.forEach((item)=>{
            // console.log(this.itemWidth,this.itemHeight)
            item.style.width = this.itemWidth + 'px'; item.style.height = this.itemHeight + 'px';
        })

        this.colWidth = this.itemOuterWidth*(this.style.colNum-1)+this.itemWidth;
        this.colPageRight = this.colWidth;


        
        // colElem.style.width = this.itemOuterWidth*(this.style.colNum-1)+this.itemWidth+'px';
        // colElem.style.height = this.itemOuterHeight*3+this.itemHeight+2+'px';
    
        colElem.style.width = this.colWidth+'px';
        colElem.style.height = this.itemOuterHeight*3+this.itemHeight+2+'px';

        // this.colWidth += this.colGap;

        //设置col的宽度，这里设置col之间的间隔为50


        this.refreshContent();


    },
    data(){
       return {
        //    list: mainContent,
           colWidth:0,

           indexCol: 0,
           colPageLeft:0,
           colPageRight:0,
        //    colArray:[],

           colGap: 50,
           itemWidth:200,
           itemHeight:100,
           itemOuterWidth:220,
           itemOuterHeight:110,
           

           timer:false,

        }
    },
    computed:{
        list:function(){
            return this.$store.getters.getCollections;
        },
        numCol: function(){
            return this.list.length===0?1:Math.ceil(this.list.length/this.style.Num);           
        },
        listLength:function(){
            return this.list.length;
        },
        colContainerleft:function(){
            return -(this.colWidth+this.colGap)*this.indexCol + 'px'
        }
    },
    watch:{
        indexCol(newValue){
            if((newValue>=0)&&(newValue<this.numCol)){
                // document.getElementById('colContainer').style.marginLeft =  -this.colWidth*newValue + 'px';
                // document.getElementById('colContainer').style.left =  ;
                this.colPageLeft = this.indexCol*(this.colWidth+this.colGap);
                this.colPageRight = this.colPageLeft + this.colWidth;
            }else{
                console.log('src\\views\\main\\childComps\\home\\colShow.vue中的 indexCol ERRO','the value of indexCol is',newValue);
            }
        },
        listLength(newValue){
            console.log(newValue)
            if((this.numCol===this.indexCol)&&(this.indexCol>0)) this.indexCol--;
            this.$nextTick(()=>this.refreshContent())

            // setTimeout(()=>this.refreshContent(),100)
            // setTimeout(()=>this.$nextTick(()=>this.refreshContent()),0)
        },
        
    },
    methods:{
        getLocalIndex(x,y){
            let p = Math.floor(x/(this.colWidth+this.colGap))
            let j = Math.floor((x-p*(this.colWidth+this.colGap))/this.itemOuterWidth), i = Math.floor(y/this.itemOuterHeight);
            console.log('local:',p,i,j);
            if(p>this.numCol) p = this.numCol-1;
            return p*this.style.Num + i*this.style.colNum +j;
        
        },
        getItemTop(num){
            let p,i;
            p = Math.floor(num/this.style.Num);
            i = Math.floor((num - p*this.style.Num)/this.style.colNum);
            return i*this.itemOuterHeight
        },
        getItemLeft(num){
            let p,j;
            p = Math.floor(num/this.style.Num);
            j = num%this.style.colNum;
            return p*(this.colWidth+this.colGap) + j*this.itemOuterWidth
        },
        refreshContent(){
            let elm;
            // console.log(this.list.length,this.list); 
            for(let i=0;i<this.list.length;i++){
                // console.log(this.list[num].key,p,i,j);
                elm = document.getElementById('col'+this.list[i].key);
                elm.style.left =  this.getItemLeft(i)+'px';
                elm.style.top = this.getItemTop(i) + 'px';
                elm.style.transitionDuration = 1.5*(Math.random()+0.5) + 's';
            }
        },
        handleWhell(e){
        //    匿名函数的this由定义所在的地方决定，具名函数的this由调用者决定
           throttle(()=>{
                // console.log(this);
                if((e.deltaY>0)&&(this.indexCol < this.numCol-1)){
                    console.log("向上翻页")
                    this.indexCol++;
                    console.log(this.indexCol)
                } else if((e.deltaY<0)&&(this.indexCol>0)){
                    console.log("向下翻页")
                    this.indexCol--;
                    console.log(this.indexCol)

                }
            })
        }, 
        skipTo(index){
            this.indexCol = index;      
        },
        dragStart(num,event){
            console.log('start')
            console.log('num:',num)
            if(this.timer) return false;
            this.timer = true;
            let context = this;

            // console.log('startDrag')
            let elem = document.getElementById('col'+this.list[num].key);
            // let colElem = document.getElementById('outerContainer');
            let elmStartTop = parseInt(elem.style.top.slice(0,elem.style.top.length-2));
            let elmStartLeft = parseInt(elem.style.left.slice(0,elem.style.left.length-2));
            let mouseStartTop = event.pageY;
            let mouseStartLeft = event.pageX;
            let domRect = elem.getBoundingClientRect();
            let mouseInItemTop = event.pageY - (domRect.top + window.pageYOffset), mouseInItemLeft = event.pageX - (domRect.left+window.pageXOffset);
            // let nPosition = 
            console.log(mouseInItemTop, mouseInItemLeft);
            //当前colPage的左右边界
            // let colPageLeft = this.indexCol*(this.colWidth+this.colGap);
           // console.log(elmStartTop,elmStartLeft,mouseStartTop,mouseStartLeft);

            elem.addEventListener('mousemove',drag);
            elem.addEventListener('mouseup',dragEnd);
            //当拖拽至元素外时，来完成与mouseup事件一样的操作，来还原
            elem.addEventListener('mouseleave',dragEnd);


            //阻止浏览器的默认行为，来阻止mouseup事件的丢失：https://blog.csdn.net/qq_38036198/article/details/103472005
            event = event || window.event;
            //这两个IE9以下不支持
            if(event.stopPropagation) {
                event.stopPropagation();
            }
            if(event.preventDefault) {
                event.preventDefault();
            }
            //下面两个谷歌在新版本已经支持，火狐不支持
            event.cancelBubble = true;
            event.returnValue = false

//关于drag的代码
            let centerX;
            let centerY;
            // //如果拖动到边界处就左右滑动colPage,这里放在节流函数中，防止越界后连续滑动到最左或最右。
            
            function jumpColPage(){
                // console.log('centerX',centerX)
                if((centerX>context.colPageRight)&&(context.indexCol<context.numCol-1)){
                    context.indexCol++;
                    console.log('col+1',context.indexCol,centerX,context.colPageLeft,context.colPageRight);
                     // centerX += (context.colWidth+context.colGap);
                }else  if((centerX<context.colPageLeft)&&(context.indexCol>0)){
                    context.indexCol--;
                    console.log('col-1',context.indexCol,centerX,context.colPageLeft,context.colPageRight);
                   // centerX -= (context.colWidth+context.colGap);
                }
            }
            jumpColPage.lock = false;
            let slideColPage = throttleTime(jumpColPage,1000)


            function drag(event1){
                // if(lock) return;
                // lock = true;
                elem.classList.add('rmTransition')
                elem.style.position = 'fixed';

                console.log('drag')
                //阻止浏览器的默认行为，来阻止mouseup事件的丢失：https://blog.csdn.net/isea533/article/details/71703442
                event1 = event1 || window.event;
                //这两个IE9以下不支持
                if(event1.stopPropagation) {
                    event1.stopPropagation();
                }
                if(event1.preventDefault) {
                    event1.preventDefault();
                }
                //下面两个谷歌在新版本已经支持，火狐不支持
                event1.cancelBubble = true;
                event1.returnValue = false;


                // let mouseY = event.pageY, mouseX = event.pageX;
                // //算出的是鼠标相对 id = outerContainer的元素左上角的位置。
                // let nLeft = elmStartLeft + event1.pageX - mouseStartLeft, nTop = elmStartTop + event1.pageY - mouseStartTop;
                // // console.log(nLeft,nTop)
                //用来记录在拖拽过程中被拖拽的元素的中心所在的位置
                centerX = elmStartLeft + context.itemOuterWidth/2+event1.pageX - mouseStartLeft + context.colPageLeft; 
                centerY= elmStartTop + context.itemOuterHeight/2 +event1.pageY - mouseStartTop;
                
                slideColPage();
                // console.log(event1)
                // elem.style.left = nLeft + 'px';
                // elem.style.top = nTop + 'px';
                // console.log(event1.clientX,event1.clientY,elem)
                
                elem.style.top = event1.clientY-mouseInItemTop + 'px';
                elem.style.left = event1.clientX-mouseInItemLeft  + 'px';

                
                // if(centerX>((context.style.colNum-1)*context.itemOuterWidth+context.itemWidth))
                // context.getLocalIndex(centerX,centerY);
                // console.log(centerX,centerY);  
                
                // setTimeout(()=>lock=false,10);
            
            }

//关于dragEnd的代码
            function dragEnd(){
                elem.removeEventListener('mousemove',drag)
                elem.removeEventListener('mouseup',dragEnd)
                elem.removeEventListener('mouseleave',dragEnd)
                // console.log('mouseup',event2)
                console.log('end');
                elem.style.position = 'absolute';
                let num2 = context.getLocalIndex(centerX,centerY);
                context.$store.commit('excSavedPosition',{'num1':num,'num2':num2});
                context.$nextTick(()=>{context.refreshContent();setTimeout(()=>context.timer = false,0)});

                // elem.style.left = context.getItemLeft(num2) + 'px';
                // elem.style.top = context.getItemTop(num2) + 'px';
                // elem.classList.remove('rmTransition')
            }

            


        },
        
       
    //    //在取消收藏的过程中，如果刚好滑动到最后一个colContent的位置，并且该colContent中没有内容了即该组件销毁了，记得再一次调整滑动位置
    //    destroycolContent(){
    //        if((this.indexCol>=this.list.length)&&(this.indexCol!=0)){
    //            this.indexCol--;
    //         }
    //     }
        
        
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
    height: vh(520);
    border: 1px solid red;
    // overflow: hidden;


    // width: 100%;
    // height: vh(580);
    // @include changeHeight(&,50);
    .outerContainer{
        border: 1px solid green;
        box-sizing: border-box;
        position: relative;
        margin-left: auto;
        margin-right: auto;

        .col{
            // height: vh(500);
            // width: vw(882);
            margin-left: auto;
            margin-right: auto;
            // width: min-content;
            // margin-right: vw(-1300);
            // margin-left: vw(-1135);
            // overflow: hidden;
            // white-space: nowrap;
            position: relative;
            padding: vh(26);


            box-sizing: border-box;
            // transition: margin-left 2s;

            left: 0;
            transition: left 2s;

            .item{
                position: absolute;
                transition: left 1s, top 1s;
                background-color: white;
            }
            .rmTransition{
                transition: none;
                z-index: 15;
            }
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
