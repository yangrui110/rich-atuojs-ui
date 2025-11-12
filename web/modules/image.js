/**
 * Image 模块 - Web 端封装
 */

(function(window) {
    'use strict';
    
    // 确保命名空间存在
    window.__richauto_modules = window.__richauto_modules || {};
    
    // Image 模块定义
    var imageModule = {
        // ==================== 图片处理 ====================
        
        /**
         * 读取图片文件
         * @param {string} path - 图片路径
         * @returns {Promise<Image>}
         */
        read: function(path) {
            return $richauto.invoke('image.read', path);
        },
        
        /**
         * 加载网络图片
         * @param {string} url - 图片URL地址
         * @returns {Promise<Image>}
         */
        load: function(url) {
            return $richauto.invoke('image.load', url);
        },
        
        /**
         * 复制图片
         * @param {Image} img - 图片对象
         * @returns {Promise<Image>}
         */
        copy: function(img) {
            return $richauto.invoke('image.copy', img);
        },
        
        /**
         * 保存图片
         * @param {Image} image - 图片对象
         * @param {string} path - 保存路径
         * @param {string} format - 图片格式 (png/jpeg/jpg/webp), 默认 png
         * @param {number} quality - 图片质量 (0~100), 默认 100
         * @returns {Promise<void>}
         */
        save: function(image, path, format, quality) {
            var args = ['image.save', image, path];
            if (format !== undefined) args.push(format);
            if (quality !== undefined) args.push(quality);
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * Base64 转图片
         * @param {string} base64 - Base64 数据
         * @returns {Promise<Image>}
         */
        fromBase64: function(base64) {
            return $richauto.invoke('image.fromBase64', base64);
        },
        
        /**
         * 图片转 Base64
         * @param {Image} img - 图片对象
         * @param {string} format - 图片格式 (png/jpeg/jpg/webp), 默认 png
         * @param {number} quality - 图片质量 (0~100), 默认 100
         * @returns {Promise<string>}
         */
        toBase64: function(img, format, quality) {
            var args = ['image.toBase64', img];
            if (format !== undefined) args.push(format);
            if (quality !== undefined) args.push(quality);
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 字节数组转图片
         * @param {Array} bytes - 字节数组
         * @returns {Promise<Image>}
         */
        fromBytes: function(bytes) {
            return $richauto.invoke('image.fromBytes', bytes);
        },
        
        /**
         * 图片转字节数组
         * @param {Image} img - 图片对象
         * @param {string} format - 图片格式 (png/jpeg/jpg/webp), 默认 png
         * @param {number} quality - 图片质量 (0~100), 默认 100
         * @returns {Promise<Array>}
         */
        toBytes: function(img, format, quality) {
            var args = ['image.toBytes', img];
            if (format !== undefined) args.push(format);
            if (quality !== undefined) args.push(quality);
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 剪切图片
         * @param {Image} img - 图片对象
         * @param {number} x - 剪切区域左上角横坐标
         * @param {number} y - 剪切区域左上角纵坐标
         * @param {number} w - 剪切区域宽度
         * @param {number} h - 剪切区域高度
         * @returns {Promise<Image>}
         */
        clip: function(img, x, y, w, h) {
            return $richauto.invoke('image.clip', img, x, y, w, h);
        },
        
        /**
         * 调整图片大小
         * @param {Image} img - 图片对象
         * @param {Array} size - [width, height]
         * @param {string} interpolation - 插值方法 (NEAREST/LINEAR/AREA/CUBIC/LANCZOS4)
         * @returns {Promise<Image>}
         */
        resize: function(img, size, interpolation) {
            var args = ['image.resize', img, size];
            if (interpolation !== undefined) args.push(interpolation);
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 缩放图片
         * @param {Image} img - 图片对象
         * @param {number} fx - 宽度缩放倍数
         * @param {number} fy - 高度缩放倍数
         * @param {string} interpolation - 插值方法 (NEAREST/LINEAR/AREA/CUBIC/LANCZOS4)
         * @returns {Promise<Image>}
         */
        scale: function(img, fx, fy, interpolation) {
            var args = ['image.scale', img, fx, fy];
            if (interpolation !== undefined) args.push(interpolation);
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 旋转图片
         * @param {Image} img - 图片对象
         * @param {number} degree - 旋转角度（逆时针）
         * @param {number} x - 旋转中心x坐标
         * @param {number} y - 旋转中心y坐标
         * @returns {Promise<Image>}
         */
        rotate: function(img, degree, x, y) {
            var args = ['image.rotate', img, degree];
            if (x !== undefined) args.push(x);
            if (y !== undefined) args.push(y);
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 连接两张图片
         * @param {Image} img1 - 图片1
         * @param {Image} img2 - 图片2
         * @param {string} direction - 连接方向 (LEFT/RIGHT/TOP/BOTTOM)
         * @returns {Promise<Image>}
         */
        concat: function(img1, img2, direction) {
            var args = ['image.concat', img1, img2];
            if (direction !== undefined) args.push(direction);
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 灰度化图片
         * @param {Image} img - 图片对象
         * @returns {Promise<Image>}
         */
        grayscale: function(img) {
            return $richauto.invoke('image.grayscale', img);
        },
        
        /**
         * 图片阈值化
         * @param {Image} img - 图片对象
         * @param {number} threshold - 阈值
         * @param {number} maxVal - 最大值
         * @param {string} type - 阈值化类型 (BINARY/BINARY_INV/TRUNC/TOZERO/TOZERO_INV/OTSU/TRIANGLE)
         * @returns {Promise<Image>}
         */
        threshold: function(img, threshold, maxVal, type) {
            var args = ['image.threshold', img, threshold, maxVal];
            if (type !== undefined) args.push(type);
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 自适应阈值化
         * @param {Image} img - 图片对象
         * @param {number} maxValue - 最大值
         * @param {string} adaptiveMethod - 自适应方法 (MEAN_C/GAUSSIAN_C)
         * @param {string} thresholdType - 阈值化类型 (BINARY/BINARY_INV)
         * @param {number} blockSize - 邻域块大小
         * @param {number} C - 偏移值
         * @returns {Promise<Image>}
         */
        adaptiveThreshold: function(img, maxValue, adaptiveMethod, thresholdType, blockSize, C) {
            return $richauto.invoke('image.adaptiveThreshold', img, maxValue, adaptiveMethod, thresholdType, blockSize, C);
        },
        
        /**
         * 颜色空间转换
         * @param {Image} img - 图片对象
         * @param {string} code - 转换类型 (BGR2GRAY/BGR2HSV 等)
         * @param {number} dstCn - 目标颜色通道数
         * @returns {Promise<Image>}
         */
        cvtColor: function(img, code, dstCn) {
            var args = ['image.cvtColor', img, code];
            if (dstCn !== undefined) args.push(dstCn);
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 范围二值化
         * @param {Image} img - 图片对象
         * @param {string|number} lowerBound - 颜色下界
         * @param {string|number} upperBound - 颜色上界
         * @returns {Promise<Image>}
         */
        inRange: function(img, lowerBound, upperBound) {
            return $richauto.invoke('image.inRange', img, lowerBound, upperBound);
        },
        
        /**
         * 区间二值化
         * @param {Image} img - 图片对象
         * @param {string|number} color - 颜色值
         * @param {number} interval - 范围间隔
         * @returns {Promise<Image>}
         */
        interval: function(img, color, interval) {
            return $richauto.invoke('image.interval', img, color, interval);
        },
        
        /**
         * 模糊处理
         * @param {Image} img - 图片对象
         * @param {Array} size - 滤波器大小 [width, height]
         * @param {Array} anchor - 锚点位置
         * @param {string} type - 边缘像素类型
         * @returns {Promise<Image>}
         */
        blur: function(img, size, anchor, type) {
            var args = ['image.blur', img, size];
            if (anchor !== undefined) args.push(anchor);
            if (type !== undefined) args.push(type);
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 中值滤波
         * @param {Image} img - 图片对象
         * @param {number} size - 滤波器大小（正奇数）
         * @returns {Promise<Image>}
         */
        medianBlur: function(img, size) {
            return $richauto.invoke('image.medianBlur', img, size);
        },
        
        /**
         * 高斯模糊
         * @param {Image} img - 图片对象
         * @param {Array} size - 滤波器大小 [width, height]
         * @param {number} sigmaX - x方向标准方差
         * @param {number} sigmaY - y方向标准方差
         * @param {string} type - 边缘像素类型
         * @returns {Promise<Image>}
         */
        gaussianBlur: function(img, size, sigmaX, sigmaY, type) {
            var args = ['image.gaussianBlur', img, size];
            if (sigmaX !== undefined) args.push(sigmaX);
            if (sigmaY !== undefined) args.push(sigmaY);
            if (type !== undefined) args.push(type);
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * Mat 转 Image
         * @param {Mat} mat - OpenCV Mat 对象
         * @returns {Promise<Image>}
         */
        matToImage: function(mat) {
            return $richauto.invoke('image.matToImage', mat);
        },
        
        // ==================== 找图找色 ====================
        
        /**
         * 请求截图权限
         * @param {boolean} landscape - 是否横屏截图
         * @returns {Promise<boolean>}
         */
        requestScreenCapture: function(landscape) {
            var args = ['image.requestScreenCapture'];
            if (landscape !== undefined) args.push(landscape);
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 截取屏幕
         * @param {string} path - 可选，保存路径
         * @returns {Promise<Image>}
         */
        captureScreen: function(path) {
            var args = ['image.captureScreen'];
            if (path !== undefined) args.push(path);
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 获取图片指定位置的像素颜色
         * @param {Image} image - 图片对象
         * @param {number} x - 横坐标
         * @param {number} y - 纵坐标
         * @returns {Promise<number>}
         */
        pixel: function(image, x, y) {
            return $richauto.invoke('image.pixel', image, x, y);
        },
        
        /**
         * 在图片中找色
         * @param {Image} image - 图片对象
         * @param {number|string} color - 要查找的颜色
         * @param {Object} options - 选项 {region, threshold}
         * @returns {Promise<Point>}
         */
        findColor: function(image, color, options) {
            return $richauto.invoke('image.findColor', image, color, options);
        },
        
        /**
         * 在指定区域找色
         * @param {Image} img - 图片对象
         * @param {number|string} color - 要查找的颜色
         * @param {number} x - 区域左上角x坐标
         * @param {number} y - 区域左上角y坐标
         * @param {number} width - 区域宽度
         * @param {number} height - 区域高度
         * @param {number} threshold - 颜色相似度阈值
         * @returns {Promise<Point>}
         */
        findColorInRegion: function(img, color, x, y, width, height, threshold) {
            var args = ['image.findColorInRegion', img, color, x, y];
            if (width !== undefined) args.push(width);
            if (height !== undefined) args.push(height);
            if (threshold !== undefined) args.push(threshold);
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 找完全相等的颜色
         * @param {Image} img - 图片对象
         * @param {number|string} color - 要查找的颜色
         * @param {number} x - 区域左上角x坐标
         * @param {number} y - 区域左上角y坐标
         * @param {number} width - 区域宽度
         * @param {number} height - 区域高度
         * @returns {Promise<Point>}
         */
        findColorEquals: function(img, color, x, y, width, height) {
            var args = ['image.findColorEquals', img, color];
            if (x !== undefined) args.push(x);
            if (y !== undefined) args.push(y);
            if (width !== undefined) args.push(width);
            if (height !== undefined) args.push(height);
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 多点找色
         * @param {Image} img - 图片对象
         * @param {number|string} firstColor - 第一个点的颜色
         * @param {Array} colors - 其他点的相对位置和颜色 [[x, y, color], ...]
         * @param {Object} options - 选项 {region, threshold}
         * @returns {Promise<Point>}
         */
        findMultiColors: function(img, firstColor, colors, options) {
            return $richauto.invoke('image.findMultiColors', img, firstColor, colors, options);
        },
        
        /**
         * 检测指定位置颜色
         * @param {Image} image - 图片对象
         * @param {number|string} color - 要检测的颜色
         * @param {number} x - 横坐标
         * @param {number} y - 纵坐标
         * @param {number} threshold - 颜色相似度阈值
         * @param {string} algorithm - 颜色匹配算法 (equal/diff/rgb/rgb+/hs)
         * @returns {Promise<boolean>}
         */
        detectsColor: function(image, color, x, y, threshold, algorithm) {
            var args = ['image.detectsColor', image, color, x, y];
            if (threshold !== undefined) args.push(threshold);
            if (algorithm !== undefined) args.push(algorithm);
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 找图
         * @param {Image} img - 大图片
         * @param {Image} template - 小图片（模板）
         * @param {Object} options - 选项 {threshold, region, level}
         * @returns {Promise<Point>}
         */
        findImage: function(img, template, options) {
            return $richauto.invoke('image.findImage', img, template, options);
        },
        
        /**
         * 在指定区域找图
         * @param {Image} img - 大图片
         * @param {Image} template - 小图片（模板）
         * @param {number} x - 区域左上角x坐标
         * @param {number} y - 区域左上角y坐标
         * @param {number} width - 区域宽度
         * @param {number} height - 区域高度
         * @param {number} threshold - 图片相似度阈值
         * @returns {Promise<Point>}
         */
        findImageInRegion: function(img, template, x, y, width, height, threshold) {
            var args = ['image.findImageInRegion', img, template, x, y];
            if (width !== undefined) args.push(width);
            if (height !== undefined) args.push(height);
            if (threshold !== undefined) args.push(threshold);
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 模板匹配（多结果）
         * @param {Image} img - 大图片
         * @param {Image} template - 小图片（模板）
         * @param {Object} options - 选项 {threshold, region, max, level}
         * @returns {Promise<MatchingResult>}
         */
        matchTemplate: function(img, template, options) {
            return $richauto.invoke('image.matchTemplate', img, template, options);
        }
    };
    
    // 挂载到临时命名空间
    window.__richauto_modules.image = imageModule;
    
})(window);

