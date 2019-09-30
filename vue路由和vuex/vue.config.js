module.exports = {
    publicPath:'/zlcastle',
    //mock数据
    configureWebpack:{
        devServer:{
            before(app){
                app.get('/goods',(req,res)=>{
                    res.json([
                        {id:1,text:'abc'},
                        {id:2,text:'abc'},
                    ])
                })
            }
        }
    }
}