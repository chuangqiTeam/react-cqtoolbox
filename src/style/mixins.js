/**
 * Copyright (c) 2016-present, rainie, Inc.
 * All rights reserved.
 *
 */

/**
 * 清除浮动方案
 * @method clearfix
 */
function clearfix(mixin) {
  return {
    '&:before': {
      content: '""',
      display: 'table',
    },
    '&:after': {
      content: '""',
      display: 'table',
      clear: 'both',
    }
  };
}

/**
 * 元素在包含块中的对齐方式，默认为水平垂直对齐
 * @method align
 * @param  {Keywords} flexbox        =             'flex'   指定包含块布局方式
 * @param  {String} type           =             'text'   指定居中元素类型，
 * @param  {Keywords} justifyContent =             'center' 指定元素水平对齐方式
 * @param  {Keywords} alignItems     =             'center' 指定元素垂直对齐方式
 */
function align(mixin, flexbox = 'flex', type = 'text', justifyContent = 'center', alignItems = 'center') {
  const common = {
    'display': flexbox,
    'justify-content': justifyContent,
    'align-items': alignItems,
  };

  const text = {
    'word-wrap': 'break-word',
    'word-break': 'break-all',
  };

  const image = {
    '&>*': {
      'max-width': '100%',
      'max-height': '100%',
    }
  };

  return Object.assign(common, type === 'text' ? text : image);
}


/**
 * 生成全屏方法
 * @method fullscreen
 * @param  {Number} zIndex   =             null       [description]
 * @param  {Keywords} position =           'absolute' [description]
 */
function fullscreen(mixin, zIndex = null, position = 'absolute') {
  return {
    'position': position,
    'z-index': zIndex,
    'top': 0,
    'right': 0,
    'bottom': 0,
    'left': 0,
  };
}





module.exports = {
  clearfix,
  align,
  fullscreen,
};
