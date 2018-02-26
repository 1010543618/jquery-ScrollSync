# jquery-ScrollSync
A jQuery plug-in that synchronizes the scrolling of several containers with scrollbars, such as iframe.(It works like bidirectional bindings, which let containers' scrollTop and scrollLeft synchronous, and using conditional bidirectional bindings which can avoid cycle synchronizes.)

## Installation
npm安装：

```
npm install jquery-scrollsync
```

## Usage

默认：

```
$('selector').scrollsync()
```

不同步横向滚动条：

```
$('selector').scrollsync({x_sync: false})
```

不同步纵向滚动条：

```
$('selector').scrollsync({y_sync: false})
```

使用smartscroll（使滚动事件执行频率降低，默认10ms内只触发一次）：

```
$('selector').scrollsync({use_smartscroll: true})
```

使用smartscroll且自定义触发间隔时间为30ms：

```
$('selector').scrollsync({smartscroll_delay: true, smartscroll_delay: 30})
```

## Options

Option | Default value | Type | Description
---|---|---|---
x_sync|true|Boolean|是否绑定横向滚动条
y_sync|true|Boolean|是否绑定纵向滚动条
use_smartscroll|false|Boolean|是否使滚动事件执行频率降低，默认10ms内只触发一次
smartscroll_delay|10|Number|自定义use\_smartscroll的触发间隔

