window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// Tauri配置脚本
// 用于pakeplus打包时配置Tauri API权限

// 配置Tauri权限
const tauriConfig = {
  permissions: {
    fs: {
      all: true, // 允许所有文件系统操作
      readFile: true,
      writeFile: true,
      readDir: true,
      createDir: true,
      removeFile: true
    },
    path: {
      all: true // 允许所有路径操作
    },
    dialog: {
      all: true // 允许对话框操作
    }
  }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
  module.exports = tauriConfig;
} else if (typeof window !== 'undefined') {
  window.tauriConfig = tauriConfig;
}