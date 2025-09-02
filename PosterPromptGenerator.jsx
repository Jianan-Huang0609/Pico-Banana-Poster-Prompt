import React, { useState, useMemo } from 'react';
import { Copy, Palette, Layout, Type, Grid, Check, RotateCcw, Sparkles } from 'lucide-react';

const PosterPromptGenerator = () => {
  const [selectedStyle, setSelectedStyle] = useState('modern');
  const [selectedField, setSelectedField] = useState('biomedical');
  const [selectedColors, setSelectedColors] = useState(['blue', 'white']);
  const [selectedLayout, setSelectedLayout] = useState('three-column');
  const [selectedTypography, setSelectedTypography] = useState('sans-serif');
  const [selectedIcons, setSelectedIcons] = useState('minimal');
  const [flippedCards, setFlippedCards] = useState(new Set());
  const [copiedPrompt, setCopiedPrompt] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [contentInput, setContentInput] = useState('');
  const [extractedInfo, setExtractedInfo] = useState(null);
  const [chartTypes, setChartTypes] = useState([]);
  const [generatedVersions, setGeneratedVersions] = useState([]);

  // 配置选项
  const styles = [
    { id: 'modern', name: '现代简约', color: 'bg-slate-100' },
    { id: 'academic', name: '学术经典', color: 'bg-blue-100' },
    { id: 'creative', name: '创意设计', color: 'bg-purple-100' },
    { id: 'minimal', name: '极简主义', color: 'bg-gray-100' },
    { id: 'professional', name: '商务专业', color: 'bg-green-100' }
  ];

  const fields = [
    { id: 'biomedical', name: '生物医学', icon: '🧬' },
    { id: 'physics', name: '物理科学', icon: '⚛️' },
    { id: 'engineering', name: '工程技术', icon: '⚙️' },
    { id: 'chemistry', name: '化学材料', icon: '🧪' },
    { id: 'computer', name: '计算机', icon: '💻' },
    { id: 'mathematics', name: '数学统计', icon: '📊' },
    { id: 'environment', name: '环境科学', icon: '🌱' },
    { id: 'social', name: '社会科学', icon: '👥' }
  ];

  const colorSchemes = [
    { id: 'blue-white', colors: ['blue', 'white'], preview: 'from-blue-600 to-white' },
    { id: 'navy-gold', colors: ['navy', 'gold'], preview: 'from-blue-900 to-yellow-400' },
    { id: 'green-cream', colors: ['green', 'cream'], preview: 'from-green-600 to-amber-50' },
    { id: 'purple-gray', colors: ['purple', 'gray'], preview: 'from-purple-600 to-gray-300' },
    { id: 'red-black', colors: ['red', 'black'], preview: 'from-red-600 to-gray-900' },
    { id: 'teal-white', colors: ['teal', 'white'], preview: 'from-teal-600 to-white' }
  ];

  const layouts = [
    { id: 'three-column', name: '三栏布局', icon: '|||' },
    { id: 'asymmetric', name: '非对称', icon: '|:|' },
    { id: 'grid', name: '网格布局', icon: '⚏' },
    { id: 'flow', name: '流式布局', icon: '≈' }
  ];

  const typography = [
    { id: 'sans-serif', name: 'Sans-serif', example: 'Arial, Helvetica' },
    { id: 'serif', name: 'Serif', example: 'Times, Georgia' },
    { id: 'modern', name: 'Modern', example: 'Roboto, Open Sans' },
    { id: 'academic', name: 'Academic', example: 'Computer Modern' }
  ];

  const iconStyles = [
    { id: 'minimal', name: '极简图标' },
    { id: 'detailed', name: '详细图标' },
    { id: 'scientific', name: '科学符号' },
    { id: 'geometric', name: '几何图形' }
  ];

  // 增强的Prompt生成，包含内容匹配
  const generatePrompt = useMemo(() => {
    const styleMap = {
      modern: '现代简约设计，大胆排版，充足留白',
      academic: '传统学术风格，经典布局，专业严谨',
      creative: '创意视觉设计，独特布局，吸引眼球',
      minimal: '极简主义，最少元素，清晰焦点',
      professional: '商务专业，正式布局，权威感强'
    };

    const fieldMap = {
      biomedical: '生物医学研究海报，包含实验流程图、统计图表、分子结构图',
      physics: '物理科学海报，包含方程式、实验装置图、数据分析图表',
      engineering: '工程技术海报，包含系统框图、技术流程、性能对比图',
      chemistry: '化学研究海报，包含化学结构式、反应机理图、光谱数据',
      computer: '计算机科学海报，包含算法流程图、系统架构图、性能测试图',
      mathematics: '数学统计海报，包含数学公式、统计图表、证明过程',
      environment: '环境科学海报，包含生态图表、监测数据、地理信息图',
      social: '社会科学海报，包含调查数据、统计分析、社会网络图'
    };

    const layoutMap = {
      'three-column': '三栏式布局：左侧介绍，中间结果，右侧讨论',
      'asymmetric': '非对称布局：主要内容占据2/3，次要信息1/3',
      'grid': '网格布局：均匀分布的模块化内容区域',
      'flow': '流式布局：内容自然流动，重点突出'
    };

    const colorText = selectedColors.join('和');
    const layoutText = layoutMap[selectedLayout];
    const styleText = styleMap[selectedStyle];
    const fieldText = fieldMap[selectedField];
    const typographyText = typography.find(t => t.id === selectedTypography)?.example || 'Arial';

    // 如果有内容分析结果，加入具体内容指导
    let contentGuidance = '';
    if (extractedInfo) {
      contentGuidance = `

具体内容要求：
- 标题："${extractedInfo.title}"
- 核心发现：${extractedInfo.keyFindings.join('、')}
- 研究方法：${extractedInfo.methods.join('、')}
- 建议图表：${chartTypes.map(c => c.label).join('、')}
- 确保所有文字内容与视觉元素精准对应，避免生成无关的装饰性内容`;
    }

    return `创建一个${styleText}的科研海报：

学科领域：${fieldText}

设计规格：
- 尺寸：36英寸 x 48英寸 横向
- 布局：${layoutText}
- 色彩方案：主色调${colorText}，和谐配色
- 字体：${typographyText}系列，层次清晰
- 图标风格：${iconStyles.find(i => i.id === selectedIcons)?.name}

内容结构：
- 标题区（15%）：大号标题，作者信息，机构logo
- 主体区（70%）：核心内容，数据可视化，方法展示
- 底部区（15%）：参考文献，致谢，联系方式

视觉要素：
- 高质量图表和图像占位区域
- 清晰的信息层次和视觉引导
- 专业的学术排版标准
- 适合会议展示的远距离可读性
- 包含QR码用于数字化访问${contentGuidance}

输出要求：300 DPI高分辨率，适合打印的CMYK色彩模式，所有文字必须清晰可读，图表数据必须与研究内容匹配。`;
  }, [selectedStyle, selectedField, selectedColors, selectedLayout, selectedTypography, selectedIcons, extractedInfo, chartTypes]);

  // 卡片翻转
  const toggleCard = (cardId) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  // 内容分析功能
  const analyzeContent = (content) => {
    // 模拟内容分析
    const mockAnalysis = {
      title: "深度学习在医学影像诊断中的应用研究",
      authors: ["张三", "李四", "王五"],
      keyFindings: [
        "准确率提升至95.2%",
        "处理时间减少60%",
        "减少误诊率至2.1%"
      ],
      methods: ["卷积神经网络", "数据增强", "迁移学习"],
      dataTypes: ["医学影像", "统计数据", "对比实验"],
      suggestedCharts: [
        { type: "accuracy_chart", label: "准确率对比图" },
        { type: "process_flow", label: "算法流程图" },
        { type: "performance_metrics", label: "性能指标雷达图" }
      ]
    };
    setExtractedInfo(mockAnalysis);
    setChartTypes(mockAnalysis.suggestedCharts);
  };

  // 复制功能
  const copyPrompt = async (prompt, cardId) => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopiedPrompt(cardId);
      setTimeout(() => setCopiedPrompt(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // 步骤切换
  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  // 预设模板
  const templates = [
    {
      id: 1,
      name: '现代生医海报',
      preview: 'bg-gradient-to-br from-blue-50 to-white',
      settings: { style: 'modern', field: 'biomedical', colors: ['blue', 'white'], layout: 'three-column' }
    },
    {
      id: 2,
      name: '学术物理海报',
      preview: 'bg-gradient-to-br from-blue-900 to-yellow-100',
      settings: { style: 'academic', field: 'physics', colors: ['navy', 'gold'], layout: 'asymmetric' }
    },
    {
      id: 3,
      name: '创意工程海报',
      preview: 'bg-gradient-to-br from-green-500 to-amber-50',
      settings: { style: 'creative', field: 'engineering', colors: ['green', 'cream'], layout: 'grid' }
    },
    {
      id: 4,
      name: '极简数学海报',
      preview: 'bg-gradient-to-br from-gray-600 to-gray-100',
      settings: { style: 'minimal', field: 'mathematics', colors: ['gray', 'white'], layout: 'flow' }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* 头部标题 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-3">
            <Sparkles className="text-blue-600" />
            科研海报 Prompt 生成器
          </h1>
          <p className="text-gray-600">定制化生成AI绘图指令，创建专业学术海报</p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* 左侧边栏：风格选择 */}
          <div className="col-span-2 bg-white rounded-lg shadow-sm p-4">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Palette className="w-4 h-4" />
              设计风格
            </h3>
            <div className="space-y-2">
              {styles.map(style => (
                <button
                  key={style.id}
                  onClick={() => setSelectedStyle(style.id)}
                  className={`w-full p-2 rounded-md text-sm text-left transition-colors ${
                    selectedStyle === style.id
                      ? 'bg-blue-100 text-blue-900 border-2 border-blue-300'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className={`w-3 h-3 rounded-full ${style.color} inline-block mr-2`} />
                  {style.name}
                </button>
              ))}
            </div>
          </div>

          {/* 右侧边栏：学科选择 */}
          <div className="col-span-2 bg-white rounded-lg shadow-sm p-4">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Grid className="w-4 h-4" />
              学科领域
            </h3>
            <div className="space-y-2">
              {fields.map(field => (
                <button
                  key={field.id}
                  onClick={() => setSelectedField(field.id)}
                  className={`w-full p-2 rounded-md text-sm text-left transition-colors ${
                    selectedField === field.id
                      ? 'bg-green-100 text-green-900 border-2 border-green-300'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="mr-2">{field.icon}</span>
                  {field.name}
                </button>
              ))}
            </div>
          </div>

          {/* 主内容区 */}
          <div className="col-span-8 space-y-6">
            {/* 配置选项 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {/* 色彩方案 */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">色彩方案</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {colorSchemes.map(scheme => (
                      <button
                        key={scheme.id}
                        onClick={() => setSelectedColors(scheme.colors)}
                        className={`h-8 rounded-md bg-gradient-to-r ${scheme.preview} border-2 transition-all ${
                          JSON.stringify(selectedColors) === JSON.stringify(scheme.colors)
                            ? 'border-blue-400 scale-105'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* 布局选择 */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">布局样式</h4>
                  <div className="space-y-2">
                    {layouts.map(layout => (
                      <button
                        key={layout.id}
                        onClick={() => setSelectedLayout(layout.id)}
                        className={`w-full p-2 rounded-md text-xs transition-colors ${
                          selectedLayout === layout.id
                            ? 'bg-blue-100 text-blue-900'
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                      >
                        <span className="font-mono mr-2">{layout.icon}</span>
                        {layout.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 字体选择 */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">字体风格</h4>
                  <div className="space-y-2">
                    {typography.map(typo => (
                      <button
                        key={typo.id}
                        onClick={() => setSelectedTypography(typo.id)}
                        className={`w-full p-2 rounded-md text-xs transition-colors text-left ${
                          selectedTypography === typo.id
                            ? 'bg-blue-100 text-blue-900'
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                      >
                        <div className="font-medium">{typo.name}</div>
                        <div className="text-gray-500 truncate">{typo.example}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 图标风格 */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">图标风格</h4>
                  <div className="space-y-2">
                    {iconStyles.map(icon => (
                      <button
                        key={icon.id}
                        onClick={() => setSelectedIcons(icon.id)}
                        className={`w-full p-2 rounded-md text-xs transition-colors ${
                          selectedIcons === icon.id
                            ? 'bg-blue-100 text-blue-900'
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                      >
                        {icon.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 模板卡片 */}
            <div className="grid grid-cols-2 gap-4">
              {templates.map(template => (
                <div
                  key={template.id}
                  className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
                  style={{ perspective: '1000px' }}
                  onClick={() => toggleCard(template.id)}
                >
                  <div
                    className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                      flippedCards.has(template.id) ? 'rotate-y-180' : ''
                    }`}
                  >
                    {/* 正面：海报预览 */}
                    <div className={`absolute inset-0 w-full h-full backface-hidden rounded-lg ${template.preview} border border-gray-200 p-4`}>
                      <div className="h-full flex flex-col">
                        <div className="bg-white/80 p-2 rounded mb-2">
                          <h4 className="font-bold text-sm">研究标题</h4>
                          <p className="text-xs text-gray-600">作者姓名 • 机构</p>
                        </div>
                        
                        <div className="flex-1 grid grid-cols-3 gap-2">
                          <div className="bg-white/70 rounded p-2">
                            <div className="text-xs font-medium mb-1">背景</div>
                            <div className="h-12 bg-gray-200 rounded"></div>
                          </div>
                          <div className="bg-white/70 rounded p-2">
                            <div className="text-xs font-medium mb-1">结果</div>
                            <div className="h-12 bg-blue-200 rounded"></div>
                          </div>
                          <div className="bg-white/70 rounded p-2">
                            <div className="text-xs font-medium mb-1">结论</div>
                            <div className="h-12 bg-green-200 rounded"></div>
                          </div>
                        </div>
                        
                        <div className="bg-white/80 p-2 rounded mt-2">
                          <p className="text-xs text-gray-600">{template.name}</p>
                        </div>
                      </div>
                      
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <RotateCcw className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>

                    {/* 背面：Prompt指令 */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gray-900 text-white rounded-lg p-4">
                      <div className="h-full flex flex-col">
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="font-semibold text-green-400">Prompt 指令</h4>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              copyPrompt(generatePrompt, template.id);
                            }}
                            className={`flex items-center gap-1 px-2 py-1 rounded text-xs transition-colors ${
                              copiedPrompt === template.id
                                ? 'bg-green-600 text-white'
                                : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                            }`}
                          >
                            {copiedPrompt === template.id ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                            {copiedPrompt === template.id ? '已复制' : '复制'}
                          </button>
                        </div>
                        
                        <div className="flex-1 overflow-y-auto">
                          <pre className="text-xs leading-relaxed whitespace-pre-wrap font-mono">
                            {generatePrompt}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterPromptGenerator;