
export let throttle =(function(){    
    let lock=false;
    //    匿名函数的this由定义所在的地方决定，具名函数的this由调用者决定
    return  function (fn){
                if(lock)return;
                fn();
                lock = true;
                // var context = this;
                // console.log(this);
                setTimeout(()=>lock=false,500);
            }
})()
// export function throttle(){
            
// }
