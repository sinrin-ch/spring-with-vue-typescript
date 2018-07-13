<template>
    <!--<div class="title">-->
        <!--{{user.name}}<br/>-->
        <!--{{user.age}}<br/>-->
        <!--<input type="file" @change="changeFile"/>-->
        <!--{{filename}}-->
        <!--<el-date-picker v-model="value1" type="date" placeholder="选择日期"> </el-date-picker>-->
    <!--</div>-->
    <div>
        <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
                <h5 style="color:#29AAE3;display:inline-block">操作流程</h5>
                <el-button style="float: right;" type="success" v-on:click="makingReset" icon="fa fa-save">&nbsp;提交</el-button>
            </div>
            <div>
                <el-steps :active="LFPact" finish-status="success" >
                    <el-step title="小组" icon="fa fa-edit" description="在小组模块中填写相关的小组信息，并确认所填信息是否无误"></el-step>
                    <el-step title="成员" icon="fa fa-users"  description="点击【新增成员】为你的小组添加成员，并确认所填信息是否无误"></el-step>
                    <el-step title="提交" icon="fa fa-check-circle-o" description="再次确认所有信息无误后，点击【提交】，为你的小组注册"></el-step>
                </el-steps>
            </div>
        </el-card>

        <br />

        <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
                <h5 style="color:#29AAE3;display:inline-block">小组：</h5><span style="color:#29AAE3">请填写以下信息，其中带 <span style="color:red">*</span> 为必填项</span>
            </div>
            <div>
                <el-form :inline="true" :model="formData" label-width="120px">
                    <el-form-item label="部门" required>
                        <el-input v-model="formData.Dept" style="width:253px"></el-input>
                    </el-form-item>
                    <el-form-item label="小组名称" required>
                        <el-input v-model="formData.Name" style="width:253px"></el-input>
                    </el-form-item>
                    <el-form-item label="小组区域" required>
                        <el-input v-model="formData.Area" style="width:253px"></el-input>
                    </el-form-item>
                    <el-form-item label="小组人数">
                        <el-input v-model="formData.Number" readonly style="width:253px"></el-input>
                    </el-form-item>
                    <el-form-item label="负责人" required>
                        <el-input v-model="formData.Responser" style="width:253px"></el-input>
                    </el-form-item>
                    <el-form-item label="组长" required>
                        <el-input v-model="formData.Leader" style="width:253px"></el-input>
                    </el-form-item>
                    <el-form-item label="注册日期">
                        <el-input v-model="formData.RegisterDate" readonly style="width:253px"></el-input>
                    </el-form-item>
                    <el-form-item label="小组编号">
                        <el-input v-model="formData.GroupNo" readonly style="width:253px"></el-input>
                    </el-form-item>
                    <el-form-item label="小组口号" required>
                        <el-input v-model="formData.Slogan" style="width:253px"></el-input>
                    </el-form-item>
                    <el-form-item label="活动主题" required>
                        <el-input v-model="formData.Theme" style="width:253px"></el-input>
                    </el-form-item>
                    <el-form-item label="活动目标" required>
                        <el-input v-model="formData.Target" style="width:253px"></el-input>
                    </el-form-item>
                    <el-form-item label="项目编号">
                        <el-input v-model="formData.ProjectNo" readonly style="width:253px"></el-input>
                    </el-form-item>
                    <el-form-item label="项目开始日期" required>
                        <el-date-picker
                                v-model="formData.ProjectStart"
                                type="date"
                                style="width:253px"
                                format="yyyy/MM/dd"
                                value-format="yyyy-MM-dd"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="预计完成日期" required>
                        <el-date-picker
                                v-model="formData.ProjectEnd"
                                Maximum ="5"
                                minDate="1990-01-01"
                                type="date"
                                placeholder="选择日期时间"
                                style="width:253px"
                                format="yyyy/MM/dd"
                                value-format="yyyy-MM-dd"></el-date-picker>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>

        <br />
    </div>
</template>

<script lang="js">
    // import Vue from 'vue';
    import {People, User} from '@/models/m3';
    import {Component, Vue} from 'vue-property-decorator';


    @Component({
        data: function () {
            return {
                LFPact: 0,
                restaurants: [],
                ListRqNo: '',
                aucDisabled:false,
                formData: {
                    ID:'',
                    Dept: '',
                    Name: '',
                    Area: '',
                    Number: 0,
                    Responser: '',
                    Leader: '',
                    RegisterDate: '',
                    GroupNo: '',
                    Slogan: '',
                    Theme: '',
                    Target: '',
                    ProjectNo: '',
                    ProjectStart: '',
                    ProjectEnd: '',
                },
                finbtnDisabled: true,
                limitOperator:false,
            }
        },
        created: function () {
            //this.createAutoFilter();
        },
        methods: {
            TipsBoxSuccess: function (content) {
                this.$notify.success({
                    title: '成功',
                    dangerouslyUseHTMLString: true,
                    message: content
                });
            },
            TipsBoxError: function (content) {
                this.$notify.error({
                    title: '错误',
                    dangerouslyUseHTMLString: true,
                    message: content
                });
            },
            LFPActNext: function (reset) {
                var _vue = this;
                if (_vue.LFPact++ > 2)
                    _vue.LFPact = 3;
                if (reset == 'T')
                    _vue.LFPact = 0;
            },

            handleKeyDown: function (event) {
                var _vue = this;
                if (event.keyCode == 13) {
                    if (_vue.ListRqNo == "") {
                        _vue.TipsBoxError("请扫描或输入上料单号.");
                        return;
                    }
                    _vue.handleSelect(_vue.ListRqNo);
                }
            },
            handleSelect: function (item) {
                var _vue = this;

                if (_vue.ListRqNo == "") {
                    _vue.TipsBoxError("请扫描或输入上料单号.");
                    return;
                }

                // $.get(regUrl + "/ProdLine/GetRqNoInfo", { "RqNo": _vue.ListRqNo }, function (result) {
                //
                //     if (result.length > 1) {
                //         _vue.$notify.info({
                //             title: '消息',
                //             message: "扫描的上料单号匹配到多条，系统默认选取第一条."
                //         });
                //     } else if (result.length == 0) {
                //         _vue.TipsBoxError("没有找到该上料单号的数据，请确认.");
                //         return;
                //     }
                //
                //     var defI = 0;
                //
                //     _vue.formData.ID = result[defI].NpiMasterID
                //     _vue.formData.RqNo = result[defI].NpiMasterRqNo
                //     _vue.formData.RqQty = result[defI].NpiMasterRqQty
                //     _vue.formData.SONo = result[defI].NpiMasterSONo
                //     _vue.formData.SOQty = result[defI].NpiMasterSOQty
                //     _vue.formData.PrdNo = result[defI].NpiMasterPrdNo
                //     _vue.formData.PrdQty = result[defI].NpiMasterPrdQty
                //     _vue.formData.ItemNo = result[defI].NpiMasterItemNo
                //     _vue.formData.Customer = result[defI].NpiMasterCustomer
                //
                //     _vue.aucDisabled = true;
                //     _vue.LFPActNext('F');
                //
                //     setTimeout(function () {
                //         _vue.finbtnDisabled = false;
                //         _vue.LFPActNext('F');
                //     }, 2000);
                //
                // });
            },
            createAutoFilter: function () {
                var _vue = this;
                var dataShow = [];
                $.getJSON(regUrl + "/ProdLine/GetRqNoHistory", "", function (result) {
                    for (var i = 0; i < result.length; i++) {
                        var dataTemp = { "value": result[i], "index": i };
                        dataShow.push(dataTemp);
                    }
                    _vue.restaurants = dataShow;
                });
            },
            makingStart: function () {
                var _vue = this;

                $.post(regUrl + "/ProdLine/MakingStartSet", {
                    "RqID": _vue.formData.ID
                }, function (result) {
                    if (result == "SUCCESS") {
                        _vue.LFPActNext('F');
                        $("#makingTips").html("提示：生产已经开始，如果需要更改将要生产的上料单号，请点击页面右上方的“重置”按钮。");
                    } else {
                        _vue.TipsBoxError(result.replace("[Error]", "").replace("[Warning]", ""));
                    }
                })
            },
            makingReset: function () {
                var _vue = this;
                _vue.createAutoFilter();//重设置选择项
                _vue.ListRqNo = ''
                _vue.aucDisabled = false;
                _vue.finbtnDisabled = true;
                _vue.formData = {
                    RqNo: '',
                    RqQty: '',
                    SONo: '',
                    SOQty: '',
                    PrdNo: '',
                    PrdQty: '',
                    ItemNo: '',
                    Customer: ''
                }
                _vue.LFPActNext('T');
                $("#makingTips").html("注意：点击该按钮后，其余平板获取信息将取本次扫描信息作为生产信息。该过程不可逆。");

            },
        }
    })
    export default class Hello extends Vue {
        // msg: string = 'Hello';
        // value1: string = '';
        // user: User = {name: 'lala', age: 16, sex: 'female'} as People;
        // filename: string = '';
        //
        // changeFile(e:any) {
        //     this.filename = e.target.files[0].name
        // }

    }
</script>

<style scoped>
    .title {
        font-size: 32px;
    }
</style>