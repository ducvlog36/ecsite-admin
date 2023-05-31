import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilPeople,
  cilSim,
  cilBasket,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Tổng quát',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'HOT',
    },
  },
  {
    component: CNavItem,
    name: 'Lệnh mới',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavItem,
    name: 'Lịch sử lệnh',
    to: '/theme/typography',
    icon: <CIcon icon={cilSim} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Cộng tác viên',
    to: '/theme/typography2',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: '....',
    to: '/theme/typography1',
    icon: <CIcon icon={cilSim} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Quản lý',
  },
  {
    component: CNavGroup,
    name: 'SV Shop',
    to: '/base',
    icon: <CIcon icon={cilBasket} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Đang bán',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Lên đơn',
        to: '/shop/lendon',
      },
      {
        component: CNavItem,
        name: 'Chờ thanh toán',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Thống kê',
        to: '/base/tables',
      },
      {
        component: CNavItem,
        name: 'Tooltips',
        to: '/base/tooltips',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Kho sim',
    to: '/sim',
    icon: <CIcon icon={cilSim} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Sim nghe gọi',
        to: '/sim/nghe-goi',
      },
      {
        component: CNavItem,
        name: 'Sim data',
        to: '/sim/data',
      },
      {
        component: CNavItem,
        name: 'Thống kê',
        to: '/sim/thong-ke',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Cộng tác viên',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Đại lý',
        to: '/partner/agency',
      },
      {
        component: CNavItem,
        name: 'Cộng tác viên',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: 'Thống kê',
        to: '/forms/checks-radios',
      },
      {
        component: CNavItem,
        name: 'Layout',
        to: '/forms/layout',
      },
      {
        component: CNavItem,
        name: 'Validation',
        to: '/forms/validation',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Charts',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets',
    to: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavItem,
    name: 'Docs',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav
