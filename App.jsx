import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Home, 
  Store, 
  Package, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  Search,
  Menu,
  X,
  ChevronRight,
  TrendingUp,
  ShoppingCart,
  Star,
  Award,
  Zap,
  Globe,
  Send,
  CheckCircle2,
  AlertCircle,
  Settings,
  BarChart3,
  FileText,
  UserCircle,
  LogOut,
  Edit,
  Trash2,
  Plus,
  Eye,
  Download,
  Upload,
  Filter,
  Calendar,
  DollarSign,
  TrendingDown,
  Clock,
  CheckCircle,
  XCircle,
  Shield
} from 'lucide-react'
import './App.css'

// 多语言翻译
const translations = {
  en: {
    // 系统模式
    customerPortal: 'Customer Portal',
    dealerPortal: 'Dealer Portal',
    adminPortal: 'Admin Portal',
    switchMode: 'Switch Mode',
    
    // Header
    home: 'Home',
    products: 'Products',
    dealers: 'Dealers',
    dashboard: 'Dashboard',
    orders: 'Orders',
    customers: 'Customers',
    reports: 'Reports',
    settings: 'Settings',
    logout: 'Logout',
    login: 'Login',
    slogan: 'Driven by Innovation',
    
    // Home Page
    heroTitle: 'Premium Car Audio Solutions',
    heroDescription: 'Discover our ecosystem of Aurora and Clif Designs products. Connect with verified dealers nationwide for the ultimate audio experience.',
    exploreProducts: 'Explore Products',
    findDealer: 'Find a Dealer',
    totalProducts: 'Total Products',
    activeDealers: 'Active Dealers',
    newLeads: 'New Leads',
    monthlySales: 'Monthly Sales',
    featuredProducts: 'Featured Products',
    ourBrands: 'Our Brands',
    auroraDesc: 'Premium audio solutions with cutting-edge technology',
    clifDesc: 'Innovative designs for exceptional sound quality',
    
    // Products
    productCatalog: 'Product Catalog',
    productCatalogDesc: 'Browse our complete range of premium car audio products',
    searchProducts: 'Search products...',
    completeSystem: 'Complete System',
    subwoofer: 'Subwoofer',
    amplifier: 'Amplifier',
    speakers: 'Speakers',
    inquire: 'Inquire',
    details: 'Details',
    viewDetails: 'View Details',
    addToCart: 'Add to Cart',
    buyNow: 'Buy Now',
    
    // Dealers
    findDealerTitle: 'Find a Dealer',
    findDealerDesc: 'Connect with verified Eagerise dealers in your area',
    dealerLocator: 'Dealer Locator',
    enterLocation: 'Enter your city or postcode',
    searchDealers: 'Search Dealers',
    verified: 'Verified',
    contactDealer: 'Contact Dealer',
    viewMap: 'View Map',
    
    // Dealer Dashboard
    dealerDashboard: 'Dealer Dashboard',
    welcomeBack: 'Welcome back',
    myOrders: 'My Orders',
    myCustomers: 'My Customers',
    myInventory: 'My Inventory',
    myReports: 'My Reports',
    pendingOrders: 'Pending Orders',
    completedOrders: 'Completed Orders',
    totalRevenue: 'Total Revenue',
    customerLeads: 'Customer Leads',
    inventory: 'Inventory',
    analytics: 'Analytics',
    orderManagement: 'Order Management',
    manageOrders: 'Manage and track your customer orders',
    customerManagement: 'Customer Management',
    manageCustomers: 'View and manage your customer database',
    inventoryManagement: 'Inventory Management',
    trackStock: 'Track your stock levels and manage products',
    inStock: 'In Stock',
    lowStock: 'Low Stock',
    outOfStock: 'Out of Stock',
    
    // Admin Dashboard
    adminDashboard: 'Admin Dashboard',
    systemOverview: 'System Overview',
    dealerManagement: 'Dealer Management',
    productManagement: 'Product Management',
    systemSettings: 'System Settings',
    allDealers: 'All Dealers',
    allProducts: 'All Products',
    allOrders: 'All Orders',
    systemReports: 'System Reports',
    manageDealers: 'Manage all dealers in the system',
    manageProducts: 'Manage product catalog and inventory',
    viewReports: 'View comprehensive system reports',
    addDealer: 'Add Dealer',
    addProduct: 'Add Product',
    editDealer: 'Edit Dealer',
    editProduct: 'Edit Product',
    deleteDealer: 'Delete Dealer',
    deleteProduct: 'Delete Product',
    
    // Orders
    orderNumber: 'Order #',
    orderDate: 'Order Date',
    orderStatus: 'Status',
    orderTotal: 'Total',
    pending: 'Pending',
    processing: 'Processing',
    completed: 'Completed',
    cancelled: 'Cancelled',
    viewOrder: 'View Order',
    
    // Customers
    customerName: 'Customer Name',
    customerEmail: 'Email',
    customerPhone: 'Phone',
    totalOrders: 'Total Orders',
    lastOrder: 'Last Order',
    
    // Status
    new: 'New',
    contacted: 'Contacted',
    converted: 'Converted',
    active: 'Active',
    inactive: 'Inactive',
    
    // Actions
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    view: 'View',
    export: 'Export',
    import: 'Import',
    filter: 'Filter',
    close: 'Close',
    submit: 'Submit',
    
    // Forms
    productDetails: 'Product Details',
    specifications: 'Specifications',
    price: 'Price',
    rating: 'Rating',
    inquiryForm: 'Product Inquiry',
    yourName: 'Your Name',
    yourEmail: 'Your Email',
    yourPhone: 'Your Phone',
    message: 'Message',
    inquirySent: 'Inquiry sent successfully!',
    fillAllFields: 'Please fill in all fields',
    dealerContact: 'Contact Dealer',
    sendMessage: 'Send Message',
    messageSent: 'Message sent successfully!',
    
    // Footer
    support: 'Support',
    contact: 'Contact',
    warranty: 'Warranty',
    contactUs: 'Contact Us',
    accessories: 'Accessories',
    copyright: '© 2025 Eagerise Sdn. Bhd. | Powered by Innovation'
  },
  zh: {
    // 系统模式
    customerPortal: '客户端',
    dealerPortal: '经销商端',
    adminPortal: '管理员端',
    switchMode: '切换模式',
    
    // Header
    home: '首页',
    products: '产品',
    dealers: '经销商',
    dashboard: '仪表板',
    orders: '订单',
    customers: '客户',
    reports: '报表',
    settings: '设置',
    logout: '退出',
    login: '登录',
    slogan: '创新驱动',
    
    // Home Page
    heroTitle: '高端汽车音响解决方案',
    heroDescription: '探索我们的Aurora和Clif Designs产品生态系统。与全国认证经销商联系，获得极致音频体验。',
    exploreProducts: '浏览产品',
    findDealer: '查找经销商',
    totalProducts: '产品总数',
    activeDealers: '活跃经销商',
    newLeads: '新线索',
    monthlySales: '月度销售额',
    featuredProducts: '特色产品',
    ourBrands: '我们的品牌',
    auroraDesc: '采用尖端技术的高端音频解决方案',
    clifDesc: '创新设计，卓越音质',
    
    // Products
    productCatalog: '产品目录',
    productCatalogDesc: '浏览我们完整的高端汽车音响产品系列',
    searchProducts: '搜索产品...',
    completeSystem: '完整系统',
    subwoofer: '低音炮',
    amplifier: '功放',
    speakers: '扬声器',
    inquire: '询价',
    details: '详情',
    viewDetails: '查看详情',
    addToCart: '加入购物车',
    buyNow: '立即购买',
    
    // Dealers
    findDealerTitle: '查找经销商',
    findDealerDesc: '与您所在地区的Eagerise认证经销商联系',
    dealerLocator: '经销商定位',
    enterLocation: '输入您的城市或邮编',
    searchDealers: '搜索经销商',
    verified: '已认证',
    contactDealer: '联系经销商',
    viewMap: '查看地图',
    
    // Dealer Dashboard
    dealerDashboard: '经销商仪表板',
    welcomeBack: '欢迎回来',
    myOrders: '我的订单',
    myCustomers: '我的客户',
    myInventory: '我的库存',
    myReports: '我的报表',
    pendingOrders: '待处理订单',
    completedOrders: '已完成订单',
    totalRevenue: '总收入',
    customerLeads: '客户线索',
    inventory: '库存',
    analytics: '分析',
    orderManagement: '订单管理',
    manageOrders: '管理和追踪您的客户订单',
    customerManagement: '客户管理',
    manageCustomers: '查看和管理您的客户数据库',
    inventoryManagement: '库存管理',
    trackStock: '追踪您的库存水平并管理产品',
    inStock: '有货',
    lowStock: '库存不足',
    outOfStock: '缺货',
    
    // Admin Dashboard
    adminDashboard: '管理员仪表板',
    systemOverview: '系统概览',
    dealerManagement: '经销商管理',
    productManagement: '产品管理',
    systemSettings: '系统设置',
    allDealers: '所有经销商',
    allProducts: '所有产品',
    allOrders: '所有订单',
    systemReports: '系统报表',
    manageDealers: '管理系统中的所有经销商',
    manageProducts: '管理产品目录和库存',
    viewReports: '查看综合系统报表',
    addDealer: '添加经销商',
    addProduct: '添加产品',
    editDealer: '编辑经销商',
    editProduct: '编辑产品',
    deleteDealer: '删除经销商',
    deleteProduct: '删除产品',
    
    // Orders
    orderNumber: '订单号',
    orderDate: '订单日期',
    orderStatus: '状态',
    orderTotal: '总计',
    pending: '待处理',
    processing: '处理中',
    completed: '已完成',
    cancelled: '已取消',
    viewOrder: '查看订单',
    
    // Customers
    customerName: '客户姓名',
    customerEmail: '邮箱',
    customerPhone: '电话',
    totalOrders: '订单总数',
    lastOrder: '最后订单',
    
    // Status
    new: '新建',
    contacted: '已联系',
    converted: '已转化',
    active: '活跃',
    inactive: '不活跃',
    
    // Actions
    save: '保存',
    cancel: '取消',
    delete: '删除',
    edit: '编辑',
    view: '查看',
    export: '导出',
    import: '导入',
    filter: '筛选',
    close: '关闭',
    submit: '提交',
    
    // Forms
    productDetails: '产品详情',
    specifications: '规格参数',
    price: '价格',
    rating: '评分',
    inquiryForm: '产品咨询',
    yourName: '您的姓名',
    yourEmail: '您的邮箱',
    yourPhone: '您的电话',
    message: '留言',
    inquirySent: '咨询已成功发送！',
    fillAllFields: '请填写所有字段',
    dealerContact: '联系经销商',
    sendMessage: '发送消息',
    messageSent: '消息已成功发送！',
    
    // Footer
    support: '支持',
    contact: '联系',
    warranty: '保修',
    contactUs: '联系我们',
    accessories: '配件',
    copyright: '© 2025 Eagerise Sdn. Bhd. | 创新驱动'
  }
}

function App() {
  const [systemMode, setSystemMode] = useState('customer') // customer, dealer, admin
  const [activeTab, setActiveTab] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedDealer, setSelectedDealer] = useState(null)
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [language, setLanguage] = useState('zh')
  const [showInquiryForm, setShowInquiryForm] = useState(false)
  const [inquirySuccess, setInquirySuccess] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [dealerSearchQuery, setDealerSearchQuery] = useState('')

  const t = translations[language]

  // Sample data
  const products = [
    {
      id: 1,
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
    }
  ]

  const dealers = [
    { 
      id: 1, 
      name: language === 'zh' ? '音响大师 吉隆坡' : 'Sound Masters KL', 
      city: language === 'zh' ? '吉隆坡' : 'Kuala Lumpur', 
      phone: '+60 3-1234 5678',
      email: 'kl@soundmasters.com',
      address: language === 'zh' ? '吉隆坡武吉免登路123号' : '123 Bukit Bintang, Kuala Lumpur',
      verified: true,
      status: 'active',
      totalOrders: 156,
      monthlyRevenue: 125000
    },
    { 
      id: 2, 
      name: language === 'zh' ? '卓越音频 槟城' : 'Audio Excellence Penang', 
      city: language === 'zh' ? '槟城' : 'Penang', 
      phone: '+60 4-8765 4321',
      email: 'penang@audioexcellence.com',
      address: language === 'zh' ? '槟城乔治市光大大厦' : 'Komtar, Georgetown, Penang',
      verified: true,
      status: 'active',
      totalOrders: 98,
      monthlyRevenue: 87000
    },
    { 
      id: 3, 
      name: language === 'zh' ? '汽车音响专家 新山' : 'Car Audio Pro JB', 
      city: language === 'zh' ? '新山' : 'Johor Bahru', 
      phone: '+60 7-9876 5432',
      email: 'jb@caraudio.com',
      address: language === 'zh' ? '新山市中心广场' : 'City Square, Johor Bahru',
      verified: true,
      status: 'active',
      totalOrders: 134,
      monthlyRevenue: 102000
    },
    { 
      id: 4, 
      name: language === 'zh' ? '高级音响 怡保' : 'Premium Sound Ipoh', 
      city: language === 'zh' ? '怡保' : 'Ipoh', 
      phone: '+60 5-5555 6666',
      email: 'ipoh@premiumsound.com',
      address: language === 'zh' ? '怡保旧街场' : 'Old Town, Ipoh',
      verified: false,
      status: 'inactive',
      totalOrders: 45,
      monthlyRevenue: 32000
    }
  ]

  const orders = [
    {
      id: 'ORD-2025-001',
      customer: language === 'zh' ? '张伟' : 'Ahmad Ibrahim',
      product: products[0].name,
      quantity: 2,
      total: 4998,
      status: 'pending',
      date: '2025-10-10',
      dealer: dealers[0].name
    },
    {
      id: 'ORD-2025-002',
      customer: language === 'zh' ? '李娜' : 'Sarah Tan',
      product: products[1].name,
      quantity: 1,
      total: 899,
      status: 'processing',
      date: '2025-10-09',
      dealer: dealers[1].name
    },
    {
      id: 'ORD-2025-003',
      customer: language === 'zh' ? '王强' : 'Kumar Raj',
      product: products[4].name,
      quantity: 1,
      total: 3999,
      status: 'completed',
      date: '2025-10-08',
      dealer: dealers[0].name
    },
    {
      id: 'ORD-2025-004',
      customer: language === 'zh' ? '赵敏' : 'Lim Wei',
      product: products[2].name,
      quantity: 3,
      total: 3897,
      status: 'completed',
      date: '2025-10-07',
      dealer: dealers[2].name
    }
  ]

  const customers = [
    {
      id: 1,
      name: language === 'zh' ? '张伟' : 'Ahmad Ibrahim',
      email: 'ahmad@email.com',
      phone: '+60 12-345 6789',
      totalOrders: 5,
      lastOrder: '2025-10-10',
      totalSpent: 12500
    },
    {
      id: 2,
      name: language === 'zh' ? '李娜' : 'Sarah Tan',
      email: 'sarah@email.com',
      phone: '+60 12-876 5432',
      totalOrders: 3,
      lastOrder: '2025-10-09',
      totalSpent: 7800
    },
    {
      id: 3,
      name: language === 'zh' ? '王强' : 'Kumar Raj',
      email: 'kumar@email.com',
      phone: '+60 12-999 8888',
      totalOrders: 8,
      lastOrder: '2025-10-08',
      totalSpent: 19500
    }
  ]

  const stats = {
    customer: [
      { label: t.totalProducts, value: '24', icon: Package, color: 'text-green-600' },
      { label: t.activeDealers, value: '156', icon: Store, color: 'text-blue-600' },
      { label: t.newLeads, value: '48', icon: Users, color: 'text-orange-600' },
      { label: t.monthlySales, value: 'RM 2.4M', icon: TrendingUp, color: 'text-purple-600' }
    ],
    dealer: [
      { label: t.pendingOrders, value: '12', icon: Clock, color: 'text-orange-600' },
      { label: t.completedOrders, value: '156', icon: CheckCircle, color: 'text-green-600' },
      { label: t.totalRevenue, value: 'RM 125K', icon: DollarSign, color: 'text-blue-600' },
      { label: t.customerLeads, value: '48', icon: Users, color: 'text-purple-600' }
    ],
    admin: [
      { label: t.allDealers, value: '156', icon: Store, color: 'text-blue-600' },
      { label: t.allProducts, value: '24', icon: Package, color: 'text-green-600' },
      { label: t.allOrders, value: '1,234', icon: ShoppingCart, color: 'text-orange-600' },
      { label: t.monthlySales, value: 'RM 2.4M', icon: TrendingUp, color: 'text-purple-600' }
    ]
  }

  // 切换语言
  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh')
  }

  // 切换系统模式
  const switchMode = (mode) => {
    setSystemMode(mode)
    setActiveTab('home')
    setMobileMenuOpen(false)
  }

  // 获取导航菜单
  const getNavigation = () => {
    if (systemMode === 'customer') {
      return [
        { id: 'home', label: t.home, icon: Home },
        { id: 'products', label: t.products, icon: Package },
        { id: 'dealers', label: t.dealers, icon: Store }
      ]
    } else if (systemMode === 'dealer') {
      return [
        { id: 'home', label: t.dashboard, icon: Home },
        { id: 'orders', label: t.orders, icon: ShoppingCart },
        { id: 'customers', label: t.customers, icon: Users },
        { id: 'inventory', label: t.inventory, icon: Package },
        { id: 'reports', label: t.reports, icon: BarChart3 }
      ]
    } else {
      return [
        { id: 'home', label: t.dashboard, icon: Home },
        { id: 'dealers', label: t.dealers, icon: Store },
        { id: 'products', label: t.products, icon: Package },
        { id: 'orders', label: t.orders, icon: ShoppingCart },
        { id: 'reports', label: t.reports, icon: BarChart3 },
        { id: 'settings', label: t.settings, icon: Settings }
      ]
    }
  }

  const navigation = getNavigation()

  // 处理产品详情
  const handleProductDetails = (product) => {
    setSelectedProduct(product)
  }

  // 处理询价
  const handleInquiry = (product) => {
    setSelectedProduct(product)
    setShowInquiryForm(true)
  }

  // 提交询价表单
  const handleInquirySubmit = (e) => {
    e.preventDefault()
    setInquirySuccess(true)
    setTimeout(() => {
      setShowInquiryForm(false)
      setInquirySuccess(false)
      setSelectedProduct(null)
    }, 2000)
  }

  // 联系经销商
  const handleContactDealer = (dealer) => {
    setSelectedDealer(dealer)
  }

  // 发送消息给经销商
  const handleSendMessage = (e) => {
    e.preventDefault()
    setInquirySuccess(true)
    setTimeout(() => {
      setSelectedDealer(null)
      setInquirySuccess(false)
    }, 2000)
  }

  // 过滤产品
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // 过滤经销商
  const filteredDealers = dealers.filter(dealer =>
    dealer.name.toLowerCase().includes(dealerSearchQuery.toLowerCase()) ||
    dealer.city.toLowerCase().includes(dealerSearchQuery.toLowerCase())
  )

  // 获取库存状态
  const getStockStatus = (stock) => {
    if (stock === 0) return { label: t.outOfStock, color: 'text-red-600 bg-red-100' }
    if (stock < 10) return { label: t.lowStock, color: 'text-orange-600 bg-orange-100' }
    return { label: t.inStock, color: 'text-green-600 bg-green-100' }
  }

  // 获取订单状态颜色
  const getOrderStatusColor = (status) => {
    const colors = {
      pending: 'bg-orange-100 text-orange-700',
      processing: 'bg-blue-100 text-blue-700',
      completed: 'bg-green-100 text-green-700',
      cancelled: 'bg-red-100 text-red-700'
    }
    return colors[status] || 'bg-gray-100 text-gray-700'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                  EAGERISE
                </h1>
                <p className="text-xs text-gray-500">{t.slogan}</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4">
              {navigation.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    activeTab === item.id ? 'bg-green-50 text-green-600' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-3">
              {/* Mode Switcher */}
              <div className="hidden md:flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => switchMode('customer')}
                  className={`px-3 py-1 rounded text-sm transition-all ${
                    systemMode === 'customer' ? 'bg-white shadow-sm' : 'text-gray-600'
                  }`}
                >
                  <Users className="w-4 h-4 inline mr-1" />
                  {language === 'zh' ? '客户' : 'Customer'}
                </button>
                <button
                  onClick={() => switchMode('dealer')}
                  className={`px-3 py-1 rounded text-sm transition-all ${
                    systemMode === 'dealer' ? 'bg-white shadow-sm' : 'text-gray-600'
                  }`}
                >
                  <Store className="w-4 h-4 inline mr-1" />
                  {language === 'zh' ? '经销商' : 'Dealer'}
                </button>
                <button
                  onClick={() => switchMode('admin')}
                  className={`px-3 py-1 rounded text-sm transition-all ${
                    systemMode === 'admin' ? 'bg-white shadow-sm' : 'text-gray-600'
                  }`}
                >
                  <Shield className="w-4 h-4 inline mr-1" />
                  {language === 'zh' ? '管理员' : 'Admin'}
                </button>
              </div>

              {/* Language Toggle */}
              <Button 
                variant="outline" 
                size="sm"
                onClick={toggleLanguage}
                className="hidden md:flex items-center space-x-2"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'zh' ? '中文' : 'EN'}</span>
              </Button>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-2">
              {navigation.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => { setActiveTab(item.id); setMobileMenuOpen(false); }}
                  className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center space-x-2"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              ))}
              <div className="border-t pt-2 mt-2">
                <button 
                  onClick={() => switchMode('customer')}
                  className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50"
                >
                  {t.customerPortal}
                </button>
                <button 
                  onClick={() => switchMode('dealer')}
                  className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50"
                >
                  {t.dealerPortal}
                </button>
                <button 
                  onClick={() => switchMode('admin')}
                  className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50"
                >
                  {t.adminPortal}
                </button>
              </div>
              <button 
                onClick={toggleLanguage}
                className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center space-x-2"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'zh' ? 'English' : '中文'}</span>
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Customer Portal */}
        {systemMode === 'customer' && (
          <>
            {/* Home Tab */}
            {activeTab === 'home' && (
              <div className="space-y-8">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8 md:p-12 text-white shadow-xl">
                  <div className="max-w-3xl">
                    <Badge className="mb-4 bg-white/20 text-white border-white/30">
                      Connected by Eagerise
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                      {t.heroTitle}
                    </h2>
                    <p className="text-lg md:text-xl mb-6 text-green-50">
                      {t.heroDescription}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button 
                        size="lg" 
                        className="bg-white text-green-600 hover:bg-green-50"
                        onClick={() => setActiveTab('products')}
                      >
                        {t.exploreProducts}
                        <ChevronRight className="ml-2 w-4 h-4" />
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="border-white text-white hover:bg-white/10"
                        onClick={() => setActiveTab('dealers')}
                      >
                        {t.findDealer}
                        <MapPin className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.customer.map((stat, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                            <p className="text-3xl font-bold">{stat.value}</p>
                          </div>
                          <stat.icon className={`w-12 h-12 ${stat.color}`} />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Featured Products */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">{t.featuredProducts}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.slice(0, 4).map((product) => (
                      <Card key={product.id} className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
                        <CardContent className="p-6">
                          <div className="text-6xl mb-4 text-center">{product.image}</div>
                          <Badge className="mb-2 bg-green-100 text-green-700 border-green-200">
                            {product.brand}
                          </Badge>
                          <h4 className="font-bold mb-2">{product.name}</h4>
                          <div className="flex items-center mb-3">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                            <span className="text-sm font-semibold">{product.rating}</span>
                          </div>
                          <p className="text-2xl font-bold text-green-600 mb-4">
                            RM {product.price.toLocaleString()}
                          </p>
                          <Button 
                            className="w-full bg-gradient-to-r from-green-600 to-green-500"
                            onClick={() => handleProductDetails(product)}
                          >
                            {t.viewDetails}
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Brands Section */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-center">{t.ourBrands}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                      <Award className="w-16 h-16 mx-auto mb-4 text-green-600" />
                      <h4 className="text-xl font-bold mb-2">Aurora</h4>
                      <p className="text-gray-600">{t.auroraDesc}</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                      <Award className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                      <h4 className="text-xl font-bold mb-2">Clif Designs</h4>
                      <p className="text-gray-600">{t.clifDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Products Tab */}
            {activeTab === 'products' && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{t.productCatalog}</h2>
                    <p className="text-gray-600">{t.productCatalogDesc}</p>
                  </div>
                  <div className="relative w-full md:w-auto">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input 
                      placeholder={t.searchProducts}
                      className="pl-10 w-full md:w-64"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <Card key={product.id} className="hover:shadow-xl transition-all">
                      <CardHeader>
                        <div className="text-6xl mb-4 text-center">{product.image}</div>
                        <div className="flex items-center justify-between mb-2">
                          <Badge className="bg-green-100 text-green-700 border-green-200">
                            {product.brand}
                          </Badge>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                            <span className="text-sm font-semibold">{product.rating}</span>
                          </div>
                        </div>
                        <CardTitle className="text-xl">{product.name}</CardTitle>
                        <CardDescription>{product.category}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex flex-wrap gap-2">
                            {product.features.map((feature, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-3xl font-bold text-green-600">
                            RM {product.price.toLocaleString()}
                          </p>
                          <div className="flex gap-2">
                            <Button 
                              className="flex-1 bg-gradient-to-r from-green-600 to-green-500"
                              onClick={() => handleInquiry(product)}
                            >
                              <ShoppingCart className="w-4 h-4 mr-2" />
                              {t.inquire}
                            </Button>
                            <Button 
                              variant="outline" 
                              className="flex-1"
                              onClick={() => handleProductDetails(product)}
                            >
                              {t.details}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Dealers Tab */}
            {activeTab === 'dealers' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{t.findDealerTitle}</h2>
                  <p className="text-gray-600">{t.findDealerDesc}</p>
                </div>

                <Card className="bg-gradient-to-r from-green-50 to-blue-50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <MapPin className="w-6 h-6 text-green-600" />
                      <h3 className="text-xl font-bold">{t.dealerLocator}</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input 
                        placeholder={t.enterLocation}
                        value={dealerSearchQuery}
                        onChange={(e) => setDealerSearchQuery(e.target.value)}
                      />
                      <Button className="bg-gradient-to-r from-green-600 to-green-500">
                        <Search className="w-4 h-4 mr-2" />
                        {t.searchDealers}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredDealers.map((dealer) => (
                    <Card key={dealer.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="flex items-center gap-2">
                              {dealer.name}
                              {dealer.verified && (
                                <Badge className="bg-green-100 text-green-700 border-green-200">
                                  ✓ {t.verified}
                                </Badge>
                              )}
                            </CardTitle>
                            <CardDescription className="flex items-center mt-2">
                              <MapPin className="w-4 h-4 mr-1" />
                              {dealer.city}
                            </CardDescription>
                          </div>
                          <Store className="w-8 h-8 text-green-600" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center text-gray-600">
                            <Phone className="w-4 h-4 mr-2" />
                            <span>{dealer.phone}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Mail className="w-4 h-4 mr-2" />
                            <span className="text-sm">{dealer.email}</span>
                          </div>
                          <div className="flex gap-2">
                            <Button 
                              className="flex-1 bg-gradient-to-r from-green-600 to-green-500"
                              onClick={() => handleContactDealer(dealer)}
                            >
                              {t.contactDealer}
                            </Button>
                            <Button variant="outline" className="flex-1">
                              {t.viewMap}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* Dealer Portal */}
        {systemMode === 'dealer' && (
          <>
            {/* Dashboard */}
            {activeTab === 'home' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{t.dealerDashboard}</h2>
                    <p className="text-gray-600">{t.welcomeBack}, Sound Masters KL</p>
                  </div>
                  <Button variant="outline">
                    <Settings className="w-4 h-4 mr-2" />
                    {t.settings}
                  </Button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.dealer.map((stat, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                            <p className="text-3xl font-bold">{stat.value}</p>
                          </div>
                          <stat.icon className={`w-12 h-12 ${stat.color}`} />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setActiveTab('orders')}>
                    <CardContent className="p-6 text-center">
                      <ShoppingCart className="w-12 h-12 mx-auto mb-3 text-blue-600" />
                      <h3 className="font-bold mb-2">{t.myOrders}</h3>
                      <p className="text-sm text-gray-600">{t.manageOrders}</p>
                    </CardContent>
                  </Card>
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setActiveTab('customers')}>
                    <CardContent className="p-6 text-center">
                      <Users className="w-12 h-12 mx-auto mb-3 text-green-600" />
                      <h3 className="font-bold mb-2">{t.myCustomers}</h3>
                      <p className="text-sm text-gray-600">{t.manageCustomers}</p>
                    </CardContent>
                  </Card>
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setActiveTab('inventory')}>
                    <CardContent className="p-6 text-center">
                      <Package className="w-12 h-12 mx-auto mb-3 text-orange-600" />
                      <h3 className="font-bold mb-2">{t.myInventory}</h3>
                      <p className="text-sm text-gray-600">{t.trackStock}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Orders */}
                <Card>
                  <CardHeader>
                    <CardTitle>{t.myOrders}</CardTitle>
                    <CardDescription>{t.manageOrders}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {orders.slice(0, 3).map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-semibold">{order.id}</h4>
                            <p className="text-sm text-gray-600">{order.customer} - {order.product}</p>
                            <p className="text-xs text-gray-500 mt-1">{order.date}</p>
                          </div>
                          <div className="text-right mr-4">
                            <p className="font-bold text-green-600">RM {order.total.toLocaleString()}</p>
                          </div>
                          <Badge className={getOrderStatusColor(order.status)}>
                            {t[order.status]}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{t.orderManagement}</h2>
                    <p className="text-gray-600">{t.manageOrders}</p>
                  </div>
                  <Button>
                    <Filter className="w-4 h-4 mr-2" />
                    {t.filter}
                  </Button>
                </div>

                <div className="grid gap-4">
                  {orders.map((order) => (
                    <Card key={order.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-bold text-lg">{order.id}</h3>
                              <Badge className={getOrderStatusColor(order.status)}>
                                {t[order.status]}
                              </Badge>
                            </div>
                            <p className="text-gray-600">{order.customer}</p>
                            <p className="text-sm text-gray-500">{order.product} × {order.quantity}</p>
                            <p className="text-xs text-gray-400 mt-1">{order.date}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <p className="text-sm text-gray-500">{t.orderTotal}</p>
                              <p className="text-2xl font-bold text-green-600">RM {order.total.toLocaleString()}</p>
                            </div>
                            <Button variant="outline">
                              <Eye className="w-4 h-4 mr-2" />
                              {t.viewOrder}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Customers Tab */}
            {activeTab === 'customers' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{t.customerManagement}</h2>
                  <p className="text-gray-600">{t.manageCustomers}</p>
                </div>

                <div className="grid gap-4">
                  {customers.map((customer) => (
                    <Card key={customer.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                              {customer.name.charAt(0)}
                            </div>
                            <div>
                              <h3 className="font-bold text-lg">{customer.name}</h3>
                              <p className="text-sm text-gray-600">{customer.email}</p>
                              <p className="text-sm text-gray-500">{customer.phone}</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                              <p className="text-sm text-gray-500">{t.totalOrders}</p>
                              <p className="text-xl font-bold">{customer.totalOrders}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">{t.lastOrder}</p>
                              <p className="text-sm font-semibold">{customer.lastOrder}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">{t.totalRevenue}</p>
                              <p className="text-lg font-bold text-green-600">RM {customer.totalSpent.toLocaleString()}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Inventory Tab */}
            {activeTab === 'inventory' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{t.inventoryManagement}</h2>
                  <p className="text-gray-600">{t.trackStock}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => {
                    const stockStatus = getStockStatus(product.stock)
                    return (
                      <Card key={product.id} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="text-5xl mb-3 text-center">{product.image}</div>
                          <Badge className="mb-2 bg-green-100 text-green-700 border-green-200">
                            {product.brand}
                          </Badge>
                          <h3 className="font-bold mb-2">{product.name}</h3>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-sm text-gray-500">{t.inStock}</span>
                            <Badge className={stockStatus.color}>
                              {product.stock} {language === 'zh' ? '件' : 'units'}
                            </Badge>
                          </div>
                          <p className="text-xl font-bold text-green-600 mb-3">
                            RM {product.price.toLocaleString()}
                          </p>
                          <div className="flex gap-2">
                            <Button variant="outline" className="flex-1" size="sm">
                              <Edit className="w-4 h-4 mr-1" />
                              {t.edit}
                            </Button>
                            <Button variant="outline" className="flex-1" size="sm">
                              <Plus className="w-4 h-4 mr-1" />
                              {language === 'zh' ? '补货' : 'Restock'}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Reports Tab */}
            {activeTab === 'reports' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{t.myReports}</h2>
                  <p className="text-gray-600">{language === 'zh' ? '查看您的业绩报表和分析' : 'View your performance reports and analytics'}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>{language === 'zh' ? '月度销售趋势' : 'Monthly Sales Trend'}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                        <BarChart3 className="w-16 h-16 text-gray-300" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>{language === 'zh' ? '产品销售排行' : 'Top Selling Products'}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {products.slice(0, 5).map((product, idx) => (
                          <div key={product.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-3">
                              <span className="font-bold text-gray-400">#{idx + 1}</span>
                              <span className="text-2xl">{product.image}</span>
                              <span className="font-semibold text-sm">{product.name}</span>
                            </div>
                            <span className="text-sm font-bold text-green-600">{Math.floor(Math.random() * 50) + 10} {language === 'zh' ? '件' : 'sold'}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>{language === 'zh' ? '业绩指标' : 'Performance Metrics'}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">{language === 'zh' ? '销售目标完成度' : 'Sales Target Achievement'}</span>
                          <span className="text-sm font-bold text-green-600">85%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-green-600 to-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">{language === 'zh' ? '客户满意度' : 'Customer Satisfaction'}</span>
                          <span className="text-sm font-bold text-green-600">92%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-green-600 to-green-500 h-2 rounded-full" style={{width: '92%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">{language === 'zh' ? '订单处理效率' : 'Order Processing Efficiency'}</span>
                          <span className="text-sm font-bold text-green-600">78%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-green-600 to-green-500 h-2 rounded-full" style={{width: '78%'}}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </>
        )}

        {/* Admin Portal */}
        {systemMode === 'admin' && (
          <>
            {/* Dashboard */}
            {activeTab === 'home' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{t.adminDashboard}</h2>
                    <p className="text-gray-600">{t.systemOverview}</p>
                  </div>
                  <Button>
                    <Download className="w-4 h-4 mr-2" />
                    {t.export}
                  </Button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.admin.map((stat, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                            <p className="text-3xl font-bold">{stat.value}</p>
                          </div>
                          <stat.icon className={`w-12 h-12 ${stat.color}`} />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setActiveTab('dealers')}>
                    <CardContent className="p-6 text-center">
                      <Store className="w-12 h-12 mx-auto mb-3 text-blue-600" />
                      <h3 className="font-bold mb-2">{t.dealerManagement}</h3>
                      <p className="text-sm text-gray-600">{t.manageDealers}</p>
                    </CardContent>
                  </Card>
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setActiveTab('products')}>
                    <CardContent className="p-6 text-center">
                      <Package className="w-12 h-12 mx-auto mb-3 text-green-600" />
                      <h3 className="font-bold mb-2">{t.productManagement}</h3>
                      <p className="text-sm text-gray-600">{t.manageProducts}</p>
                    </CardContent>
                  </Card>
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setActiveTab('reports')}>
                    <CardContent className="p-6 text-center">
                      <BarChart3 className="w-12 h-12 mx-auto mb-3 text-purple-600" />
                      <h3 className="font-bold mb-2">{t.systemReports}</h3>
                      <p className="text-sm text-gray-600">{t.viewReports}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>{language === 'zh' ? '最近活动' : 'Recent Activity'}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <div className="flex-1">
                          <p className="font-semibold text-sm">{language === 'zh' ? '新经销商加入' : 'New dealer joined'}</p>
                          <p className="text-xs text-gray-500">Premium Sound Ipoh - 2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Package className="w-5 h-5 text-blue-600" />
                        <div className="flex-1">
                          <p className="font-semibold text-sm">{language === 'zh' ? '产品库存更新' : 'Product inventory updated'}</p>
                          <p className="text-xs text-gray-500">Aurora Flagship Audio System - 3 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <ShoppingCart className="w-5 h-5 text-orange-600" />
                        <div className="flex-1">
                          <p className="font-semibold text-sm">{language === 'zh' ? '大额订单完成' : 'Large order completed'}</p>
                          <p className="text-xs text-gray-500">RM 15,000 - Sound Masters KL - 5 hours ago</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Dealers Management */}
            {activeTab === 'dealers' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{t.dealerManagement}</h2>
                    <p className="text-gray-600">{t.manageDealers}</p>
                  </div>
                  <Button className="bg-gradient-to-r from-green-600 to-green-500">
                    <Plus className="w-4 h-4 mr-2" />
                    {t.addDealer}
                  </Button>
                </div>

                <div className="grid gap-4">
                  {dealers.map((dealer) => (
                    <Card key={dealer.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                              <Store className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-bold text-lg">{dealer.name}</h3>
                                {dealer.verified && (
                                  <Badge className="bg-green-100 text-green-700 border-green-200">
                                    ✓ {t.verified}
                                  </Badge>
                                )}
                                <Badge className={dealer.status === 'active' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}>
                                  {t[dealer.status]}
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-600">{dealer.city}</p>
                              <p className="text-xs text-gray-500">{dealer.email}</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-center">
                            <div>
                              <p className="text-sm text-gray-500">{t.totalOrders}</p>
                              <p className="text-xl font-bold">{dealer.totalOrders}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">{t.totalRevenue}</p>
                              <p className="text-lg font-bold text-green-600">RM {(dealer.monthlyRevenue / 1000).toFixed(0)}K</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Edit className="w-4 h-4 mr-1" />
                              {t.edit}
                            </Button>
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-1" />
                              {t.view}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Products Management */}
            {activeTab === 'products' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{t.productManagement}</h2>
                    <p className="text-gray-600">{t.manageProducts}</p>
                  </div>
                  <Button className="bg-gradient-to-r from-green-600 to-green-500">
                    <Plus className="w-4 h-4 mr-2" />
                    {t.addProduct}
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => {
                    const stockStatus = getStockStatus(product.stock)
                    return (
                      <Card key={product.id} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="text-5xl mb-3 text-center">{product.image}</div>
                          <div className="flex items-center justify-between mb-2">
                            <Badge className="bg-green-100 text-green-700 border-green-200">
                              {product.brand}
                            </Badge>
                            <Badge className={stockStatus.color}>
                              {product.stock} {language === 'zh' ? '件' : 'units'}
                            </Badge>
                          </div>
                          <h3 className="font-bold mb-2">{product.name}</h3>
                          <p className="text-sm text-gray-600 mb-3">{product.category}</p>
                          <p className="text-2xl font-bold text-green-600 mb-3">
                            RM {product.price.toLocaleString()}
                          </p>
                          <div className="flex gap-2">
                            <Button variant="outline" className="flex-1" size="sm">
                              <Edit className="w-4 h-4 mr-1" />
                              {t.edit}
                            </Button>
                            <Button variant="outline" className="flex-1" size="sm">
                              <Trash2 className="w-4 h-4 mr-1" />
                              {t.delete}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Orders Management */}
            {activeTab === 'orders' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{t.allOrders}</h2>
                    <p className="text-gray-600">{language === 'zh' ? '管理系统中的所有订单' : 'Manage all orders in the system'}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">
                      <Filter className="w-4 h-4 mr-2" />
                      {t.filter}
                    </Button>
                    <Button>
                      <Download className="w-4 h-4 mr-2" />
                      {t.export}
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4">
                  {orders.map((order) => (
                    <Card key={order.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-bold text-lg">{order.id}</h3>
                              <Badge className={getOrderStatusColor(order.status)}>
                                {t[order.status]}
                              </Badge>
                            </div>
                            <p className="text-gray-600">{order.customer}</p>
                            <p className="text-sm text-gray-500">{order.product} × {order.quantity}</p>
                            <p className="text-xs text-gray-400 mt-1">{order.dealer}</p>
                            <p className="text-xs text-gray-400">{order.date}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <p className="text-sm text-gray-500">{t.orderTotal}</p>
                              <p className="text-2xl font-bold text-green-600">RM {order.total.toLocaleString()}</p>
                            </div>
                            <Button variant="outline">
                              <Eye className="w-4 h-4 mr-2" />
                              {t.viewOrder}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Reports */}
            {activeTab === 'reports' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{t.systemReports}</h2>
                    <p className="text-gray-600">{t.viewReports}</p>
                  </div>
                  <Button>
                    <Download className="w-4 h-4 mr-2" />
                    {t.export}
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>{language === 'zh' ? '月度销售趋势' : 'Monthly Sales Trend'}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                        <BarChart3 className="w-16 h-16 text-gray-300" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>{language === 'zh' ? '经销商业绩排行' : 'Top Performing Dealers'}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {dealers.slice(0, 4).map((dealer, idx) => (
                          <div key={dealer.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-3">
                              <span className="font-bold text-gray-400">#{idx + 1}</span>
                              <span className="font-semibold text-sm">{dealer.name}</span>
                            </div>
                            <span className="text-sm font-bold text-green-600">RM {(dealer.monthlyRevenue / 1000).toFixed(0)}K</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>{language === 'zh' ? '产品销售分析' : 'Product Sales Analysis'}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                        <TrendingUp className="w-16 h-16 text-gray-300" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>{language === 'zh' ? '区域分布' : 'Regional Distribution'}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          { region: language === 'zh' ? '吉隆坡' : 'Kuala Lumpur', value: 45 },
                          { region: language === 'zh' ? '槟城' : 'Penang', value: 25 },
                          { region: language === 'zh' ? '新山' : 'Johor Bahru', value: 20 },
                          { region: language === 'zh' ? '怡保' : 'Ipoh', value: 10 }
                        ].map((item, idx) => (
                          <div key={idx}>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium">{item.region}</span>
                              <span className="text-sm font-bold text-green-600">{item.value}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-gradient-to-r from-green-600 to-green-500 h-2 rounded-full" style={{width: `${item.value}%`}}></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Settings */}
            {activeTab === 'settings' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{t.systemSettings}</h2>
                  <p className="text-gray-600">{language === 'zh' ? '配置系统参数和选项' : 'Configure system parameters and options'}</p>
                </div>

                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>{language === 'zh' ? '基本设置' : 'Basic Settings'}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">{language === 'zh' ? '系统名称' : 'System Name'}</label>
                        <Input defaultValue="Eagerise Dealer Portal" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">{language === 'zh' ? '联系邮箱' : 'Contact Email'}</label>
                        <Input defaultValue="info@eagerise.com" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">{language === 'zh' ? '联系电话' : 'Contact Phone'}</label>
                        <Input defaultValue="+60 3-1234 5678" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>{language === 'zh' ? '通知设置' : 'Notification Settings'}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium">{language === 'zh' ? '新订单通知' : 'New Order Notifications'}</span>
                        <Badge className="bg-green-100 text-green-700">{language === 'zh' ? '已启用' : 'Enabled'}</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium">{language === 'zh' ? '库存警告' : 'Stock Alerts'}</span>
                        <Badge className="bg-green-100 text-green-700">{language === 'zh' ? '已启用' : 'Enabled'}</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium">{language === 'zh' ? '系统更新' : 'System Updates'}</span>
                        <Badge className="bg-gray-100 text-gray-700">{language === 'zh' ? '已禁用' : 'Disabled'}</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex justify-end gap-3">
                    <Button variant="outline">{t.cancel}</Button>
                    <Button className="bg-gradient-to-r from-green-600 to-green-500">{t.save}</Button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </main>

      {/* Product Details Modal */}
      {selectedProduct && !showInquiryForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedProduct(null)}>
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">{selectedProduct.name}</CardTitle>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className="bg-green-100 text-green-700 border-green-200">
                      {selectedProduct.brand}
                    </Badge>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-semibold">{selectedProduct.rating}</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-8xl text-center py-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                {selectedProduct.image}
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">{t.price}</h3>
                <p className="text-4xl font-bold text-green-600">
                  RM {selectedProduct.price.toLocaleString()}
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">{t.specifications}</h3>
                <p className="text-gray-600 mb-3">{selectedProduct.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.features.map((feature, idx) => (
                    <Badge key={idx} variant="outline">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  className="flex-1 bg-gradient-to-r from-green-600 to-green-500"
                  onClick={() => handleInquiry(selectedProduct)}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {t.inquire}
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setSelectedProduct(null)}
                >
                  {t.close}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Inquiry Form Modal */}
      {showInquiryForm && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowInquiryForm(false)}>
          <Card className="max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{t.inquiryForm}</CardTitle>
                  <CardDescription className="mt-2">{selectedProduct.name}</CardDescription>
                </div>
                <button 
                  onClick={() => setShowInquiryForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </CardHeader>
            <CardContent>
              {inquirySuccess ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <p className="text-lg font-semibold text-green-600">{t.inquirySent}</p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">{t.yourName}</label>
                    <Input name="name" required placeholder={t.yourName} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">{t.yourEmail}</label>
                    <Input name="email" type="email" required placeholder={t.yourEmail} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">{t.yourPhone}</label>
                    <Input name="phone" required placeholder={t.yourPhone} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">{t.message}</label>
                    <Textarea name="message" required placeholder={t.message} rows={4} />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-green-600 to-green-500">
                    <Send className="w-4 h-4 mr-2" />
                    {t.submit}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Dealer Contact Modal */}
      {selectedDealer && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedDealer(null)}>
          <Card className="max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{t.dealerContact}</CardTitle>
                  <CardDescription className="mt-2">{selectedDealer.name}</CardDescription>
                </div>
                <button 
                  onClick={() => setSelectedDealer(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </CardHeader>
            <CardContent>
              {inquirySuccess ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <p className="text-lg font-semibold text-green-600">{t.messageSent}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{selectedDealer.address}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="w-4 h-4 mr-2" />
                      <span className="text-sm">{selectedDealer.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Mail className="w-4 h-4 mr-2" />
                      <span className="text-sm">{selectedDealer.email}</span>
                    </div>
                  </div>

                  <form onSubmit={handleSendMessage} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">{t.yourName}</label>
                      <Input name="name" required placeholder={t.yourName} />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">{t.yourEmail}</label>
                      <Input name="email" type="email" required placeholder={t.yourEmail} />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">{t.message}</label>
                      <Textarea name="message" required placeholder={t.message} rows={4} />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-green-600 to-green-500">
                      <Send className="w-4 h-4 mr-2" />
                      {t.sendMessage}
                    </Button>
                  </form>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">EAGERISE</h3>
              </div>
              <p className="text-gray-400 text-sm">
                {t.slogan}
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t.products}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors">Aurora Series</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Clif Designs</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">{t.accessories}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t.support}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors">{t.findDealer}</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">{t.warranty}</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">{t.contactUs}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t.contact}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@eagerise.com
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +60 3-1234 5678
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>{t.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

