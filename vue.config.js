module.exports={
  devServer: {
    before(app){
      app.get('/api/search/keywords', (req, res) => {
        res.json({
          data:["Vue项目中使用mock","222222222222222222",'朋友圈还是不要随便发了','11111111111'],
          code: 0,
        })
      }),
      app.get('/api/goods', (req, res) => {
        res.json({
          // 这里是你的json内容
          errno: 0,
          data: goods
        })
      }),
      app.get('/api/ratings', (req, res) => {
        res.json({
          // 这里是你的json内容
          errno: 0,
          data: ratings
        })
      })
    }
  }
  
}