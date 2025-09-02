# 🍌 Pico-Banana 科研海报AI生成指令工具

> 基于AI的科研海报设计助手，支持多种设计风格和学科领域的智能指令生成

## ✨ 核心功能

- 🎨 **多样化设计风格**：现代、学术、创意、极简、专业等风格选择
- 🔬 **学科领域覆盖**：生物医学、物理科学、工程技术、化学材料等8大学科
- 🎯 **智能配置选项**：色彩方案、布局样式、字体风格、图标风格
- 🔄 **3D翻转卡片**：正面预览海报效果，背面显示完整Prompt指令
- 📋 **一键复制功能**：快速复制生成指令，提高工作效率

## 🚀 快速开始

### 方法一：直接运行（推荐）
```bash
# 克隆或下载项目
cd Pico-Banana

# 使用任意HTTP服务器运行
npx serve .          # 使用serve
# 或
python -m http.server 8000  # 使用Python
# 或
php -S localhost:8000       # 使用PHP
```

### 方法二：开发模式
```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 🛠️ 技术架构

- **前端框架**：React 18 + Hooks
- **样式系统**：Tailwind CSS
- **图标库**：Lucide Icons
- **构建工具**：Babel Standalone
- **部署方式**：静态文件部署

## 📁 项目结构

```
Pico-Banana/
├── index.html                    # 主入口文件
├── PosterPromptGenerator.jsx     # 核心React组件
├── package.json                  # 项目配置
├── README.md                     # 项目说明
├── 需求文档.md                   # 功能需求文档
└── 科研海报AI生成指令模板库.md   # AI指令模板库
```

## 🎯 使用指南

### 1. 选择设计风格
- **现代简约**：大胆排版，充足留白
- **学术经典**：传统布局，专业严谨
- **创意设计**：独特布局，吸引眼球
- **极简主义**：最少元素，清晰焦点
- **商务专业**：正式布局，权威感强

### 2. 选择学科领域
- **生物医学**：实验流程、统计图表、分子结构
- **物理科学**：方程式、实验装置、数据分析
- **工程技术**：系统框图、技术流程、性能对比
- **化学材料**：化学结构、反应机理、光谱数据
- **计算机科学**：算法流程、系统架构、性能测试
- **数学统计**：数学公式、统计图表、证明过程
- **环境科学**：生态图表、监测数据、地理信息
- **社会科学**：调查数据、统计分析、社会网络

### 3. 自定义配置
- **色彩方案**：6种预设配色，可视化预览
- **布局样式**：三栏、非对称、网格、流式布局
- **字体风格**：Sans-serif、Serif、现代、学术字体
- **图标风格**：极简、详细、科学符号、几何图形

### 4. 生成指令
- 点击卡片查看3D翻转效果
- 正面预览海报设计效果
- 背面显示完整AI生成指令
- 一键复制指令内容

## 🔧 自定义配置

### 添加新的设计风格
在 `PosterPromptGenerator.jsx` 中修改 `styles` 数组：

```javascript
const styles = [
  { id: 'new-style', name: '新风格名称', color: 'bg-custom-100' }
];
```

### 添加新的学科领域
在 `fields` 数组中添加：

```javascript
const fields = [
  { id: 'new-field', name: '新学科名称', icon: '🔬' }
];
```

## 🌟 特色亮点

1. **3D翻转效果**：卡片正面显示海报预览，背面显示生成指令
2. **实时生成**：根据选择的配置自动生成对应的Prompt
3. **一键复制**：复制后有确认反馈
4. **响应式设计**：适配不同屏幕尺寸
5. **视觉层次**：清晰的信息架构和交互引导

## 📱 浏览器兼容性

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系我们

- 项目地址：[GitHub Repository]
- 问题反馈：[Issues]
- 功能建议：[Discussions]

---

**Pico-Banana** - 让科研海报设计更简单！ 🎨✨
