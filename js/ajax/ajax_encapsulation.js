// export default {
//     //普通封装ajax
//     ajax_Get: function ajaxGet(url, callback) {
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', url);
//         xhr.send(null);
//         xhr.onload = function () {
//             if (xhr.code == 200) {
//                 console.log('成功')
//                 callback(xhr.responseText)
//             }
//         }
//     },

//     //结合Promise进行封装
//     promise_Get: function ajaxGet(url) {
//         return new Promise(function (success, failed) {
//             var xhr = new XMLHttpRequest();
//             xhr.open('GET', url);
//             xhr.send(null);
//             xhr.onload = function () {
//                 if (xhr.status == 200) {
//                     success(xhr.responseText)
//                 }
//             }
//         })
//     },

//     /* //调用
//     ajaxGet(url).then(function () {
//         console.log(res);
//         console.log(JSON.parse(res));
//         return ajaxGet("请求路径");
//     }) */



//     //post方法封装
//     ajax_Post: function ajaxPost(url, data, callback) {
//         var xhr = new XMLHttpRequest();
//         xhr.open('POST', url)
//         xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
//         xhr.send(data)
//         xhr.onload = function () {
//             if (xhr.status == 200) {
//                 callback(xhr.responseText)
//             }
//         }
//     },
//     //调用
//     /* ajaxPost('请求路径',data,function(res){
//         console.log(res);
//     }) */

//     //结合Promise进行封装
//     promise_post: function ajaxPost(url, data) {
//         return new Promise(function (success) {
//             var xhr = new XMLHttpRequest();
//             xhr.onreadystatechange = function () {
//                 if (xhr.status == 200) {
//                     success(xhr.response)
//                 }
//             }
//             xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
//             xhr.open("POST", url)
//             xhr.send(data)
//         })
//     }
// }

export {ajax_Get}