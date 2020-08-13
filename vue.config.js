module.exports={
  devServer: {
    before(app){
      app.get('/api/search/keywords', (req, res) => {
        res.json({
          data:["1111111111","222222222222",'333333333333','44444444444','5555555555','6666666666666','77777777777','88888888888'],
          code: 0,
          isLogin: true,
        })
      }),
      app.get('/api/search/guess', (req, res) => {
        res.json({
          data: [
            "1234123","yuisyds","mcijdmjd","dfdfdf","dfd9ekk"],
          code: 0,
          isLogin: true,
        })
      }),
      app.get('/api/search/suggest', (req, res) => {
        res.json({
          data: [
            "suggest1","suggest2","suggest3","suggest4","suggest4"],
          code: 0,
        })
      }),
      app.get('/api/channel/suggest', (req, res) => {
        res.json({
          data: [
            "suggest1","suggest2","suggest3","suggest4","suggest4"],
          code: 0,
        })
      }),
      app.get('/api/channel/all', (req, res) => {
        res.json({
          data: [
            { 
              id: 0,
              title :"热门精选",
              list: [
                { 
                  id: 0,
                  title:"音乐",
                },
                { 
                  id: 1,
                  title:"小视频",
                },
                { 
                  id: 2,
                  title:"直播",
                },
                { 
                  id: 3,
                  title:"音乐1",
                },
                { 
                  id: 4,
                  title:"影视",
                },
                { 
                  id: 5,
                  title:"小视频1",
                },
                { 
                  id: 6,
                  title:"直播1",
                },
                { 
                  id: 7,
                  title:"音乐2",
                },
                { 
                  id: 8,
                  title:"影视1",
                },
                { 
                  id: 9,
                  title:"小视频2",
                },
                { 
                  id: 10,
                  title:"直播2",
                },
                { 
                  id: 11,
                  title:"影视2",
                },
                { 
                  id: 12,
                  title:"小视频3",
                },
                { 
                  id: 13,
                  title:"直播3",
                },
                { 
                  id: 14,
                  title:"音乐3",
                },
                { 
                  id: 15,
                  title:"影视3"
                },
              ]
            },
            { 
              id: 2,
              title :"生活娱乐",
              list: [
                { 
                  id: 0,
                  title:"时尚",
                },
                { 
                  id: 1,
                  title:"健身",
                },
                { 
                  id: 2,
                  title:"育儿",
                },
                { 
                  id: 3,
                  title:"时尚",
                },
                { 
                  id: 4,
                  title:"养生",
                },
                { 
                  id: 5,
                  title:"健身",
                },
                { 
                  id: 6,
                  title:"育儿",
                },
                { 
                  id: 7,
                  title:"时尚",
                },
                { 
                  id: 8,
                  title:"养生",
                },
                { 
                  id: 9,
                  title:"健身",
                },
                { 
                  id: 10,
                  title:"育儿",
                },
                { 
                  id: 11,
                  title:"旅游",
                },
              ],
            },
            { 
              id: 3,
              title :"体育财经",
              list: [
                { 
                  id: 0,
                  title:"冬奥",
                },
                { 
                  id: 1,
                  title:"财经",
                },
                { 
                  id: 2,
                  title:"体育",
                },
                { 
                  id: 3,
                  title:"NBA",
                },
                { 
                  id: 4,
                  title:"股票",
                },
                { 
                  id: 5,
                  title:"裁判",
                },
                { 
                  id: 6,
                  title:"钓鱼",
                },
                { 
                  id: 7,
                  title:"篮球",
                },
                { 
                  id: 8,
                  title:"足球",
                },
              ],
            },
            {
              id: 4, 
              title :"科教文艺",
              list: [
                { 
                  id: 0,
                  title:"动物",
                },
                { 
                  id: 1,
                  title:"科学",
                },
                { 
                  id: 2,
                  title:"教育",
                },
                { 
                  id: 3,
                  title:"动物",
                },
                { 
                  id: 4,
                  title:"科学",
                },
                { 
                  id: 5,
                  title:"文化",
                },
                { 
                  id: 6,
                  title:"教育",
                },
                { 
                  id: 7,
                  title:"时尚",
                },
                { 
                  id: 8,
                  title:"养生",
                },
                { 
                  id: 9,
                  title:"文化",
                },
                { 
                  id: 10,
                  title:"育儿",
                },
                { 
                  id: 11,
                  title:"旅游",
                },
              ],
            },
            { 
              id: 5,
              title :"其他",
              list: [
                { 
                  id: 0,
                  title:"抗疫",
                },
                { 
                  id: 1,
                  title:"热榜",
                },
                { 
                  id: 2,
                  title:"公益",
                },
                { 
                  id: 3,
                  title:"抗疫",
                },
                { 
                  id: 4,
                  title:"小康",
                },
                { 
                  id: 5,
                  title:"热榜",
                },
                { 
                  id: 6,
                  title:"公益",
                },
                { 
                  id: 7,
                  title:"抗疫",
                },
                { 
                  id: 8,
                  title:"小康",
                },
                { 
                  id: 9,
                  title:"热榜",
                },
                { 
                  id: 10,
                  title:"公益",
                },
                { 
                  id: 11,
                  title:"小康",
                },
                { 
                  id: 12,
                  title:"热榜",
                },
              ],
            },
          ],
          code: 0,
        })
      })
    }
  } 
}