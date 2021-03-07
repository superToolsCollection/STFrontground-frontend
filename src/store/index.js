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
    contentItem:{},
    collections:[],
  },
  mutations:{
    // args是一个对象，其中args.value是一个类数据
    setContentItem(state, args){
      // console.log('setData');
      if(args){
        state.contentItem = args.value;
        console.log(args.value)
      }
    },
    // args是一个对象{key,attr,value},代表将标志为key的元素的attr属性设置为value
    setItemValue(state,args){
      if((typeof args.key === 'string')&&(args.key.indexOf('&')!==-1)){
        state.contentItem.setAtrr(args.key,args.attr,args.value)
      }      
    },
    excSavedPosition(state,args){
      state.contentItem.excSavedPosition(args.num1,args.num2);
    }
  },
  getters:{
    getCollections(state){
      return state.contentItem.getSaved();
    },
    //获得menu页面的搜索结果
    getSearchResult(state){
      //为了让这里的gettes接收其他参数需要返回一个函数
        return state.contentItem.getSearchFunction();
    },
    getStatecontentItem(state){
      return state.contentItem.getData();
      // console.log('get state.contentItem')
      // return state.contentItem;
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
