module.exports={
  devServer: {
    before(app){
      app.get('/api/search/keywords', (req, res) => {
        res.json({
          data:["1111111111","222222222222",'333333333333','44444444444','5555555555','6666666666666','77777777777','88888888888'],
          code: 0,
        })
      }),
      app.get('/api/search/guess', (req, res) => {
        res.json({
          data: [
            "1234123","yuisyds","mcijdmjd","dfdfdf","dfd9ekk"],
          code: 0,
        })
      }),
      app.get('/api/search/suggest', (req, res) => {
        if(req == "1"){
          res.json({
            data: [
              "suggest1","suggest2","suggest3","suggest4","suggest4"],
            code: 0,
          })
        }else{
          res.json({
            data: [
              "hahaha1","hahaha2","hahaha3","hahaha4","hahaha4"],
            code: 0,
          })
        }
        
      })
    }
  }
  
}