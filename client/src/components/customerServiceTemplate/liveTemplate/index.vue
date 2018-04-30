<style scoped>
.liveComment h1{
    background: #FFF;
    text-align: center;
    border-bottom: 1px solid #EEE;
    border-left: 1px solid #EEE;
    border-right: 1px solid #EEE;
}
.liveComment .boxComment{
    min-height: 250px;
    overflow-y: scroll;
    border-bottom: 0px;
    border-left: 1px solid #d8d8d8;
    border-right: 1px solid #d8d8d8;
}

.box {
    border-radius: 5px;
    color: #4a4a4a;
    display: block;
    padding: 8px;
    margin-bottom: 5px;
}
.box img{
    width: 40px;
    border-radius: 50%;
}
.media-content{
    background-color: #fff;
    border-radius: 5px;
    box-shadow: -1 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    color: #4a4a4a;
    display: block;
    padding: 8px;
}
.media {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: left;
}
.media-left {
    margin-right: 1rem;
}
.media-left, .media-right {
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
.media-content {
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    text-align: left;
}
.media-now {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: left;
    padding: 0px 10px;
    min-height: 159px;
    max-height: 159px;
}
.media-now img{
   border: 2px solid #f1caa3;
    width: 60px;
    border-radius: 50%;
}
.media-left-now {
    margin-right: 1rem;
}
.media-left-now, .media-right-now {
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
.media-content-now {
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    text-align: left;
}

.liveCodeProduct h1{
    background: #ffa500;
    text-align: center;
    color: #FFF;
    text-align: center;
    border-bottom: 1px solid #dedede;
    border-left: none;
    border-right: none;
}
.liveCodeProduct .priceH1 {
    font-size: 20px;
    text-align: left;
    padding: 4px 10px;
    background: #ffa500;
    color: #FFF;
}
.liveCodeProduct .avatarH1 {
    font-size: 20px;
    text-align: left;
    padding: 4px 10px;
    background: #ffa500;
    color: #FFF;
}
.liveCodeProduct .codeProduct {
    font-size: 80px;
    font-weight: 700;
    text-align: center;
    padding: 20px 0px;
    border-bottom: 1px solid #dedede;
    background: #FFF;
}
.liveCodeProduct .priceProduct{
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    padding: 10px 0px;
    border-bottom: 1px solid #dedede;
    background: #FFF;
}
.liveCodeProduct .avatarProduct{
    font-size: 80px;
    font-weight: 700;
    text-align: center;
    padding: 43px 0px;
    border-bottom: 1px solid #dedede;
    background: #FFF;
}
.subBar {
    background:#1a1a1b;border-left: 1px solid rgb(101, 100, 100);
}
.subBar div{
    display: table;
    margin: 5px auto;
}
.normalButton {
    background: #333;
    color: orange;
    border: 1px solid #5e5e5f;
}


.normalButton:hover {
    border-radius: 13px;
    background: #333;
    color: orange;
    border: 1px solid orange;
}


</style>
<style>
.ivu-modal-content {
    position: relative;
    background-color: #fff;
    border: 0;
    border-radius: 0px;
    background-clip: padding-box;
}
.content .ivu-modal-header {
    border-bottom: 1px solid #e9eaec;
    padding: 8px 16px;
    line-height: 1;
}
.content .ivu-modal-header p, .ivu-modal-header-inner {
    display: inline-block;
    width: 100%;
    height: 30px;
    line-height: 31px;
    font-size: 25px;
    color: #1c2438;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
<style lang="less">
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal{
            top: 0;
        }
    }
</style>
<template>
    <div style="display:flex">
        <div style="flex:6;height:90vh">
            <iframe :src="linkLive" style="width:100%;border:0px;height:92.4vh"/>
        </div>
        <div style="flex:8">
            <div class="liveComment">
                <h1><Icon type="radio-waves" ></Icon> LIVE BÌNH LUẬN</h1>
               
                <Scroll :height="300" class="boxComment">
                    
                        <div v-for="item in imes" class="box" v-if="isActiveComment">
                            <article class="media">
                                <div class="media-left">
                                <figure class="image is-64x64">
                                    <img :src="item.avatarFB" alt="Ảnh đại diện">
                                </figure>
                                </div>
                                <div class="media-content">
                                <div class="content">
                                    <p>
                                    <a :href="item.idFB" target="_blank"><strong style="font-size: 17px;
                                color: #365899;">{{item.nameFB}}</strong></a>
                                    <br><span style="font-size: 15px;">
                                    {{item.messageFB}}
                                    </span></p>
                                </div>
                             </div>
                            </article>
                        </div>

                        <div class="box" v-if="!isActiveComment">
                            <vue-content-loading  :height="100">
                                    <circle cx="30" cy="30" r="30" />
                                    <rect x="80" y="10" rx="4" ry="4" width="90%" height="20" />
                                    <rect x="80" y="40" rx="3" ry="3" width="90%" height="60" />
                            </vue-content-loading>
                        <vue-content-loading  :height="100">
                                    <circle cx="30" cy="30" r="30" />
                                    <rect x="80" y="10" rx="4" ry="4" width="90%" height="20" />
                                    <rect x="80" y="40" rx="3" ry="3" width="90%" height="60" />
                            </vue-content-loading>
                     </div>

                    </Scroll>
               <div style="background: #FFF;border:1px solid #dddee1;">
                    <Tabs>
                        <TabPane label="COMMENT HIỆN TẠI" icon="radio-waves">
                        
                        <article class="media-now" v-if="isActiveNowComment">
                                <figure class="media-left-now">
                                    <p class="image is-64x64">
                                    <img :src="avatarFBNow">
                                    </p>
                                </figure>
                                <div class="media-content-now">
                                    <div class="content-now">
                                    <p>
                                    <strong style="font-size: 17px;
                                        border-radius: 21px;">{{ nameFBNow }}</strong>
                                       <p  style="    font-size: 19px;
                                        background: orange;
                                        font-weight: 500;
                                        color: #000;
                                        padding: 5px;
                                        border-radius: 3px;"> {{ messageFBNow }} </p>
                                    </p>
                                    </div>
                                   
                                </div>

                            </article>
                        <article class="media-now" style="padding-left: 30px;" v-else>
                            <vue-content-loading  :height="120" style="width:100%">
                                    <circle cx="30" cy="30" r="30" />
                                    <rect x="80" y="10" rx="4" ry="4" style="width:80%" height="20" />
                                    <rect x="80" y="40" rx="3" ry="3" style="width:80%" height="80" />
                            </vue-content-loading>
                        </article>
                        
                        </TabPane>
                        
                        <TabPane label="SẢN PHẨM TIẾP" icon="cube" disabled>标签二的内容</TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
        <div style="flex:8;">
            <div class="liveCodeProduct">
                <h1><Icon type="at"></Icon> MÃ SẢN PHẨM</h1>
                <div class="codeProduct">
                    4612A
                </div>
            </div>
            <div class="liveCodeProduct">
                <h1 class="priceH1"> GIÁ SẢN PHẨM</h1>
                <div class="priceProduct">
                   {{ testVoice }}
                </div>
            </div>
             <div class="liveCodeProduct">
                <h1 class="avatarH1"> ẢNH ĐẠI DIỆN SẢN PHẨM</h1>
                <div class="avatarProduct">
                   Hihi
                </div>
            </div>
        </div>
         <div style="flex:1" class="subBar">
         
            <div style="margin-top:10px">
                <Tooltip content="ĐƠN HÀNG CỦA BẠN" placement="left">
                 <Badge count="102" overflow-count="999">
                    <Button @click="modalOrder = true" type="text" style="padding:0px">
                    <Avatar class="normalButton" icon="clipboard" size="large"/>
                    </Button>
                </Badge>
                </Tooltip>
            </div>
            <div>
                <Tooltip content="ĐƠN HÀNG DỰ BỊ" placement="left">
                    <Button type="text" style="padding:0px">
                    <Avatar class="normalButton" icon="document-text" size="large"/>
                    </Button>
                </Tooltip>
            </div>
            <div>
                <Tooltip content="MIC THU ÂM" placement="left">
                    <Button @click="getVoice" type="text" style="padding:0px">
                     <Avatar class="normalButton" icon="ios-mic-off" size="large"/>
                    </Button>
                </Tooltip>
            </div>
            <div>
                <Tooltip content="CAMERA CHỤP ẢNH" placement="left">
                    <Button type="text" style="padding:0px">
                     <Avatar class="normalButton" icon="ios-camera" size="large"/>
                    </Button>
                </Tooltip>
            </div>
            <div>
                <Tooltip content="TÙY CHỈNH CÀI ĐẶT" placement="left">
                    <Button type="text" style="padding:0px">
                     <Avatar class="normalButton" icon="ios-settings-strong" size="large"/>
                    </Button>
                </Tooltip>
            </div>
        </div>

        <!-- ====================== MODEL ===================== -->
            <Modal
                v-model="modalOrder" :transition-names="['none']"
                class-name="vertical-center-modal">
                <p slot="header">ĐƠN HÀNG CỦA BẠN</p>
                <p>Content of dialog</p>
                <p>Content of dialog</p>
                <p>Content of dialog</p>
                 <p>Content of dialog</p>
                  <p>Content of dialog</p>
                   <p>Content of dialog</p>
                    <p>Content of dialog</p>
        </Modal>
    </div>
</template>
<script>
import { VclFacebook, VclInstagram } from 'vue-content-loading';
import VueContentLoading from 'vue-content-loading';
export default {
    name: 'liveCSTemplate',
    data(){
        return {
            codeLive: '',
            accountLive: '',
            idVideoLive: '',
            linkLive: '',
            isActiveNowComment: false,
            isActiveComment: false,
            imes: [],
            modalOrder: false,
            avatarFBNow:'',
            nameFBNow:'',
            messageFBNow:'',
            testVoice: ''

        }
    },
    components: {
            VueContentLoading,
            VclFacebook
        },
    created(){
        this.codeLive = this.$route.params.codeLive;
        this.accountLive = this.$route.params.accountLive;
        this.idVideoLive = this.$route.params.idVideoLive;
        this.linkLive = this.$session.get('linkVideoLive');
    },
    sockets:{
        connect(){
            console.log('Client Connected!');
        },
        disconnect() {
            console.log('Dis Connected!');
        },
    },
    methods: {
        getLive(){
                    var _this = this;
                    var idPartner = this.$session.get('auth')._id;
                    var tokenJWT = this.$session.get('jwt');
                    var accountLive = this.$route.params.accountLive;
                    var idVideoLive = this.$route.params.idVideoLive;
                  
                    var accessTokenUser = this.$session.get('longAccessToken');

                    if(accountLive == 'f'){
                        axios.post(`${baseURL}/api/lives/getInfoLive`, {idPartner:idPartner}, {
                            headers: { Authorization: `Bearer ${tokenJWT}` } 
                        }).then((response) => {
                            var accessToken = response.data.accessTokenPage;
                        }).catch((e) => {
                            console.log(e);
                        })
                        
                    }else{
                        var accessToken = accessTokenUser;
                    }


                //============================= GET COMMENT SSE TỪ FB ===============================//
                var LiveComments = new EventSource(`https://streaming-graph.facebook.com/${idVideoLive}/live_comments?access_token=${accessToken}&comment_rate=one_per_two_seconds&fields=from{name,id},message`);
                
                //============================= NHẬN DATA LIVE ===============================//
               
                LiveComments.addEventListener('open', function(event) {
                    
                    console.log('Connected SSE');

                    //============================= NHẬN DATA BÌNH LUẬN ===============================//
                        LiveComments.addEventListener('message', function(event) {

                        var data = JSON.parse(event.data); // NHẬN DATA

                        var messageFB = data.message; // GÁN TIN NHẮN
                        var nameFB = data.from.name; // GÁN TÊN
                        var idFB = `https://facebook.com/${data.from.id}`; // GÁN ID
                        var idFBSys = data.from.id; // GÁN ID
                        var avatarFB = `https://graph.facebook.com/${data.from.id}/picture?type=large`;// GÁN ID LẤY ẢNH

                        // GỬI BÌNH LUẬN HIỂN THỊ CLIENT //
                        _this.imes.push({messageFB,nameFB,avatarFB,idFB,idFBSys});

                        // Lấy Comment Hiện tại
                        var totalComment = _this.imes;
                        var nowComment = totalComment[totalComment.length - 1];

                        if(nowComment){
                            _this.isActiveComment = true;
                            _this.isActiveNowComment = true;
                            _this.avatarFBNow = nowComment.avatarFB;
                            _this.nameFBNow = nowComment.nameFB;
                            _this.messageFBNow = nowComment.messageFB;
                        }

                        // _this.$socket.emit('nowCommentFromClient', {messageFB,nameFB,avatarFB,idFB})
                    });
                   
                });
                
                LiveComments.onerror = function() {
                    console.log("EventSource 404.");
                         _this.modalCheckLive = true;
                        
                };  
              //============================= KIỂM TRA KẾT NỐI OPENLIVE ===============================//
        },
        getVoice(){
             var _this = this;
                var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                var recognition = new SpeechRecognition();
                var noteContent = ''; // nhận giọng nói!
                recognition.lang = 'vi';
                recognition.continuous = true;
                recognition.interimResults = true;
                alert('Đã bật')
                recognition.start(); 
        },
        getCamera(){

        },
        scrollToEnd() {    	
                var container = document.querySelector(".ivu-scroll-container");
                var scrollHeight = container.scrollHeight;
                container.scrollTop = scrollHeight;
            },
    },
    updated(){ 
        this.scrollToEnd();
    },
    mounted(){
        this.getLive();
        this.scrollToEnd();
    }
}
</script>
