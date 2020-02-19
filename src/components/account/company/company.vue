<template>
    <div>
        <div class="title-cont">
            <div class="title-text">
                企业认证
            </div>
        </div>
        <div class="form-cont">
            <mu-form ref="companyForm" :model="companyForm">
                <mu-form-item prop="companyName">
                    <mu-text-field placeholder="公司名称" v-model="companyForm.companyName" @focus="handleTest"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="companyCode">
                    <mu-text-field placeholder="社会信用代码" v-model="companyForm.companyCode"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="companyImg">
                    <label for="selectImg" class="labelSelectImg">请上传图片
                        <input class="hidden" type="file" id="selectImg" accept="image/jpg,image/jpeg,image/png" >
                    </label>
                </mu-form-item>
                <mu-form-item prop="companyAddress">
                    <mu-text-field placeholder="所在地" v-model="companyForm.companyAddress" @focus="handleSelectAddress"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="website">
                    <mu-text-field placeholder="公司网址(选填)" v-model="companyForm.website"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="industry">
                    <mu-select placeholder="请选择行业" v-model="companyForm.industry" full-width>
                        <mu-option v-for="(item, index) in industryList" :key="index" :label="item.dataKey" :value="item.dateValue"></mu-option>
                    </mu-select>
                </mu-form-item>
            </mu-form>
        </div>
        <mu-bottom-sheet :open.sync="isSelectAddress">
            <SlidAddress @confirm-address="handleConfirmAddress"></SlidAddress>
        </mu-bottom-sheet>
    </div>
</template>

<script>
import SlidAddress from '@/components/SlidAddress/SlidAddress.vue'
export default {
    name: 'AccountCompany',
    components: {
        SlidAddress
    },
    data() {
        return {
            companyForm: {
                companyName: '',
                companyCode: '',
                companyImg: '',
                companyAddress: '',
                website: '',
                industry: ''
            },
            isSelectAddress: false,
            industryList: [],
        }
    },
    methods: {
        handleTest() {
            console.log(123)
        },
        handleSelectAddress(){
            this.isSelectAddress = true;
        },
        handleCloseSlide() {
            this.isSelectAddress = false;
        },
        handleConfirmAddress(data) {
            // console.log(data)
            this.handleCloseSlide();
            this.companyForm.companyAddress = data.join('/')
        },
        handleGetIndustryList() {
            
        }
    }
    
}
</script>

<style lang="less" scoped>
.title-cont{
  margin-left: 15%;
  .title-text{
    font-size: 25px;
    font-weight: 700;
  }
}

.form-cont{
    width: 80%;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    .hidden{
        display: none;
    }
    .labelSelectImg{
        display: block;
        width: 100%;
        height: 32px;
        vertical-align: bottom;
        border-bottom: 1px solid rgba(0,0,0,.12);
        font-size: 16px;
        color: rgba(0,0,0,.54);
    }
}
</style>