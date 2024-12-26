// 当DOM（文档对象模型）内容加载完成后，执行传入的回调函数
// 这个事件确保在HTML文档结构和元素都加载完毕后再执行JavaScript代码，避免操作未加载完成的元素出现错误
document.addEventListener('DOMContentLoaded', function() {
    // JavaScript代码放在这里


    // 获取的是id为'signup'的元素，注册表单相关的内容区域
    var signupContent = document.getElementById('signup');
    // 获取的是id为'login'的元素，登录表单相关的内容区域
    var loginContent = document.getElementById('login');
    // 获取的是id为'tab-signup'的元素，代表注册选项卡
    var tabSignup = document.getElementById('tab-signup');
    // 获取的是id为'tab-login'的元素，代表登录选项卡
    var tabLogin = document.getElementById('tab-login');


    // 初始显示注册内容，即将注册内容区域的display样式属性设置为'block'，使其可见
    signupContent.style.display = 'block';
    // 初始隐藏登录内容，即将登录内容区域的display样式属性设置为'none'，使其不可见
    loginContent.style.display = 'none';


    // 为注册选项卡（tabSignup）添加点击事件监听器，当点击注册选项卡时执行传入的回调函数
    tabSignup.addEventListener('click', function(e) 
    {
        // 阻止默认的点击行为，例如阻止链接的默认跳转行为（如果元素是a标签等有默认行为的元素）
        e.preventDefault();
        // 显示注册内容区域，将其display样式属性设置为'block'，使其在页面上显示出来
        signupContent.style.display = 'block';
        // 隐藏登录内容区域，将其display样式属性设置为'none'，使其在页面上隐藏起来
        loginContent.style.display = 'none';
        // 为注册选项卡添加类名'active'，通常用于通过CSS样式来体现当前选项卡处于激活状态（比如改变颜色、样式等）
        tabSignup.classList.add('active');
        // 从登录选项卡移除类名'active'，表示登录选项卡此时处于非激活状态
        tabLogin.classList.remove('active');
    });


    // 为登录选项卡（tabLogin）添加点击事件监听器，当点击登录选项卡时执行传入的回调函数
    tabLogin.addEventListener('click', function(e) 
    {
        // 阻止默认的点击行为，例如阻止链接的默认跳转行为（如果元素是a标签等有默认行为的元素）
        e.preventDefault();
        // 隐藏注册内容区域，将其display样式属性设置为'none'，使其在页面上隐藏起来
        signupContent.style.display = 'none';
        // 显示登录内容区域，将其display样式属性设置为'block'，使其在页面上显示出来
        loginContent.style.display = 'block';
        // 从注册选项卡移除类名'active'，表示注册选项卡此时处于非激活状态
        tabSignup.classList.remove('active');
        // 为登录选项卡添加类名'active'，通常用于通过CSS样式来体现当前选项卡处于激活状态（比如改变颜色、样式等）
        tabLogin.classList.add('active');
    });
});

// 获取注册表单元素
const signupForm = document.getElementById('signupForm');

// 为表单的提交事件添加监听器
signupForm.addEventListener('submit', function(event) {
    const termsCheckbox = document.getElementById('termsCheckbox');
    if (!termsCheckbox.checked) {
        alert('请勾选同意格式条款');
        event.preventDefault(); // 阻止表单提交
    }
});