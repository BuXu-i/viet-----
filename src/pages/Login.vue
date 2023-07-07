<template>
  <div class="Login">
    <div class="top">
      <span><img class="img"
             src="https://test.nttcc.com.cn/_nuxt/img/logo_1.e54ae31.png"
             alt="" /> <span class="top-1">共创云</span>
      </span>
      <span>服务产品</span>
      <span>科技需求</span>
      <span>专利论文</span>
      <span>交易大数据</span>
      <el-button type="primary">登录</el-button>
      <el-button>注册</el-button>
    </div>
  </div>

  <div class="conten">
    <div class="resource">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAVCAYAAABc6S4mAAAABHNCSVQICAgIfAhkiAAAAUhJREFUOE/tlL9Kw1AYxc9JCyIodLKLID5Bi6MI/kFdipgOtmP7JtY3SUd1aKR1UdEO4ijtE4jgUqeCgghJjyRaiMQ0qVJcmuly8/vOuTn3y0ckeMyGMjPpQUVE1cMpWO+OUbeL7MeVcxRQasoE3ApJ8ydOkk0jZR0XeBalEzI4OFeeGlQgVElk4k7ovZfQB2GJRv20wE6wxjcIRkAgn0Q0ihHQCUbIcsuxAe7/RTTSzIuw3HI1CfGhZugOSk23RuLwK9ujk71UzVuPux8yuO4pR8C8un8rPvWcnN+OjvvIgR58M4PLSqeWRu0vZtPd7ZXZhgB7K8uuzw6dbp7ldY51cfuCy7vXX6W2szqH3bV5T7W6ucD61CAU4zSi2M7634gm/qMNv3/ckRDFfxsVQSg26ISABH+O8VNc6wA3EtYmxNQW2Z74uP4A+kAQbn8IYmUAAAAASUVORK5CYII="
           alt="">
      <span>资源大厅</span>
      <span class="search">
        <el-input v-model="searchText"
                  placeholder="请输入资源名称或用户名搜索"
                  style="width: 300px;" />
        <el-button type="primary"
                   :icon="Search"
                   @click="clickSreach">搜索</el-button>
      </span>
    </div>
    <div class="tab">
      <el-tabs v-model="activeName"
               class="demo-tabs">
        <el-tab-pane label="服务"
                     name="first"></el-tab-pane>
        <el-tab-pane label="需求"
                     name="second"></el-tab-pane>
        <el-tab-pane label="科创资源"
                     name="third"></el-tab-pane>
      </el-tabs>
    </div>
    <!-- -------------------- -->
    <div class="screen">
      <div class="condition"
           :style="click1?'':'height: auto;' ">
        <span class="left">服务类型:</span>
        <div class="condition_list">
          <span :class="!fwlxCurrent?'current':''"
                @click="fwlxCurrent='';clickSreach()">不限</span>
          <span v-for="item in fwlx"
                :key="item.id"
                :class="fwlxCurrent==item.id?'current':''"
                @click="fwlxCurrent=item.id;clickSreach();ejfl=item.children">
            {{ item.name }}</span>
        </div>
        <span v-if="click1"
              class="but"
              @click="click1=!click1">
          <el-icon>
            <ArrowDown />
          </el-icon>更多
        </span>
        <span v-else
              class="but"
              @click="click1=!click1">
          <el-icon>
            <ArrowUp />
          </el-icon>收起
        </span>
      </div>
      <div class="divider"></div>
      <div class="condition"
           v-if="!!ejfl&&ejfl?.length>0"
           :style="click2?'':'height: auto;' ">
        <span class="left">二级分类:</span>
        <span class="condition_list">
          <span :class="!ejflCurrent?'current':''"
                @click="ejflCurrent='';clickSreach()">不限</span>
          <span v-for="item in ejfl"
                :key="item.id"
                :class="ejflCurrent==item.id?'current':''"
                @click="ejflCurrent=item.id;clickSreach()">
            {{ item.name }}</span>
        </span>
        <span v-if="click2"
              class="but"
              @click="click2=!click2">
          <el-icon>
            <ArrowDown />
          </el-icon>更多
        </span>
        <span v-else
              class="but"
              @click="click2=!click2">
          <el-icon>
            <ArrowUp />
          </el-icon>收起
        </span>
      </div>
      <div class="divider"></div>
      <div class="condition"
           :style="click3?'':'height: auto;' ">
        <span class="left"> 技术领域:</span>
        <span class="condition_list">
          <span :class="!jslyCurrent?'current':''"
                @click="jslyCurrent='';clickSreach()">不限</span>
          <span v-for="item in jsly"
                :key="item.id"
                :class="jslyCurrent==item.id?'current':''"
                @click="jslyCurrent=item.id;clickSreach()">
            {{ item.name }}</span>
        </span>

        <span v-if="click3"
              class="but"
              @click="click3=!click3">
          <el-icon>
            <ArrowDown />
          </el-icon>更多
        </span>
        <span v-else
              class="but"
              @click="click3=!click3">
          <el-icon>
            <ArrowUp />
          </el-icon>收起
        </span>
      </div>
      <div class="divider"></div>
      <div class="condition"
           :style="click4?'':'height: auto;' ">
        <span class="left">数据来源:</span>
        <span class="condition_list">
          <span :class="!sjlyCurrent?'current':''"
                @click="sjlyCurrent='';clickSreach()">不限</span>
          <span v-for="item in sjly"
                :key="item"
                :class="sjlyCurrent==item?'current':''"
                @click="sjlyCurrent=item;clickSreach()">
            {{ item }}</span>
        </span>
        <span v-if="click4"
              class="but"
              @click="click4=!click4">
          <el-icon>
            <ArrowDown />
          </el-icon>更多
        </span>
        <span v-else
              class="but"
              @click="click4=!click4">
          <el-icon>
            <ArrowUp />
          </el-icon>收起
        </span>
      </div>

      <div class="divider"></div>
      <div class="condition"
           :style="click5?'':'height: auto;' ">
        <span class="left">地区:</span>
        <span class="condition_list">
          <span :class="!dqCurrent?'current':''"
                @click="dqCurrent='';clickSreach()">不限</span>
          <span v-for="item in dq"
                :key="item"
                :class="dqCurrent==item?'current':''"
                @click="dqCurrent=item;clickSreach()">
            {{ item }}</span>
        </span>
        <span v-if="click5"
              class="but"
              @click="click5=!click5">
          <el-icon>
            <ArrowDown />
          </el-icon>更多
        </span>
        <span v-else
              class="but"
              @click="click5=!click5">
          <el-icon>
            <ArrowUp />
          </el-icon>收起
        </span>
      </div>
    </div>
    <div class="table">
      <el-table :data="tableList">
        <el-table-column prop="title"
                         label="服务名称" />
        <el-table-column prop="orgName"
                         label="发布用户">
          <template v-slot:default="scope">
            <div style="display: flex; align-items: center;">
              <img :src="scope.row.avatarUrl"
                   alt=""
                   style="width: 40px; height: 40px; margin-right: 20px;">
              <span style="font-weight: 700;">{{ scope.row.orgName }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="serviceTypeName"
                         label="服务类型" />
        <el-table-column prop="totalDeal"
                         label="成功成交数" />
        <el-table-column prop="avgScore"
                         label="信用评价" />
      </el-table>
    </div>
    <div class="demo-pagination-block">
      <el-pagination v-model:current-page="pages.current"
                     v-model:page-size="pages.size"
                     :page-sizes="[100, 200, 300, 400]"
                     :small="small"
                     :background="background"
                     layout="prev, pager, next,jumper"
                     :total="pages.total"
                     @size-change="handleSizeChange"
                     @current-change="handleCurrentChange" />

    </div>
  </div>
</template>

<script lang="ts" setup>
import { Delete, Edit, Search, Share, Upload } from "@element-plus/icons-vue";
import { onMounted, ref, watch } from "vue";
import {
  http,
  ladderlist,
  list,
  sreach,
  dataSource,
  provinces,
} from "../axios/axios";
const activeName = ref("first");
const fwlx = ref([]); //服务类型
const ejfl = ref([]); //二次分类
const jsly = ref([]); //技术领域
const sjly = ref([]); //数据来源
const dq = ref([]); //地区
//更多 更少
const click1 = ref(true);
const click2 = ref(true);
const click3 = ref(true);
const click4 = ref(true);
const click5 = ref(true);
//选中
const fwlxCurrent = ref();
const ejflCurrent = ref();
const jslyCurrent = ref();
const sjlyCurrent = ref();
const dqCurrent = ref();
//列表内容
const tableList = ref([]);
//搜索参数
const searchText = ref();
/**分页参数 */
const pages = ref({
  total: 0,
  current: 1,
  size: 10,
});
const handleClick = (tab, event) => {
  console.log(tab, event);
};

//http{}
onMounted(() => {
  loading();
  clickSreach();
});

async function loading() {
  sjly.value = dataSource;
  dq.value = provinces;
  console.log("地区", dq);
  try {
    let dataLadderlist = await http(ladderlist);
    let dataList = await http(list);
    console.log("ni :", dataLadderlist);
    console.log("list: :", dataList);
    fwlx.value = dataLadderlist.data;
    jsly.value = dataList.data.list;
    console.log(fwlx);
  } catch (error) {
    console.log(error);
  }
}

/** 更多*/
function showAll(itme: boolean) {
  itme = !itme;
  console.log("ref：", this.$ref.ejfl);
}

/**搜索 */
async function clickSreach() {
  try {
    let httpData = JSON.parse(JSON.stringify(sreach));
    console.log("httpData:", httpData.params.pageSize);
    httpData.params.pageNum = pages.value.current;
    httpData.params.pageSize = pages.value.size;
    httpData.params.keywords = searchText.value;
    httpData.params.serviceTypeId = fwlxCurrent.value;
    httpData.params.serviceTypeId2 = ejflCurrent.value;
    httpData.params.technicalId = jslyCurrent.value;
    httpData.params.province = dqCurrent.value;
    httpData.params.dataOrigin = sjlyCurrent.value;
    let res = await http(httpData);
    console.log("sreach:", res);
    tableList.value = res.data.list;
    pages.value.total = res.data.total;
    console.log("tableList:", tableList);
  } catch (error) {
    console.log(error);
  }
}
watch(fwlxCurrent, (newValue) => {});
/**分页 */
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
  pages.value.current = val;
  clickSreach();
};
</script>
<style scoped lang="less">
.Login {
  width: 80%;
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 25px;
  .top {
    & > span:nth-child(1) {
      .img {
        width: 30px;
        height: 30px;
        -o-object-fit: cover;
        object-fit: cover;
        margin-right: 10px;
        vertical-align: text-bottom;
      }
      span {
        font-size: 16px;
        font-weight: 700;
        line-height: 22px;
        color: #3473e6;
      }
    }
    & > span:nth-child(n + 1) {
      margin-left: 24px;
    }
    & > .el-button {
      float: right;
      margin-right: 24px;
      margin-top: 5px;
    }
  }
}
.conten {
  width: 80%;
  margin: 0 auto;
  margin-top: 5px;
  background-color: #fff;
  padding: 30px;
  .resource {
    img {
      vertical-align: text-bottom;
      margin-right: 20px;
    }
    .search {
      float: right;
    }
  }
  .tab {
    margin-top: 30px;
    background-color: #f6f7f8;
    padding: 10px;
    border-radius: 5px;
  }
  //筛选
  .screen {
    width: 100%;
    padding: 0 20px;
    margin-bottom: 30px;
    background: #fff;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    margin-top: 20px;
    .condition {
      height: 40px;
      display: flex;
      overflow: hidden;
      margin-bottom: 10px;
      .left {
        min-width: 120px;
        line-height: 30px;
        padding-left: 10px;
        margin-top: 10px;
        color: #909399;
        font-size: 14px;
      }
      .condition_list {
        line-height: 30px;
        padding-left: 10px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        & > span:nth-child(n) {
          cursor: pointer;
          line-height: 20px;
          padding: 5px 10px;
          margin-right: 10px;
          margin-top: 10px;
          border-radius: 2px;
          color: #303133;
        }
        & > span:nth-child(n):hover {
          color: #fff;
          background-color: #3473e6;
        }
        .current {
          color: #fff;
          background-color: #3473e6;
        }
      }
      .but {
        cursor: pointer;
        line-height: 20px;
        padding: 5px 10px;
        margin-right: 10px;
        margin-top: 10px;
        border-radius: 2px;
        color: #303133;
        min-width: 68px;
        margin-left: auto;
      }
    }
    .divider {
      width: 100%;
      height: 1px;
      border-top: 1px dashed #dcdfe6;
    }
  }
  .table {
    min-height: 200px;
  }
  .demo-pagination-block {
    .el-pagination {
      justify-content: center;
    }
  }
}
</style>
