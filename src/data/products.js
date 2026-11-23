// Built-in product catalog. Shared by App.jsx and scripts/build-seo.mjs (static product pages),
// so it must stay free of React/browser imports. `t` supplies translated category labels.
// `slug` is the public URL (/products/<slug>): never rename an existing slug, shared links depend on it.
export function getProducts(language, t) {
  return [
    {
      id: 1,
      slug: 'aurora-premium-sound-system',
      name: language === 'zh' ? 'Aurora 高级音响系统' : 'Aurora Premium Sound System',
      brand: 'Aurora',
      category: t.completeSystem,
      price: 2499,
      stock: 15,
      image: '🔊',
      rating: 4.8,
      features: language === 'zh' 
        ? ['高级音频', '12声道', '蓝牙5.0', 'DSP处理器'] 
        : ['Premium Audio', '12-Channel', 'Bluetooth 5.0', 'DSP Processor'],
      description: language === 'zh'
        ? '采用最新技术的高端汽车音响系统，提供无与伦比的音质体验。12声道输出，支持蓝牙5.0无线连接。'
        : 'High-end car audio system with cutting-edge technology, delivering unparalleled sound quality. 12-channel output with Bluetooth 5.0 wireless connectivity.'
    },
    {
      id: 2,
      slug: 'clif-designs-subwoofer-pro',
      name: language === 'zh' ? 'Clif Designs 专业低音炮' : 'Clif Designs Subwoofer Pro',
      brand: 'Clif Designs',
      category: t.subwoofer,
      price: 899,
      stock: 8,
      image: '🎵',
      rating: 4.9,
      features: language === 'zh'
        ? ['深沉低音', '1200W功率', '紧凑设计', '防震结构']
        : ['Deep Bass', '1200W Power', 'Compact Design', 'Shock-proof'],
      description: language === 'zh'
        ? '专业级低音炮，1200W强劲功率，紧凑设计适合各种车型。防震结构确保稳定性能。'
        : 'Professional-grade subwoofer with 1200W powerful output. Compact design fits various vehicle models.'
    },
    {
      id: 3,
      slug: 'aurora-smart-amplifier',
      name: language === 'zh' ? 'Aurora 智能功放' : 'Aurora Smart Amplifier',
      brand: 'Aurora',
      category: t.amplifier,
      price: 1299,
      stock: 22,
      image: '⚡',
      rating: 4.7,
      features: language === 'zh'
        ? ['AI调音', '800W功率', 'DSP处理器', '智能散热']
        : ['AI Tuning', '800W Power', 'DSP Processor', 'Smart Cooling'],
      description: language === 'zh'
        ? 'AI智能调音功放，自动优化音质。800W输出功率，内置DSP处理器。'
        : 'AI-powered amplifier with automatic sound optimization. 800W output power, built-in DSP processor.'
    },
    {
      id: 4,
      slug: 'clif-designs-speaker-set',
      name: language === 'zh' ? 'Clif Designs 扬声器套装' : 'Clif Designs Speaker Set',
      brand: 'Clif Designs',
      category: t.speakers,
      price: 599,
      stock: 3,
      image: '🎶',
      rating: 4.6,
      features: language === 'zh'
        ? ['水晶音质', '6.5英寸', '防水设计', '高灵敏度']
        : ['Crystal Clear', '6.5 inch', 'Weather Resistant', 'High Sensitivity'],
      description: language === 'zh'
        ? '6.5英寸高品质扬声器套装，水晶般清澈音质。防水设计，高灵敏度。'
        : '6.5-inch premium speaker set with crystal-clear sound quality. Weather-resistant design.'
    },
    {
      id: 5,
      slug: 'aurora-flagship-audio-system',
      name: language === 'zh' ? 'Aurora 旗舰音响系统' : 'Aurora Flagship Audio System',
      brand: 'Aurora',
      category: t.completeSystem,
      price: 3999,
      stock: 12,
      image: '🎼',
      rating: 4.9,
      features: language === 'zh'
        ? ['16声道', '无损音质', '主动降噪', '触控面板']
        : ['16-Channel', 'Lossless Audio', 'Active Noise Cancellation', 'Touch Panel'],
      description: language === 'zh'
        ? '旗舰级音响系统，16声道环绕声，无损音质输出。主动降噪技术。'
        : 'Flagship audio system with 16-channel surround sound and lossless audio output.'
    },
    {
      id: 6,
      slug: 'clif-designs-dual-subwoofer',
      name: language === 'zh' ? 'Clif Designs 双低音炮' : 'Clif Designs Dual Subwoofer',
      brand: 'Clif Designs',
      category: t.subwoofer,
      price: 1599,
      stock: 0,
      image: '🔉',
      rating: 4.8,
      features: language === 'zh'
        ? ['双驱动单元', '2000W功率', '低频增强', '智能控制']
        : ['Dual Driver', '2000W Power', 'Bass Boost', 'Smart Control'],
      description: language === 'zh'
        ? '双驱动单元低音炮，2000W超强功率。低频增强技术，震撼音效。'
        : 'Dual-driver subwoofer with 2000W ultra-powerful output. Bass boost technology.'
    },
    // EXCEDIO products: images and copy from the supplier's Google Drive (posters, website
    // description PDFs and EXCEDIO_Product_Lineup_Website.xlsx). Display order follows the
    // supplier's instruction: APEX → ELITE → VISION → CORE → WIDE, then camera kits.
    // Price, stock, box contents and warranty are not provided yet, so the detail page shows "资料待补充".
    {
      id: 12,
      slug: 'excedio-apex-7870',
      name: language === 'zh' ? 'EXCEDIO APEX 系列 7870 旗舰安卓车机' : 'EXCEDIO APEX Series 7870 Flagship Android Car Player',
      brand: 'EXCEDIO',
      category: language === 'zh' ? '安卓车机' : 'Android Player',
      price: null,
      stock: null,
      image: '📺',
      model: 'APEX 7870',
      images: [
        '/products/excedio/excedio-apex-7870-9-10.webp',
        '/products/excedio/excedio-apex-7870-12-3.webp',
        '/products/excedio/excedio-apex-7870-13.webp'
      ],
      features: language === 'zh'
        ? ['Android 13', '八核处理器', '2K 屏幕', '支持 6 路 360° 摄像头', '无线 Apple CarPlay', '内置 DSP', '分屏', 'Type-C 视频输出']
        : ['Android 13', 'Octa-Core Processor', '2K Display', '6-Way 360° Camera Support', 'Wireless Apple CarPlay', 'Built-in DSP', 'Split Screen', 'Type-C Video Output'],
      description: language === 'zh'
        ? 'EXCEDIO 旗舰系列安卓车机。Android 13 + 八核处理器，2K 高清屏，支持 6 路 360° 全景摄像头、无线 Apple CarPlay、内置 DSP 音效与分屏。提供 9 / 10 寸、12.3 寸（BMW / Audi / Mercedes-Benz 款）及 13 寸无按键全触控版本。'
        : 'EXCEDIO flagship Android multimedia player. Android 13 with an octa-core processor, 2K display, 6-way 360° camera support, wireless Apple CarPlay, built-in DSP and split screen. Available in 9" / 10", 12.3" (BMW / Audi / Mercedes-Benz designs) and a button-free 13" full-touch version.',
      specs: language === 'zh'
        ? [
            { label: '定位', value: '旗舰系列' },
            { label: '系统', value: 'Android 13' },
            { label: '处理器', value: '八核' },
            { label: '分辨率', value: '2K' },
            { label: '360° 摄像头', value: '支持 6 路 360°' },
            { label: '9 / 10 寸', value: '4GB+64GB / 6GB+128GB / 8GB+256GB' },
            { label: '12.3 寸', value: '8GB+256GB（BMW / Audi / Mercedes-Benz 款）' },
            { label: '13 寸', value: '4GB+64GB / 8GB+256GB（正面无按键，约 30 × 20 cm）' }
          ]
        : [
            { label: 'Positioning', value: 'Flagship Series' },
            { label: 'Android', value: 'Android 13' },
            { label: 'CPU', value: 'Octa-Core' },
            { label: 'Resolution', value: '2K' },
            { label: '360° Camera', value: '6-Way 360° support' },
            { label: '9" / 10"', value: '4GB+64GB / 6GB+128GB / 8GB+256GB' },
            { label: '12.3"', value: '8GB+256GB (BMW / Audi / Mercedes-Benz designs)' },
            { label: '13"', value: '4GB+64GB / 8GB+256GB (button-free front, approx. 30 × 20 cm)' }
          ]
    },
    {
      id: 13,
      slug: 'excedio-elite-7865',
      name: language === 'zh' ? 'EXCEDIO ELITE 系列 7865 高性能安卓车机' : 'EXCEDIO ELITE Series 7865 High-Performance Android Car Player',
      brand: 'EXCEDIO',
      category: language === 'zh' ? '安卓车机' : 'Android Player',
      price: null,
      stock: null,
      image: '📺',
      model: 'ELITE 7865',
      images: [
        '/products/excedio/excedio-elite-7865-9-10.webp',
        '/products/excedio/excedio-elite-7865-12-3.webp'
      ],
      features: language === 'zh'
        ? ['Android 14', '八核处理器', '1K / 2K 屏幕可选', '支持标准 360° 摄像头', '内置 DSP', '分屏', '多款车系 UI 主题', '无线 Apple CarPlay']
        : ['Android 14', 'Octa-Core Processor', '1K / 2K Display Options', 'Standard 360° Camera Support', 'Built-in DSP', 'Split Screen', 'Multiple Car-Style UI Themes', 'Wireless Apple CarPlay'],
      description: language === 'zh'
        ? 'EXCEDIO 高端系列安卓车机。Android 14 + 八核处理器，1K / 2K 屏幕可选，支持标准 360° 摄像头（非 6 路）、内置 DSP、分屏与多款车系 UI 主题。提供 9 / 10 寸及 12.3 寸（BMW / Audi / Mercedes-Benz 款）。'
        : 'EXCEDIO premium Android multimedia player. Android 14 with an octa-core processor, 1K / 2K display options, standard 360° camera support (not 6-way), built-in DSP, split screen and multiple car-style UI themes. Available in 9" / 10" and 12.3" (BMW / Audi / Mercedes-Benz designs).',
      specs: language === 'zh'
        ? [
            { label: '定位', value: '高端系列' },
            { label: '系统', value: 'Android 14' },
            { label: '处理器', value: '八核' },
            { label: '分辨率', value: '1K / 2K（视型号）' },
            { label: '360° 摄像头', value: '支持标准 360°（非 6 路）' },
            { label: '9 / 10 寸', value: '4GB+64GB / 6GB+128GB / 8GB+128GB' },
            { label: '12.3 寸', value: '4GB+64GB / 8GB+128GB（BMW / Audi / Mercedes-Benz 款）' }
          ]
        : [
            { label: 'Positioning', value: 'Premium Series' },
            { label: 'Android', value: 'Android 14' },
            { label: 'CPU', value: 'Octa-Core' },
            { label: 'Resolution', value: '1K / 2K (by variant)' },
            { label: '360° Camera', value: 'Standard 360° support (not 6-way)' },
            { label: '9" / 10"', value: '4GB+64GB / 6GB+128GB / 8GB+128GB' },
            { label: '12.3"', value: '4GB+64GB / 8GB+128GB (BMW / Audi / Mercedes-Benz designs)' }
          ]
    },
    {
      id: 8,
      slug: 'excedio-vision-t9',
      name: language === 'zh' ? 'EXCEDIO VISION 系列 T9 安卓车载多媒体主机' : 'EXCEDIO VISION Series T9 Android Car Multimedia Player',
      brand: 'EXCEDIO',
      category: language === 'zh' ? '安卓车机' : 'Android Player',
      price: null,
      stock: null,
      image: '📺',
      model: 'T9',
      images: ['/products/excedio/excedio-t9-vision-series.webp'],
      features: language === 'zh'
        ? ['9 / 10 寸', '4GB RAM + 64GB 储存', '内置 4G', '支持 360° 摄像头']
        : ['9" / 10"', '4GB RAM + 64GB Storage', 'Built-in 4G', '360° Camera Support'],
      description: language === 'zh'
        ? '高性价比 9 / 10 寸安卓车机，4GB RAM + 64GB 储存，支持 360° 摄像头。内置 4G，插入 SIM 卡即可在线导航、听歌，不必依赖手机热点。'
        : 'Affordable 9" / 10" Android player with 4GB RAM + 64GB storage and 360° camera support. Built-in 4G lets you navigate and stream online with a SIM card, without relying on a phone hotspot.',
      specs: language === 'zh'
        ? [
            { label: '定位', value: '智能 360 系列' },
            { label: '屏幕', value: '9 / 10 寸，1K' },
            { label: '内存 + 储存', value: '4GB + 64GB' },
            { label: '处理器', value: '八核' },
            { label: '360° 摄像头', value: '支持（需搭配兼容摄像头）' },
            { label: '网络', value: '内置 4G（需 SIM 卡与数据配套）' }
          ]
        : [
            { label: 'Positioning', value: 'Smart 360 Series' },
            { label: 'Screen', value: '9" / 10", 1K' },
            { label: 'RAM + Storage', value: '4GB + 64GB' },
            { label: 'CPU', value: 'Octa-Core' },
            { label: '360° Camera', value: 'Supported (compatible cameras required)' },
            { label: 'Connectivity', value: 'Built-in 4G (SIM and data plan required)' }
          ]
    },
    {
      id: 9,
      slug: 'excedio-core-t100',
      name: language === 'zh' ? 'EXCEDIO CORE 系列 T100 安卓车载多媒体主机' : 'EXCEDIO CORE Series T100 Android Car Multimedia Player',
      brand: 'EXCEDIO',
      category: language === 'zh' ? '安卓车机' : 'Android Player',
      price: null,
      stock: null,
      image: '📺',
      model: 'T100',
      images: ['/products/excedio/excedio-t100-core-series.webp'],
      features: language === 'zh'
        ? ['9 / 10 寸', '2GB RAM + 64GB 储存', '安卓多媒体', '高性价比']
        : ['9" / 10"', '2GB RAM + 64GB Storage', 'Android Multimedia', 'Budget-Friendly'],
      description: language === 'zh'
        ? '入门级 9 / 10 寸安卓车机，2GB RAM + 64GB 储存，满足日常导航、音乐、视频需求，以实惠价格升级原车娱乐系统。'
        : 'Entry-level 9" / 10" Android player with 2GB RAM + 64GB storage for everyday navigation, music and video — an affordable upgrade to your car\'s entertainment system.',
      specs: language === 'zh'
        ? [
            { label: '定位', value: '入门系列' },
            { label: '屏幕', value: '9 / 10 寸，1K' },
            { label: '内存 + 储存', value: '2GB + 64GB' }
          ]
        : [
            { label: 'Positioning', value: 'Entry Series' },
            { label: 'Screen', value: '9" / 10", 1K' },
            { label: 'RAM + Storage', value: '2GB + 64GB' }
          ]
    },
    {
      id: 7,
      slug: 'excedio-wide-t133',
      name: language === 'zh' ? 'EXCEDIO WIDE T133 安卓车载多媒体主机' : 'EXCEDIO WIDE T133 Android Car Multimedia Player',
      brand: 'EXCEDIO',
      category: language === 'zh' ? '安卓车机' : 'Android Player',
      price: null,
      stock: null,
      image: '📺',
      model: 'T133',
      images: ['/products/excedio/excedio-t133.webp'],
      features: language === 'zh'
        ? ['9 / 10 / 12.3 寸', '4GB RAM + 64GB 储存', '分屏显示', 'DSP 音效', 'CarPlay / Android Auto']
        : ['9" / 10" / 12.3"', '4GB RAM + 64GB Storage', 'Split Screen', 'DSP Audio', 'CarPlay / Android Auto'],
      description: language === 'zh'
        ? '大屏高性价比安卓车机，4GB RAM + 64GB 储存，提供 9 / 10 寸及 12.3 寸宽屏（BMW / Audi / Mercedes-Benz 款）。注意：不支持 360° 摄像头。'
        : 'Large-screen value Android player with 4GB RAM + 64GB storage, available in 9" / 10" and 12.3" widescreen (BMW / Audi / Mercedes-Benz designs). Note: 360° camera is not supported.',
      specs: language === 'zh'
        ? [
            { label: '定位', value: '大屏高性价比系列' },
            { label: '屏幕', value: '9 / 10 寸、12.3 寸（BMW / Audi / Mercedes-Benz 款），1K' },
            { label: '内存 + 储存', value: '4GB + 64GB' },
            { label: '360° 摄像头', value: '不支持' }
          ]
        : [
            { label: 'Positioning', value: 'Large-Screen Value Series' },
            { label: 'Screen', value: '9" / 10", 12.3" (BMW / Audi / Mercedes-Benz designs), 1K' },
            { label: 'RAM + Storage', value: '4GB + 64GB' },
            { label: '360° Camera', value: 'Not supported' }
          ]
    },
    {
      id: 10,
      slug: 'excedio-3d-360-camera-system',
      name: language === 'zh' ? 'EXCEDIO 3D 360° 全景摄像系统' : 'EXCEDIO 3D 360° Camera System',
      brand: 'EXCEDIO',
      category: language === 'zh' ? '摄像系统' : 'Camera System',
      price: null,
      stock: null,
      image: '📷',
      model: '360°',
      images: ['/products/excedio/excedio-360-camera-system.webp'],
      features: language === 'zh'
        ? ['3D 360° 环视', '多画面显示', '前 / 后 / 左右视角', '泊车辅助']
        : ['3D 360° Surround View', 'Multi-View Display', 'Front / Rear / Side Views', 'Parking Assistance'],
      description: language === 'zh'
        ? '3D 360° 全景环视摄像系统，通过 EXCEDIO 安卓车机显示前、后、左右多角度画面，倒车与窄位泊车更安心。'
        : '3D 360° surround-view camera system showing front, rear and side views on a compatible EXCEDIO Android player for easier reversing and tight-space parking.',
      specs: language === 'zh'
        ? [
            { label: '摄像功能', value: '360° 环视' },
            { label: '显示模式', value: '3D 全景' },
            { label: '用途', value: '泊车、倒车、低速行驶' },
            { label: '兼容', value: '指定 EXCEDIO 安卓车机（APEX / ELITE / VISION）' }
          ]
        : [
            { label: 'Camera Function', value: '360° Surround View' },
            { label: 'Display Mode', value: '3D Panoramic View' },
            { label: 'Application', value: 'Parking, reversing and low-speed manoeuvring' },
            { label: 'Compatibility', value: 'Selected EXCEDIO Android players (APEX / ELITE / VISION)' }
          ]
    },
    {
      id: 11,
      slug: 'excedio-6-way-360-camera-system',
      name: language === 'zh' ? 'EXCEDIO 6 路 360° 全景摄像系统' : 'EXCEDIO 6-Way 360° Panoramic Camera System',
      brand: 'EXCEDIO',
      category: language === 'zh' ? '摄像系统' : 'Camera System',
      price: null,
      stock: null,
      image: '📷',
      model: '6-Way 360°',
      images: ['/products/excedio/excedio-6-way-360-camera-system.webp'],
      features: language === 'zh'
        ? ['6 路环视', '盲区 / 变道监控', '泊车辅助', 'Full HD 1080P']
        : ['6-Way Surround View', 'Lane Watch Monitoring', 'Parking Assistance', 'Full HD 1080P'],
      description: language === 'zh'
        ? '6 路 360° 全景摄像系统：前、后、左右及两侧后视镜区域，额外侧面视角协助窄路与变道，1080P 全高清画质。'
        : '6-way 360° panoramic camera system covering front, rear, both sides and side-mirror areas, with extra side views for narrow roads and lane changes, in Full HD 1080P.',
      specs: language === 'zh'
        ? [
            { label: '摄像系统', value: '6 路 360° 全景' },
            { label: '附加功能', value: '侧面 / 变道辅助' },
            { label: '用途', value: '泊车、倒车、低速行驶' },
            { label: '兼容', value: '指定 EXCEDIO 安卓车机（6 路仅 APEX 7870 标明支持）' }
          ]
        : [
            { label: 'Camera System', value: '6-Way 360° Panoramic View' },
            { label: 'Additional Function', value: 'Side-view / lane assistance' },
            { label: 'Application', value: 'Parking, reversing and low-speed manoeuvring' },
            { label: 'Compatibility', value: 'Selected EXCEDIO Android players (6-way listed for APEX 7870)' }
          ]
    }
  ]
}
