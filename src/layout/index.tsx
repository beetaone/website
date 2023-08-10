import React, { ReactNode } from 'react'

import './global.css'

interface MainLayoutProps {
  children: ReactNode
  // footerChildren?: ReactNode
  // footerMarginTop?: string
  // footerMarginTopMobile?: string
}

export default function MainLayout({
  children,
}: // footerChildren,
// footerMarginTop,
// footerMarginTopMobile,
MainLayoutProps) {
  return <>{children}</>
}
