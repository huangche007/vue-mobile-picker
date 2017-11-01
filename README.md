# vue-mobile-picker

> vue-mobile-picker is a picker for [picker](https://github.com/ustbhuangyi/picker "https://github.com/ustbhuangyi/picker") in vue,You can easily use this component.

## Usage

    npm install vue-mobile-picker -S
	npm install better-picker --save-dev

## How to use?

You can import the whole package or each module individual.

	import VueMobilePicker from 'vue-mobile-picker'
	Vue.use(VueMobilePicker)

create one you component

	<picker :datas="datas" :title="title" @child-info="get"></picker>

this data of datas and title just like this:


| Name        | Type           | Necessary  |Desc|
| ------------- |:-------------:| -----:| -----:|
| datas     | Array | Yes |It's a two dimensional |
| title      | String      |   No |this picker's title |

	datas:[
            [
                {
                    text: '小美',
                    value: 1
                },
                {
                  text: '猪猪',
                  value: 2
                }
            ],
            [
                {
                    text: '张三',
                    value: 1
                },
                {
                    text: '李四',
                    value: 2
                },
                {
                    text: '王五',
                    value: 3
                },
                {
                    text: '赵六',
                    value: 4
                },
                {
                    text: '吴七',
                    value: 5
                },
                {
                    text: '陈八',
                    value: 6
                },
                {
                    text: '杜九',
                    value: 7
                },
                {
                    text: '黄十',
                    value: 8
                },
                {
                    text: '呵呵',
                    value: 9
                },
                {
                    text: '哈哈',
                    value: 10
                },
                {
                    text: '嘿嘿',
                    value: 11
                },
                {
                    text: '啦啦',
                    value: 12
                }
            ],
            [
                {
                    text: '开心',
                    value: 1
                }, {
                    text: '生气',
                    value: 2
                },
                {
                    text: '搞笑',
                    value: 3
                }, {
                    text: '难过',
                    value: 4
                }
            ]

        ],

## How get the choice result

- just call this method named get:

		get(choiceData){
			console.log(choiceData)
		}	


## Single row selection

![单选](http://img.blog.csdn.net/20171101152022367?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdTAxMDYyNDk4Ng==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

## Multi row selection

![多选](http://img.blog.csdn.net/20171101152145069?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdTAxMDYyNDk4Ng==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

## Run Demo

- npm install
- npm run dev