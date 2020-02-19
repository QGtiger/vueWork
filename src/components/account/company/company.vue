<template>
    <div>
        <div class="title-cont">
            <div class="title-text">
                企业认证
            </div>
        </div>
        <div class="form-cont">
            <mu-form ref="companyForm" :model="companyForm" :rules="rules">
                <mu-form-item prop="companyName" :rules="rules.companyName">
                    <mu-text-field placeholder="公司名称" v-model="companyForm.companyName" prop="companyName" ></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="companyCode" :rules="rules.companyCode">
                    <mu-text-field placeholder="社会信用代码" v-model="companyForm.companyCode" prop="companyCode"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="companyImg">
                    <label v-if="isShowImg" for="selectImg" class="labelSelectImg">请上传图片
                        <input class="hidden" type="file" id="selectImg" ref="selectImg" @change="handleChangeImg" accept="image/jpg,image/jpeg,image/png" >
                    </label>
                    <div class="show-img" v-if="!isShowImg">
                        <div class="img-cont">上传成功
                            <img src="http://qnpic.top/yoona2.jpg" alt="">
                              <mu-icon style="float: right" value="home"></mu-icon>
                        </div>
                    </div>
                </mu-form-item>
                <mu-form-item prop="companyAddress" :rules="rules.companyAddress">
                    <mu-text-field placeholder="所在地" v-model="companyForm.companyAddress" prop="companyAddress" @focus="handleSelectAddress"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="website">
                    <mu-text-field placeholder="公司网址(选填)" v-model="companyForm.website"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="industry" :rules="rules.industry">
                    <mu-select placeholder="请选择行业" v-model="companyForm.industry" full-width prop="industry">
                        <mu-option v-for="(item, index) in industryList" :key="index" :label="item.dataKey" :value="item.dateValue"></mu-option>
                    </mu-select>
                </mu-form-item>
                <mu-form-item prop="applicationScene" :rules="rules.applicationScene">
                    <mu-text-field placeholder="请填写应用场景" prop="applicationScene" v-model="companyForm.applicationScene"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="productName" :rules="rules.productName">
                    <mu-text-field placeholder="请填写应用名称" prop="productName" v-model="companyForm.productName"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="contacts" :rules="rules.contacts">
                    <mu-text-field placeholder="联系人名称" prop="contacts" v-model="companyForm.contacts"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="job" :rules="rules.job">
                    <mu-text-field placeholder="联系人职务" prop="job" v-model="companyForm.job"></mu-text-field>
                </mu-form-item>
                <div class="form-bottom">
                    <div class="tips-top tips">虹软视觉开发平台将会严格保障您的信息安全</div>
                    <div class="submit-cont">
                        <mu-button full-width color="primary">提交审核</mu-button>
                    </div>
                    <div class="tips-bottom tips">我们将会在1~3个工作日内反馈结果</div>
                </div>
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
        const notNullRule = (value,) => {
            let checkValue = value.replace(/(^\s*) | (\s*$)/g, '');
            return checkValue.length > 0;
        }
        return {
            companyForm: {
                companyName: '',
                companyCode: '',
                companyImg: '',
                companyAddress: '',
                website: '',
                industry: '',
                applicationScene: '',
                productName: '',
                contacts: '',
                job: ''
            },
            isSelectAddress: false,
            industryList: [],
            rules: {
                companyName: [
                    { validate: val => notNullRule(val), message: '公司名称不能为空' }
                ],
                companyCode: [
                    { validate: val => notNullRule(val), message: '社会信用代码不能为空' }
                ],
                companyAddress: [
                    { validate: val => notNullRule(val), message: '所在地不能为空' }
                ],
                industry: [
                    { validate: val => notNullRule(val), message: '行业不能为空' }
                ],
                applicationScene: [
                    { validate: val => notNullRule(val), message: '应用场景不能为空' }
                ],
                productName: [
                    { validate: val => notNullRule(val), message: '应用名称不能为空' }
                ],
                contacts: [
                    { validate: val => notNullRule(val), message: '联系人姓名不能为空' }
                ],
                job: [
                    { validate: val => notNullRule(val), message: '联系人职务不能为空' }
                ]
            },
            isShowImg: false,
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
            this.companyForm.companyAddress = data.join('/');
            this.$refs.companyForm.validate('companyAddress')
        },
        handleGetIndustryList() {
            
        },
        handleChangeImg(file){
            console.log(file)
            console.log(this.$refs.selectImg.files)
            this.$refs.selectImg.value = '';
        }
    }
    
}
</script>

<style lang="less" scoped>
.title-cont{
  margin-left: 20px;
  margin-top: 30px;
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
    .form-bottom{
        margin: 10px 0 20px 0;
        .tips{
            text-align: center;
            color: rgba(0,0,0,.4);
            margin: 10px 0;
        }
    }
    .show-img{
        font-size: 16px;
        color: black;
        border-bottom: 1px solid rgba(0,0,0,.12);
        height: 32px;
        width: 100%;
        .img-cont{
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            img{
                height: 90%;
                width: 32px;
                object-fit: cover;
                margin-left: 20px;
            }
        }
    }
}
</style>