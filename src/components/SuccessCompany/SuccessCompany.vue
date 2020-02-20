<template>
    <div>
        <div class="img-cont">
            <img src="../../assets/images/success1.png" alt="">
        </div>
        <div class="container">
            <h2>您已提交企业认证信息</h2>
            <p class="tips">我们将会在1-3个工作日内完成审核，请耐心等待</p>
            <p class="tips">({{ leftTime }}s) 回到开发者中心</p>
        </div>
        <div class="confirm-cont">
            <div class="confirm-btn">
                <mu-button color="primary" full-width @click="handleConfirm">确定</mu-button>
            </div>
        </div>
        <VueModel :open="open" title="认证权益" @handleClose="handleCloseModel">
            <div class="company-cont equity">
                <div class="equity-title">
                    完成企业认证
                </div>
                <div class="equity-cont">
                    <ul>
                        <li>获赠增值版SDk各3个测试吗，有效期3个月</li>
                        <li>免费下载使用门禁应用套件</li>
                        <li>免费版SDK最新版本优先使用</li>
                        <li>优质的工单服务，技术工程师一对一服务</li>
                    </ul>
                </div>
            </div>
            <div class="person-cont equity">
                <div class="equity-title">
                    完成个人认证
                </div>
                <div class="equity-cont">
                    <ul>
                        <li>免费版SDK最新版本优先使用</li>
                        <li>优质的工单服务</li>
                    </ul>
                </div>
            </div>
        </VueModel>
    </div>
</template>

<script>
import VueModel from '@/components/VueModel/VueModel.vue';
export default {
    name: 'SuccessCompany',
    components: { VueModel },
    data() {
        return {
            leftTime: 3,
            open: false,
            show: false
        }
    },
    mounted() {
        let timer = setInterval(()=>{
            this.leftTime --;
            if(this.leftTime == 0){
                clearInterval(timer)
            }
        }, 1000)
    },
    methods: {
        handleConfirm() {
            this.open = true;
        },
        handleCloseModel() {
            this.open = false;
        }
    }
}
</script>

<style lang="less">
.tips{
    font-size: 12px;
    color: #9e9e9e;
}
.confirm-cont{
    margin: 50px 30px 0;
}
.img-cont{
    text-align: center;
}
.container{
    text-align: center;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.equity{
    background-color: #fafafa;
    padding: 10px;
    margin: 10px 0;
    .equity-title{
        color: #bf0000;
        font-size: 18px;
        font-weight: 700;
    }
    .equity-cont{
        margin-top: 10px;
    }
    ul{
        list-style: none;
        li{
            padding-left: 10px;
            position: relative;
            color:#151515;
            margin: 4px 0;
        }
        li::before{
            content: '';
            position: absolute;
            width: 4px;
            height: 4px;
            top: calc(50% - 1px);
            left: -4px;
            border-radius: 100%;
            display: block;
            background-color: #bf0000;
        }
    }
}
</style>