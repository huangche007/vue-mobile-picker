<template>
    <div class="pick-container">
        <div id="name" class="choice-one">请选择</div>
    </div>
</template>
<script>
    import Picker from 'better-picker'
    export default{
        props:['datas','title'],
        data(){
            return{
               resText:""
            }
        },
        mounted(){
            this.initPicker();
        },
        methods:{
            initPicker(){
                const _this = this;
                const len = _this.datas.length;
                let nameEl = document.getElementById('name');
                let config ={
                };
                if(len<=0){
                    console.error("请给该组件传递需要的数据");
                    return;
                }
                config.data = _this.datas;
                switch (len){
                    case 1:
                        config.selectedIndex = [0];
                        break;
                    case 2:
                        config.selectedIndex = [0,1];
                        break;
                    case 3:
                        config.selectedIndex = [0,1,2];
                        break;
                }
                config.title = _this.title?_this.title:"请选择";
                let picker1 = new Picker(config);
                this.select(nameEl,picker1,len);
                this.change(picker1);
                this.valueChange(picker1);
                this.show(nameEl,picker1);
            },
            show(nameEl,picker1){
                nameEl.addEventListener('click', function () {
                    picker1.show();
                });
            },
            valueChange(picker1){
                picker1.on('picker.valuechange', function (selectedVal, selectedIndex) {

                });
            },
            change(picker1){
                picker1.on('picker.change', function (index, selectedIndex) {

                });
            },
            select(nameEl,picker1,len){
                const _this = this;
                picker1.on('picker.select', function (selectedVal, selectedIndex) {
                    nameEl.innerText = "";
                    let choiceIndex = [];
                    let choiceText = [];
                    let choiceObj = {};
                    switch (len){
                        case 1:
                            nameEl.innerText = _this.datas[0][selectedIndex[0]].text;
                            choiceIndex.push(_this.datas[0][selectedIndex[0]].value);
                            choiceText.push(_this.datas[0][selectedIndex[0]].text);
                            break;
                        case 2:
                            nameEl.innerText = _this.datas[0][selectedIndex[0]].text+_this.datas[1][selectedIndex[1]].text;
                            for(let i=0;i<2;i++){
                                choiceIndex.push(_this.datas[i][selectedIndex[i]].value);
                                choiceText.push(_this.datas[i][selectedIndex[i]].text);
                            }
                            break;
                        case 3:
                            nameEl.innerText = _this.datas[0][selectedIndex[0]].text+_this.datas[1][selectedIndex[1]].text+_this.datas[2][selectedIndex[2]].text;
                            for(let i=0;i<3;i++){
                                choiceIndex.push(_this.datas[i][selectedIndex[i]].value);
                                choiceText.push(_this.datas[i][selectedIndex[i]].text);
                            }
                            break;
                    }
                    _this.resText = nameEl.innerText;
                    choiceObj.choiceText = choiceText;
                    choiceObj.choiceIndex = choiceIndex;
                    _this.$emit('child-info',choiceObj);
                });
            }
        }
    }
</script>
<style scoped>
    @import "../assets/css/picker.css";
</style>