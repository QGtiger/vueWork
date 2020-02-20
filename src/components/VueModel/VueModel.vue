<template>
    <div :class="open ? 'model-outside' : ''"  @click="handleClickOutside">
        <transition name="model">
            <div ref="modelCont" class="model-cont" v-if="open">
                <div class="model-header">
                    <div class="model-title">
                        {{ title }}
                    </div>
                    <div class="model-close" @click="handleCloseModel">
                        X
                    </div>
                </div>
                <div class="model-contaner">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>

export default {
    name: "VueModel",
    components: {},
    props: ['open', 'title', 'lockScroll'],
    data() {
        return {
            
        }
    },
    computed: {
    },
    mounted() {

    },
    methods: {
        handleClickOutside(e) {
            var out = this.$refs.modelCont;
            
            if (out && !out.contains(e.target)){
                this.$emit('handleClose',)
            }
        },
        handleCloseModel() {
            this.$emit('handleClose',)
        }
    }
}
</script>

<style lang="less">
.model-enter-active {
  animation: bounce-in .3s;
}
.model-leave-active {
  animation: bounce-in .3s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
}
.model-outside{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 1001;
    left: 0;
    background-color: rgba(0,0,0,.3);
}
.model-cont{
    z-index: 20032;
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    box-shadow: 0px 0px 6px 0px 
        rgba(0, 0, 0, 0.16);
    border-radius: 5px;
    padding: 10px;
    .model-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .model-title{
            margin-left: 10px;
            padding-left: 5px;
            font-size: 18px;
            font-weight: 700;
            position: relative;
        }
        .model-title::before{
            content: '';
            position: absolute;
            width: 4px;
            height: 80%;
            background-color: #bf0000;
            top: 10%;
            left: -6px;
        }
        .model-close{
            padding:5px;
        }
    }
    .model-contaner{
        padding: 10px;
    }
}
</style>