/**
 * Files 模块 - Web 端封装
 */

(function(window) {
    'use strict';
    
    // 确保命名空间存在
    window.__richauto_modules = window.__richauto_modules || {};
    
    // Files 模块定义
    var filesModule = {
        // ==================== 文件类型判断 ====================
        
        /**
         * 判断路径是否是文件
         * @param {string} path - 路径
         * @returns {Promise<boolean>}
         */
        isFile: function(path) {
            return $richauto.invoke('files.isFile', path);
        },
        
        /**
         * 判断路径是否是文件夹
         * @param {string} path - 路径
         * @returns {Promise<boolean>}
         */
        isDir: function(path) {
            return $richauto.invoke('files.isDir', path);
        },
        
        /**
         * 判断文件夹是否为空
         * @param {string} path - 路径
         * @returns {Promise<boolean>}
         */
        isEmptyDir: function(path) {
            return $richauto.invoke('files.isEmptyDir', path);
        },
        
        // ==================== 路径操作 ====================
        
        /**
         * 连接两个路径
         * @param {string} parent - 父目录路径
         * @param {string} child - 子路径
         * @returns {Promise<string>}
         */
        join: function(parent, child) {
            return $richauto.invoke('files.join', parent, child);
        },
        
        /**
         * 获取文件名
         * @param {string} path - 路径
         * @returns {Promise<string>}
         */
        getName: function(path) {
            return $richauto.invoke('files.getName', path);
        },
        
        /**
         * 获取不含扩展名的文件名
         * @param {string} path - 路径
         * @returns {Promise<string>}
         */
        getNameWithoutExtension: function(path) {
            return $richauto.invoke('files.getNameWithoutExtension', path);
        },
        
        /**
         * 获取文件扩展名
         * @param {string} path - 路径
         * @returns {Promise<string>}
         */
        getExtension: function(path) {
            return $richauto.invoke('files.getExtension', path);
        },
        
        /**
         * 获取 SD 卡路径
         * @returns {Promise<string>}
         */
        getSdcardPath: function() {
            return $richauto.invoke('files.getSdcardPath');
        },
        
        /**
         * 获取当前工作目录
         * @returns {Promise<string>}
         */
        cwd: function() {
            return $richauto.invoke('files.cwd');
        },
        
        /**
         * 将相对路径转换为绝对路径
         * @param {string} relativePath - 相对路径
         * @returns {Promise<string>}
         */
        path: function(relativePath) {
            return $richauto.invoke('files.path', relativePath);
        },
        
        // ==================== 文件创建与存在性检查 ====================
        
        /**
         * 创建文件或文件夹
         * @param {string} path - 路径
         * @returns {Promise<boolean>}
         */
        create: function(path) {
            return $richauto.invoke('files.create', path);
        },
        
        /**
         * 创建文件或文件夹（含父目录）
         * @param {string} path - 路径
         * @returns {Promise<boolean>}
         */
        createWithDirs: function(path) {
            return $richauto.invoke('files.createWithDirs', path);
        },
        
        /**
         * 检查文件是否存在
         * @param {string} path - 路径
         * @returns {Promise<boolean>}
         */
        exists: function(path) {
            return $richauto.invoke('files.exists', path);
        },
        
        /**
         * 确保目录存在
         * @param {string} path - 路径
         * @returns {Promise<void>}
         */
        ensureDir: function(path) {
            return $richauto.invoke('files.ensureDir', path);
        },
        
        // ==================== 文件读取 ====================
        
        /**
         * 读取文本文件
         * @param {string} path - 路径
         * @param {string} encoding - 字符编码（可选，默认 utf-8）
         * @returns {Promise<string>}
         */
        read: function(path, encoding) {
            return $richauto.invoke('files.read', path, encoding || 'utf-8');
        },
        
        /**
         * 读取字节数组
         * @param {string} path - 路径
         * @returns {Promise<Array<number>>}
         */
        readBytes: function(path) {
            return $richauto.invoke('files.readBytes', path);
        },
        
        // ==================== 文件写入 ====================
        
        /**
         * 写入文本文件
         * @param {string} path - 路径
         * @param {string} text - 文本内容
         * @param {string} encoding - 字符编码（可选，默认 utf-8）
         * @returns {Promise<boolean>}
         */
        write: function(path, text, encoding) {
            return $richauto.invoke('files.write', path, text, encoding || 'utf-8');
        },
        
        /**
         * 写入字节数组
         * @param {string} path - 路径
         * @param {Array<number>} bytes - 字节数组
         * @returns {Promise<boolean>}
         */
        writeBytes: function(path, bytes) {
            return $richauto.invoke('files.writeBytes', path, bytes);
        },
        
        /**
         * 追加文本到文件末尾
         * @param {string} path - 路径
         * @param {string} text - 文本内容
         * @param {string} encoding - 字符编码（可选，默认 utf-8）
         * @returns {Promise<boolean>}
         */
        append: function(path, text, encoding) {
            return $richauto.invoke('files.append', path, text, encoding || 'utf-8');
        },
        
        /**
         * 追加字节数组到文件末尾
         * @param {string} path - 路径
         * @param {Array<number>} bytes - 字节数组
         * @returns {Promise<boolean>}
         */
        appendBytes: function(path, bytes) {
            return $richauto.invoke('files.appendBytes', path, bytes);
        },
        
        // ==================== 文件操作 ====================
        
        /**
         * 复制文件
         * @param {string} fromPath - 源文件路径
         * @param {string} toPath - 目标文件路径
         * @returns {Promise<boolean>}
         */
        copy: function(fromPath, toPath) {
            return $richauto.invoke('files.copy', fromPath, toPath);
        },
        
        /**
         * 移动文件
         * @param {string} fromPath - 源文件路径
         * @param {string} toPath - 目标文件路径
         * @returns {Promise<boolean>}
         */
        move: function(fromPath, toPath) {
            return $richauto.invoke('files.move', fromPath, toPath);
        },
        
        /**
         * 重命名文件
         * @param {string} path - 原文件路径
         * @param {string} newName - 新文件名
         * @returns {Promise<boolean>}
         */
        rename: function(path, newName) {
            return $richauto.invoke('files.rename', path, newName);
        },
        
        /**
         * 重命名文件（不含扩展名）
         * @param {string} path - 原文件路径
         * @param {string} newName - 新文件名（不含扩展名）
         * @returns {Promise<boolean>}
         */
        renameWithoutExtension: function(path, newName) {
            return $richauto.invoke('files.renameWithoutExtension', path, newName);
        },
        
        /**
         * 删除文件或空文件夹
         * @param {string} path - 路径
         * @returns {Promise<boolean>}
         */
        remove: function(path) {
            return $richauto.invoke('files.remove', path);
        },
        
        /**
         * 删除文件夹及其所有内容
         * @param {string} path - 路径
         * @returns {Promise<boolean>}
         */
        removeDir: function(path) {
            return $richauto.invoke('files.removeDir', path);
        },
        
        // ==================== 目录列表 ====================
        
        /**
         * 列出目录中的文件和文件夹
         * @param {string} path - 路径
         * @returns {Promise<Array<string>>}
         */
        listDir: function(path) {
            return $richauto.invoke('files.listDir', path);
        }
    };
    
    // 挂载到临时命名空间
    window.__richauto_modules.files = filesModule;
    
})(window);


