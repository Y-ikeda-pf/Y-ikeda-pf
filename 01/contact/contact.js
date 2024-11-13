$(function(){
    $("#form").validate({
        rules: {
            "name" : {
                 required: true
            },
            "tel" : {
                required: true
            },
            "e-mail" : {
                required: true
            },
            "method" : {
                required: true
            },
        },
        messages:{
            "name" : {
                required : "<span class='warning'>・お名前の入力を行ってください</span><br>"
            },
            "tel" : {
                required : "<span class='warning'>・電話番号の入力を行ってください</span><br>"
            },
            "e-mail" : {
                required: "<span class='warning'>・メールアドレスの入力を行ってください</span><br>"
            },
            "method" : {
                required: "<span class='warning'>・ご希望の連絡方法を選択してください</span><br>"
            },
        },
        errorPlacement: function(error, element){
            error.insertBefore(".btn");
        }
    });
});
