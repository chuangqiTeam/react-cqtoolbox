import React, {Component} from 'react';
import {Select, CascadeSelect} from '../../components/select';
import Section from '../../components/section';

const genres = [
  {
    "value": 36,
    "label": "总榜"
  },
  {
    "value": 6000,
    "label": "商务"
  },
  {
    "value": 6001,
    "label": "天气"
  },
  {
    "value": 6002,
    "label": "工具"
  },
  {
    "value": 6003,
    "label": "旅游"
  },
  {
    "value": 6004,
    "label": "体育"
  },
  {
    "value": 6005,
    "label": "社交"
  },
  {
    "value": 6006,
    "label": "参考"
  },
  {
    "value": 6007,
    "label": "效率"
  },
  {
    "value": 6008,
    "label": "摄影与录像"
  },
  {
    "value": 6009,
    "label": "新闻"
  },
  {
    "value": 6010,
    "label": "导航"
  },
  {
    "value": 6011,
    "label": "音乐"
  },
  {
    "value": 6012,
    "label": "生活"
  },
  {
    "value": 6013,
    "label": "健康健美"
  },
  {
    "value": 6014,
    "label": "游戏",
    "children": [
      {
        "value": 7001,
        "label": "动作游戏"
      },
      {
        "value": 7002,
        "parentvalue": 6014,
        "nameEnglish": "Adventure",
        "label": "探险游戏"
      },
      {
        "value": 7003,
        "label": "街机游戏"
      },
      {
        "value": 7004,
        "label": "桌面游戏"
      },
      {
        "value": 7005,
        "label": "扑克牌游戏"
      },
      {
        "value": 7006,
        "label": "娱乐场游戏"
      },
      {
        "value": 7007,
        "parentvalue": 6014,
        "nameEnglish": "Dice",
        "label": "骰子游戏"
      },
      {
        "value": 7008,
        "label": "教育游戏"
      },
      {
        "value": 7009,
        "label": "家庭游戏"
      },
      {
        "value": 7011,
        "label": "音乐"
      },
      {
        "value": 7012,
        "label": "智力游戏"
      },
      {
        "value": 7013,
        "label": "赛车游戏"
      },
      {
        "value": 7014,
        "label": "角色扮演游戏"
      },
      {
        "value": 7015,
        "label": "模拟游戏"
      },
      {
        "value": 7016,
        "label": "体育"
      },
      {
        "value": 7017,
        "label": "策略游戏"
      },
      {
        "value": 7018,
        "label": "小游戏"
      },
      {
        "value": 7019,
        "label": "文字游戏"
      }
    ]
  },
  {
    "value": 6015,
    "label": "财务"
  },
  {
    "value": 6016,
    "label": "娱乐"
  },
  {
    "value": 6017,
    "label": "教育"
  },
  {
    "value": 6018,
    "label": "图书"
  },
  {
    "value": 6020,
    "label": "医疗"
  },
  {
    "value": 6021,
    "label": "报刊杂志"
  },
  {
    "value": 6022,
    "label": "商品指南"
  },
  {
    "value": 6023,
    "label": "美食佳饮"
  },
  {
    "value": 6024,
    "label": "购物"
  },
  {
    "value": 6025,
    "label": "贴纸"
  },
  {
    "value": 6050,
    "label": "儿童"
  }
];

const countrys = [
    {value: 'CN', label: '中国'},
    {value: 'US', label: '美国'},
    {value: 'HK', label: '中国香港'},
    {value: 'TW', label: '中国台湾'},
    {value: 'JP', label: '日本'},
    {value: 'TH', label: '泰国'},
    {value: 'KR', label: '韩国'},
    {value: 'ID', label: '印度尼西亚'},
    {value: 'MY', label: '马来西亚'},
    {value: 'IN', label: '印度'},
    {value: 'RU', label: '俄罗斯'},
    {value: 'BR', label: '巴西'},
    {value: 'VN', label: '越南'},
    {value: 'KH', label: '柬埔寨'},
    {value: 'PH', label: '菲律宾'}
];


class SelectTest extends Component {

  render() {
    const selectData = {
      data: countrys,
      maxRowNum: 8,
      onChange: console.log.bind(console),
    };

    const cascadeSelectData = {
      data: genres,
      onChange: console.log.bind(console),
    };

    return (
      <Section title="下拉框">

        <Select {...selectData} />
        <CascadeSelect {...cascadeSelectData} />
      </Section>
    )
  }
}

export default SelectTest;
