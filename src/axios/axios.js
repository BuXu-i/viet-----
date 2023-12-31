import axios from 'axios'

const axiosObj = axios.create({
  baseURL: 'https://service.test.nttcc.com.cn',
  timeout: 8000,
})

export async function http ({ method = 'get', params, path }) {
  let result;
  if (method === 'get' || method === 'delete') {
    await axiosObj[method](path, {
      params
    }).then(res => {
      result = res.data
    }).catch(err => {
      result = err
    })
  } else if (method === 'post' || method === 'put' || method === 'patch') {
    await axiosObj[method](path, params).then(res => {
      result = res.data
    }).catch(err => {
      result = err
    })
  }
  return result
}
//服务类型
export const ladderlist = {
  method: "get",
  path: "/admin/api/v1/service_type/ladderlist"
}
//技术领域
export const list = {
  method: "get",
  path: "/api/v1/technical/list"
}
//搜索
export const sreach = {
  method: "get",
  path: "/api/v1/service/list",
  params: {
    pageNum: 1,
    pageSize: 1,
    keywords: '',
    serviceTypeId: '',
    serviceTypeId2: '',
    technicalId: '',
    province: '',
    dataOrigin: '',
    logicStatus: 1
  }
}
//数据来源
export const dataSource = [
  "共创云",
  "科惠网",
  "江西省网上常设技术市场",
  "潇湘科技要素大市场"
];
//地区
export const provinces = [
  "湖北省",
  "湖南省",
  "江西省",
  "北京市",
  "天津市",
  "河北省",
  "山西省",
  "内蒙古自治区",
  "辽宁省",
  "吉林省",
  "黑龙江省",
  "上海市",
  "江苏省",
  "浙江省",
  "安徽省",
  "福建省",
  "山东省",
  "河南省",
  "广东省",
  "广西壮族自治区",
  "海南省",
  "重庆市",
  "四川省",
  "贵州省",
  "云南省",
  "西藏自治区",
  "陕西省",
  "甘肃省",
  "青海省",
  "宁夏回族自治区",
  "新疆维吾尔自治区",
  "台湾省",
  "香港特别行政区",
  "澳门特别行政区"
];