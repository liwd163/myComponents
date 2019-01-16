/**
 * Copyright (C), 2017-2018,
 * Author:      liwd
 * Date:        2018-08
 * Description: 组件: 使用SVG Sprite技术显示图标(修改antd的Icon)
 * SVG Sprite技术参见:https://www.zhangxinxu.com/wordpress/2014/07/introduce-svg-sprite-technology/
 * SVG Sprite技术参见:https://segmentfault.com/a/1190000010030377
 * SVG图标设计规范参见:https://ant.design/docs/spec/icon-cn (或http://ant-design.gitee.io/docs/spec/icon-cn)
 * 图标库:http://iconfont.cn/,或其他符合规范的图标库
 *
 * 使用方法:
 *     import Icon from '../../../components/icon'
 *     <Icon type="file-text"/>
 *
 * History:
 */
import _extends from 'babel-runtime/helpers/extends'
import _defineProperty from 'babel-runtime/helpers/defineProperty'
import React from 'react'
import classNames from 'classnames'
import omit from 'omit.js'
import './index.css'

//按需加载svg图标(svg-sprite-loader)
// http://stackoverflow.com/questions/29891458/webpack-require-every-file-in-directory
const _require = require.context('../../assets/icons', true, /\.svg$/)
_require.keys().forEach(key => _require(key))

const Icon = function Icon (props) {
  const type = props.type,
    _props$className = props.className,
    className = _props$className === undefined ? '' : _props$className,
    spin = props.spin

  const classString = classNames(_defineProperty({
    anticon: true,
    'anticon-spin': !!spin || type === 'loading'
  }), className)

  const svgClass = className ? `Icon Icon-${type} ${className}` : `Icon Icon-${type}`

  const use = React.createElement('use', {xlinkHref: `#${type}`})
  const svg = React.createElement('svg', {className: svgClass}, use)
  return React.createElement('i', _extends({}, omit(props, ['type', 'spin']), {className: classString}), svg)
}

export default Icon

