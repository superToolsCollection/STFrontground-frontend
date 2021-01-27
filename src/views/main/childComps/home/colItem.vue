<template>
    <div class="containerItem" @click="viewIt">
        <div class="content" :title="itemTitle">
            <div class="img"><img alt="" :src= "getImg(data.img)"></div>
            <div class="title">{{data.title}}</div>

            <div class="save" @click.stop="saveIt" :title="saveTitle"><img alt="" :src="saveImg" ></div>

            <div class="infor">
                <div class="view"><img alt="" src="~assets/img/main/item/view.svg"><span>{{data.view}}</span></div>
                <div class="favor" @click.stop="favorIt" :title="favorTitle"><img alt="" :src="favor"><span>{{data.favor}}</span></div>
            </div>
            </div>
    </div>
</template>
<script>
import {mainContent} from 'assets/js/data.js' 
export default{
    props:{
        content:{
            type: Object,
            default: function(){
                return {
                        img: "assets/img/main/loadFail.svg",
                        title:'真的什么都没有',
                        url:'',
                        key:'',
                        
                        view: 10000,                        
                        isSave: true,

                        favor: 10000,
                        isFavor: true
                }       
            }
        }
    },
    data(){
       return {
           data: this.content,
           contentData: mainContent,
       }
    },
    computed:{
        // .save元素图标
        saveImg: function(){
            if(this.data.isSave){
                return require('assets/img/main/item/save1.svg')
            } else{
                return require('assets/img/main/item/save2.svg')
            }
        },
        // .favor元素图标
        favor: function(){
            if(this.data.isFavor){
                return require('assets/img/main/item/favour1.svg')
            } else{
                return require('assets/img/main/item/favour2.svg')
            }
        },
        // 悬停在 .save 时显示的提示
        saveTitle: function(){
            return this.data.isSave?'取消收藏':'收藏';
        },
        // 悬停在 .favor时显示的提示
        favorTitle: function(){
            return this.data.isFavor?'取消赞':'赞一个';
        },
        //悬停在该组件上是显示的提示
        itemTitle: function(){
            return this.data.title
        }
    },
    methods:{
        saveIt(){
            // 这里对isSave的改变会直接作用在assets/js/data.js中存储的数据，在其他组件中import该数据时也会产生同样的改变，这是我们想要的效果。
            // this.data.isSave = !this.data.isSave;
            // this.data.title = '改变';
            // this.contentData[0].data[0].isSave = false;
            // console.log(this.contentData)

            // args是一个对象{key,attr,value},代表将标志为key的元素的attr属性设置为value
            
            var key = this.data.key;
            var value = !this.data.isSave;
            this.$store.commit('setItemValue',{'key':key,'attr':'isSave','value':value})
        },
        favorIt(){
            this.data.isFavor = !this.data.isFavor;
            if(this.data.isFavor)
                {
                    this.data.favor++;
                }
            else{
                    this.data.favor--;
                }
        },
        viewIt(){
            this.data.view++;
        },
        getImg(path){
            if(path.indexOf('item')>0){
                // console.log(path.indexOf('/main/item/'))
                // console.log('loadWell')
                let fileName = path.substring(path.lastIndexOf('/')+1);
                // return require('assets/img/main/loadFail.svg');
                // 传递给require的参数必须是字面量(literal)不能直接传递变量，否则webpack的require不工作。
                // 传递给 require.context 的参数必须是字面量(literal)
                // 该问题可参考：https://webpack.docschina.org/guides/dependency-management/和 https://www.coder.work/article/3937181  和https://segmentfault.com/a/1190000019495695
                // console.log(fileName)
                return require(`assets/img/main/item/${fileName}`)
            }else{
                // console.log('loadFail')
                return require('assets/img/main/loadFail.svg')
            }
        }
    },
    destroyed(){
        console.log('销毁colItem组件')
    },
    beforeCreate(){
        console.log('创建colItem组件')
    }
}
</script>
<style scoped lang='scss'>
@import "scss-normalize";
.containerItem{
    float: left;
    position: relative;
    // background-color: blue;
    box-sizing: border-box;
    width: vw(200);
    height: vh(100);
    border: 1px solid gray;
    box-sizing: border-box;
    margin-right: vw(10);
    margin-bottom: vh(20);
    padding: vh(10);
    border-radius: 5px;


    @include hoverCursor;


    &:hover{
        border: 1px solid #e9e7ef;
        box-shadow: 3px 3px 3px #e9e7ef;
        border-radius: vh(5);
    }
    .content{
        position: relative;
        margin: auto;
        width: vw(178);
        height: vh(78);
        // border: 1px solid red;
        // background-color: yellow;
        .img{
            float: left;
            width: vw(50);
            height: vw(50);
            // border: 1px solid red;
            box-sizing: border-box;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .title{
            position: relative;
            float: left;
            top: vh(15);
            left: vw(15);
            text-align: left;
            font-size: vh(20);
            // margin-top: vh(6);
            // margin-bottom: vh(9);
        }
        .save{
            position: absolute;
            top: vh(0);
            right: vw(0);
            img{
                width: vh(18);
                height: vh(18);
            }
        }
        .infor{
            position: absolute;
            bottom: vh(0);
            left: vw(15);
            $size: vh(18);
            
            .view,.favor{
                // float: left;
                display: inline-block;
                img{                    
                    width: $size;
                    height: $size;
                    vertical-align: middle;
                }
                span{
                    vertical-align: middle;
                    font-size: vh(12)
                }
            }
            .favor{
                position: relative;
                left: vw(24);
            }
        } 
    }
}
</style>
