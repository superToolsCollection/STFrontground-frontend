const path = require('path');
function resolve(dir){
    return path.join(__dirname,dir)
}
module.exports={
    chainWebpack:config=>{
        config.resolve.alias
        .set("@",resolve("src"))
        .set("assets",resolve("src/assets"))
        .set("components",resolve("src/components"))
        .set("views",resolve("src/views"))
        .set("scss-normalize",resolve("src/assets/scss/normalize/_normalize.scss"))
    }
}


