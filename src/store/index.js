import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


// contentItem格式：
// [
//   {
//       title: '精品专区',
//       tag: 1,
//       data:  [{
//           img:'assets/img/item/1.svg',
//           title:'title1',
//           url: 'https://blog.csdn.net/water_Popcorn/article/details/93888612',        
//           view: 10000,                        
//           isSave: false,
//           favor: 10000,
//           isFavor: true,
//           key: 11
//       },...]
//   },...]
//item数据相关
const moduleA = {
  state:{
    contentItem:[],
  },
  mutations:{
    // args是一个对象，其中args.value是一个类数据
    setContentItem(state, args){
      // console.log('setData');
      if(args){
        state.contentItem = args.value;
        // console.log(args.value)
      }
    },
    // args是一个对象{key,attr,value},代表将标志为key的元素的attr属性设置为value
    setItemValue(state,args){
      if(args.key>-1){
        state.contentItem.forEach(elem1 => {
          elem1.data.forEach(elem2=>{
            if(elem2['key']===args.key){
              // console.log('getData')
               elem2[args.attr] = args.value
            }
          })
        });
      }      
    }
  },
  getters:{
    getCollections(state){
      var col =[];
      state.contentItem.forEach(elem1 => {
        elem1.data.forEach(elem2=>{
          if(elem2.isSave){
            col.push(elem2)            
            // console.log('elem2',elem2)
          }
        })
      });
      return col;
    },
    //获得menu页面的搜索结果
    getSearchResult(state){
      //为了让这里的gettes接收其他参数需要返回一个函数
        return function(str){
          var searchResult =[];
          if(str){
            state.contentItem.forEach(elem1 => {
              elem1.data.forEach(elem2=>{
                if(elem2.title.indexOf(str)>-1){
                    searchResult.push(elem2)       
                }
              })
            });
          }
          return searchResult;
        }
    },
    getStatecontentItem(state){
      console.log('get state.contentItem')
      return state.contentItem;
    }
  }
}

//用户相关
const moduleB = {
  state:{
    userInfor:{
      name:'张三',
      img:'',
      phone:'123456',
      account:'123456',
      password:'123456',
      qq: '123456',
      weixin:'123456',
      email:'123456@qq.com',
    },
  },
  mutations:{
    
  },
  getters:{
    getUserInforAll(state){
      return state.userInfor;
    }
  }
}

export default new Vuex.Store({
  modules:{
    a:moduleA,
    b:moduleB
  }
})
