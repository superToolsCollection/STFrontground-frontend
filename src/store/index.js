import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
          state.contentItem.forEach(elem1 => {
            elem1.data.forEach(elem2=>{
              if(elem2.title.indexOf(str)>-1){
                  searchResult.push(elem2)       
              }
            })
          });
          return searchResult;
        }
    },
    getStatecontentItem(state){
      console.log('get state.contentItem')
      return state.contentItem;
    }
  }
}


export default new Vuex.Store({
  modules:{
    a:moduleA
  }
})
