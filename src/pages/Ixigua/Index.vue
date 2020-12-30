<template>
  <div class="ixigua">
    <Head></Head>
    <ul v-for="(item,index) in myData" v-bind:key="index">
      <li>cid:{{item.aid}}</li>
    </ul>
  </div>
</template>

<script>
import Head from "../../components/Head/Head";
export default {
  name: "Ixigua",
  components: {
    Head
  },
  data: function() {
    return {
      myData: "abc"
      // isShow: false
    };
  },
  mounted: function() {
    this.axios
      .get(
        "http://140.210.90.86/energy-background/meterInfo/getMeterInfoList?assetTypeCode=ENECOE&name=&pageSize=10&pageNumber=1&isPage=true&timestamp=1603338304068",
        {
          transformRequest: [
            function(data, headers) {
              // 对 data 进行任意转换处理
              console.log('request-data',data);
              console.log('request-header',headers);
              return data;
            }
          ],

          // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
          transformResponse: [
            function(data) {
              // console.log('response',data);
              // 对 data 进行任意转换处理
              return data;
            }
          ]
        }
      )
      .then(res => {
        console.log("request", res);
      });

    this.axios
      .all([
        this.axios.get(
          "http://140.210.90.86/energy-background/meterInfo/getMeterInfoList?assetTypeCode=ENECOE&name=&pageSize=10&pageNumber=1&isPage=true&timestamp=1603338304068"
        ),
        this.axios.get(
          "http://140.210.90.86/energy-background/meterInfo/getMeterInfoList?assetTypeCode=ENECOE&name=&pageSize=10&pageNumber=1&isPage=true&timestamp=1603338304068"
        )
      ])
      .then(
        this.axios.spread((res1, res2) => {
          this.myData =
            res2.data.body.isPage && res1.data.body.meterInfoDtoList;
        })
      );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
