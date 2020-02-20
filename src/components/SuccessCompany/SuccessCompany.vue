<template>
    <div style="text-align: center">
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
    </div>
</template>

<script>

export default {
    name: 'SuccessCompany',
    data() {
        return {
            leftTime: 3
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
            
        }
    }
}
</script>

<style>
.tips{
    font-size: 12px;
    color: #9e9e9e;
}
.confirm-cont{
    margin: 50px 30px 0;
}
</style>