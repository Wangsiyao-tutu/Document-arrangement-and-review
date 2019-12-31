/** Created by guangqiang on 2018-06-29 18:17:42 */

import { timestampToCommonDate } from "@/utils/formatTime"
import { _array } from "@/utils/arrayExtension"

// 获得本地数据缓存
const getStorage = key => new Promise((resolve, reject) => {
    wx.getStorage({
        key: key,
        success(res) {
            resolve(res.data)
        },
        fail(e) {
            reject(e)
        }
    })
})

//  设置本地数据缓存
const setStorage = (key, value) => new Promise((resolve, reject) => {
    wx.setStorage({
        key: key,
        data: value,
        success() {
            resolve()
        },
        fail(e) {
            reject(e)
        }
    })
})

// 移除本地数据缓存
const removeStorage = key => new Promise((resolve, reject) => {
    wx.removeStorage({
        key: key,
        success(res) {
            resolve(res.data)
        },
        fail(e) {
            reject(e)
        }
    })
})

// 清理本地数据缓存
const clearStorage = () => new Promise((resolve, reject) => {
    try {
        wx.clearStorageSync()
        resolve()
    } catch (e) {
        reject(e)
    }
})

// 获取当前地理位置
const getLocation = () => new Promise((resolve) => {
    wx.getLocation({
        type: "wgs84",
        success({ latitude, longitude, speed, accuracy }) {
            resolve({ latitude, longitude, speed, accuracy })
        },
        fail() {
            resolve({
                latitude: -999,
                longitude: -999
            })
        }
    })
})

// 打开地图选择位置
const chooseLocation = () => new Promise((resolve, reject) => {
    wx.chooseLocation({
        success(res) {
            resolve(res)
        },
        fail(e) {
            reject(e)
        }
    })
})

// 使用微信内置地图查看位置
const openLocation = ({ latitude, longitude }) => new Promise((resolve, reject) => {
    wx.openLocation({
        latitude: latitude,
        longitude: longitude,
        scale: 18,
        success: function(res) {
            resolve(res)
        },
        fail: function(e) {
            reject(e)
        }
    })
})

// 调用接口获取登录凭证，通过凭证换取用户登陆信息，具体查看官方文档
const login = () => new Promise((resolve, reject) => {
    wx.login({
        success(res) {
            resolve(res)
        },
        fail(e) {
            reject(e)
        }
    })
})

// 获取用户信息
const getUserInfo = obj => new Promise((resolve, reject) => {
    wx.getUserInfo({
        ...obj,
        success(res) {
            resolve(res)
        },
        fail(e) {
            reject(e)
        }
    })
})

// 开放接口
// 批量添加卡券。只有通过<认证>的小程序或文化互动类目的小游戏才能使用
const addCard = (cardId = '', cardExt = '', ) => new Promise((resolve, reject) => {
    wx.addCard({
        cardList: [{
            cardId: cardId,
            cardExt: cardExt
        }],
        success: function(res) {
            resolve(res)
        },
        fail: function(e) {
            reject(e)
        }
    })
})

// 从本地相册选择图片或使用相机拍照。
const chooseImage = (count = 1, sourceType = ['album']) => new Promise((resolve, reject) => {
    wx.chooseImage({
        count,
        sourceType,
        success(res) {
            resolve(res)
        },
        fail(e) {
            reject(e)
        }
    })
})

// 本接口提供基于小程序的条码/二维码识别的API。
const handleScan = () => new Promise((resolve, reject) => {
    wx.scanCode({
        success: function(res) {
            resolve(res)
        },
        fail: function(e) {
            reject(e)
        }
    })
})

// 显示模态对话框
const showModal = (title, content, isCancel) => new Promise(resolve => {
    wx.showModal({
        title: title,
        content: content,
        showCancel: isCancel,
        success: function(res) {
            if (res.confirm) {
                resolve('ok')
            } else if (res.cancel) {
                resolve('cancle')
            }
        }
    })
})

// 显示消息提示框，失败
const toast = content => new Promise((resolve, reject) => {
    wx.showToast({
        title: content,
        icon: 'none',
        duration: 4000,
        success: function(res) {
            resolve(res)
        },
        fail: function(e) {
            reject(e)
        }
    })
})

// 显示消息提示框，失败
const toastSuccess = content => new Promise((resolve, reject) => {
    wx.showToast({
        title: content,
        icon: 'success',
        duration: 3000,
        success: function(res) {
            resolve(res)
        },
        fail: function(e) {
            reject(e)
        }
    })
})

// 显示操作菜单
const actionSheet = items => new Promise((resolve, reject) => {
    wx.showActionSheet({
        itemList: items,
        success: function(res) {
            resolve(res.tapIndex)
        },
        fail: function(e) {
            reject(e)
        }
    })
})

// 显示当前页面的转发按钮
const showShareMenu = () => {
    return wx.showShareMenu
}

// 将页面滚动到目标位置，支持选择器和滚动距离两种方式定位
const pageScrollTo = () => {
    return wx.pageScrollTo
}

// 显示模态对话框
const alert = content => new Promise((resolve, reject) => {
    wx.showModal({
        title: '',
        content,
        showCancel: false,
        success: function(res) {
            resolve(res)
        },
        fail: function(e) {
            reject(e)
        }
    })
})

// 路由跳转
const navigateTo = url => {
    wx.navigateTo({
        url
    })
}

// 路由跳转
const redirectTo = url => {
    wx.redirectTo({
        url: url
    })
}

// 开始下拉刷新。调用后触发下拉刷新动画，效果与用户手动下拉刷新一致
const startPullDownRefresh = () => new Promise((resolve, reject) => {
    wx.startPullDownRefresh({
        success(res) {
            resolve(res)
        },
        fail(e) {
            reject(e)
        }
    })
})

// 停止当前页面下拉刷新
const stopPullDownRefresh = () => new Promise((resolve, reject) => {
    wx.stopPullDownRefresh({
        success(res) {
            resolve(res)
        },
        fail(e) {
            reject(e)
        }
    })
})


const request = params => new Promise((resolve, reject) => {
    // 在当前页面显示导航条加载动画
    wx.showNavigationBarLoading()
    const beforeRequest = new Date().getTime()
    wx.request({
        url: params.url,
        data: params.data,
        header: { 'Content-Type': 'application/json', ...params.header },
        method: params.method,
        success: function(res) {
            let isSuccess = false
            if (parseInt(res.statusCode / 100) == 2) {
                if (res.data.code == 0) {
                    isSuccess = true
                }
            }

            let response = res.data
            response.statusCode = res.statusCode
            const pages = getCurrentPages()
            const currentPage = pages[pages.length - 1]
            const route = currentPage.route
            const networkType = wx.getStorageSync('networkType')
            const afterRequest = new Date().getTime()
            const timeDif = afterRequest - beforeRequest
            var networkArr = wx.getStorageSync('networkArr') || []
            if (networkArr.length >= 30) {
                wx.removeStorageSync('networkArr')
                networkArr = []
            }
            var time = timestampToCommonDate(new Date().getTime())
            networkArr = _array.unshift(networkArr, { url: params.url, params: params.data, res: response, time, route, timeDif, networkType, isSuccess })
            wx.setStorageSync('networkArr', networkArr)

            if (!isSuccess) {
                wx.showToast({
                    title: res.data.message,
                    icon: 'none',
                    duration: 4000
                })
            }
            wx.hideNavigationBarLoading()
            resolve(res.data)
        },
        fail: function(e) {
            const pages = getCurrentPages()
            const currentPage = pages[pages.length - 1]
            const route = currentPage.route
            const networkType = wx.getStorageSync('networkType')
            const afterRequest = new Date().getTime()
            const timeDif = afterRequest - beforeRequest
            var networkArr = wx.getStorageSync('networkArr') || []
            if (networkArr.length >= 30) {
                wx.removeStorageSync('networkArr')
                networkArr = []
            }
            var time = timestampToCommonDate(new Date().getTime())
            networkArr = _array.unshift(networkArr, { url, params, res: e, time, route, timeDif, networkType, isSuccess: false })
            wx.setStorageSync('networkArr', networkArr)

            wx.showToast({
                title: e.errMsg,
                icon: 'none',
                duration: 4000
            })
            wx.hideNavigationBarLoading()
            reject(e)
        }
    })
})

const checkNetWork = () => new Promise((resolve, reject) => {
    // 获得当前网络类型
    wx.getNetworkType({
        success: function(res) {
            let networkType = res.networkType
            if (networkType === 'none' || networkType === 'unknown') {
                resolve(false)
            } else {
                resolve(true)
            }
        },
        fail: function(e) {
            resolve(false)
        }
    })
})

// 将本地资源上传到服务器
const uploadFile = params => new Promise((resolve, reject) => {
    wx.uploadFile({
        ...params,
        success: function(res) {
            resolve(res)
        },
        fail: function(e) {
            reject(e)
        }
    })
})

const saveImage = url => {
    // 下载文件到本地，客户端直接发起get请求，返回文件的本地临时路径
    wx.downloadFile({
        url: url,
        success: function(res) {
            // 文件的本地临时路径
            let path = res.tempFilePath;
            // 保存图片到系统相册
            wx.saveImageToPhotosAlbum({
                // 图片文件路径，可以是临时文件路径或永久文件路径，不支持网络图片路径
                filePath: path,
                success(res) {
                    toastSuccess('保存成功！')
                },
                fail(res) {
                    toast('保存失败！')
                }
            });
        },
        fail: function(res) {
            toast('保存失败！')
        }
    });
}

// 检查登录态是否过期
const checkSession = () => new Promise((resolve, reject) => {
    wx.checkSession({
        success: function() {
            // session_key 未过期，并且在本生命周期一直有效
            resolve(true)
        },
        fail: function() {
            // session_key 已经失效，需要重新执行登录流程
            resolve(false)
        }
    })
})

export {
    getStorage,
    setStorage,
    getLocation,
    chooseLocation,
    openLocation,
    removeStorage,
    clearStorage,
    login,
    request,
    chooseImage,
    showShareMenu,
    pageScrollTo,
    getUserInfo,
    alert,
    navigateTo,
    redirectTo,
    startPullDownRefresh,
    stopPullDownRefresh,
    uploadFile,
    handleScan,
    checkNetWork,
    addCard,
    showModal,
    toast,
    toastSuccess,
    actionSheet,
    saveImage,
    checkSession
}