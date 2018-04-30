<template>
    <div class="layout">
    <Row>
    </Row>
    <div class="bannerHead">
        <h1 class="titleHeader">WELCOME TO IBEE.VN</h1>
        <p style="text-align:center;font-size:17px;color:#FFF;">
        <vue-typer
        :text='["Chào mừng bạn đã đến với dịch vụ của iBee.vn","Chúng tôi luôn Cố gắng vì nụ cười và sự hài lòng của bạn!","Bạn có thể dùng thử miễn phí trong 7 ngày với 1 click bên dưới!","Quá tuyệt với cho một dịch vụ hỗ trợ tốt cho bạn đúng không nào :D"]'
        :repeat='Infinity'
        :shuffle='false'
        initial-action='typing'
        :pre-type-delay='70'
        :type-delay='70'
        :pre-erase-delay='2000'
        :erase-delay='250'
        erase-style='clear'
        :erase-on-complete='false'
        caret-animation='blink' :style="customCss"
        ></vue-typer>
        </p>
        <center>
            <Button type="primary" style="margin-top: 27px;font-size:15px;padding: 12px 38px;">ĐẾN BẢNG QUẢN TRỊ  </Button> 
             <Button   style="margin-left:5px;margin-top: 27px;font-size:15px;padding: 12px 38px;">TRANG CHỦ </Button>
        </center>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                isCollapsed: false
            };
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        created(){
            var _this = this;
            var checkLogin = this.$session.get('auth');

            if(!checkLogin){
                _this.$router.push('/');
            }else{
                var roleId = _this.$session.get('auth').roleIdPartner;
                
            }
        },
        methods: {
            pushToConnect(){
                    this.$router.push('/');
            },
            customCss(){
                return `text-align:center;font-size:17px;color:#FFF;`
            }
        }
    }
</script>

<style>
.vue-typer .custom.char.typed {
  color: #FFF !important
}
.vue-typer .custom.caret {
  width: 1px;
  background-color: orange;
}
</style>
<style scoped>
.titleHeader{
    text-align:center;margin-top: 60px;font-size: 42px;color:#FFF;font-family: 'Baloo Bhaina', cursive;
}
.vue-typer .custom.char.typed {
  color: #FFF !important
}
.vue-typer .custom.caret {
  width: 1px;
  background-color: orange;
}

    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }

.columns {
    float: left;
    width: 100%;
    padding: 8px;
}

.price {
    list-style-type: none;
    border: 1px solid #eee;
    margin: 0;
    padding: 0;
    -webkit-transition: 0.3s;
    transition: 0.3s;
}

.price:hover {
    box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2)
}

.price .header {
    background-color: #303030;
    color: white;
    font-size: 25px;
}

.price li {
    border-bottom: 1px solid #eee;
    padding: 20px;
    text-align: center;
    font-size: 14px;
}

.price .grey {
    background-color: #eee;
    font-size: 20px;
}

.button {
    background-color: rgb(255, 174, 42);
    border: none;
    color: white;
    padding: 8px 25px;
    text-align: center;
    cursor:pointer;
    text-decoration: none;
    font-size: 18px;
}

.linkLogin{
    border: 1px solid #FFF;
    padding: 5px 10px;
    border-radius: 25px;
    transition: color 0.2s ease;
}
.linkLogin:hover{
    border: 1px solid #FFF;
    padding: 5px 10px;
    border-radius: 25px;
    transition: color 0.2s ease;
}
.ivu-menu-item a{
    color: #ffffff;
    background: transparent;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    transition: color 0.2s ease;
}
.ivu-menu-item a:hover{
    color: #fff;
    background: transparent;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    transition: color 0.2s ease;
}
.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-horizontal .ivu-menu-submenu {
    float: left;
    padding: 0px 7px;
    position: relative;
    cursor: pointer;
    z-index: 3;
    transition: all 0.2s ease-in-out;
}
.serviceBg{
        background: #ffae2a;
}
.bannerHead{
    height: 250px;
}
.layout{
    background: #303030 url('https://sv1.uphinhnhanh.com/images/2018/04/07/5.png');
    position: relative;
    overflow: hidden;
}
.ivu-menu-horizontal {
    height: 45px;
    line-height: 45px;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 6px;
    left: 20px;
}
.ivu-avatar {
    border: 2px solid #d5d5d5;
    display: inline-block;
    text-align: center;
    background: #ccc;
    color: #fff;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    width: 32px;
    height: 32px;
    line-height: 32px;
    border-radius: 16px;
}
.layout-nav{
    width: 410px;
    margin: 0 auto;
    margin-right: 10px;
}
.layout-nav-mobile{
    width: 290px;
    margin: 0 auto;
    margin-right: 10px;
}
.ivu-layout-header {
    background: #495060;
    padding: 0 0px;
    height: 44px;
    line-height: 44px;
}
.ivu-layout {
    height: 44px;
    display: flex;
    flex-direction: column;
    flex: auto;
    background: #f5f7f9;
}
.layout-footer-center{
    text-align: center;
}
</style>