/* eslint-disable */
import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CWidgetStatsF,
  CLink,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import CIcon from '@coreui/icons-react'
import { cilChartPie } from '@coreui/icons'

const Accordion = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Danh sách sản phẩm</strong>
          </CCardHeader>
          <CCardBody>
              <CAccordion>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>Sim nghe gọi</CAccordionHeader>
                  <CAccordionBody>
                  <CRow>
                    <CCol xs={6}>
                      <CWidgetStatsF
                        className="mb-3"
                        color="primary"
                        icon={<CIcon icon={cilChartPie} height={24} />}
                        padding={false}
                        title="Sim nghe gọi 20gb"
                        value="89.19%"/>
                    </CCol>
                    <CCol xs={6}>
                      <CWidgetStatsF
                        className="mb-3"
                        color="warning"
                        icon={<CIcon icon={cilChartPie} height={24} />}
                        padding={false}
                        title="Widget title"
                        value="89.19%"/>
                    </CCol>
                  </CRow>
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                <CAccordionHeader>Sim data</CAccordionHeader>
                  <CAccordionBody>
                  <CRow>
                    <CCol xs={6}>
                      <CWidgetStatsF
                        className="mb-3"
                        color="primary"
                        icon={<CIcon icon={cilChartPie} height={24} />}
                        padding={false}
                        title="Sim nghe gọi 20gb"
                        value="89.19%"/>
                    </CCol>
                    <CCol xs={6}>
                      <CWidgetStatsF
                        className="mb-3"
                        color="warning"
                        icon={<CIcon icon={cilChartPie} height={24} />}
                        padding={false}
                        title="Widget title"
                        value="89.19%"/>
                    </CCol>
                  </CRow>
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                <CAccordionHeader>Sim data trả 1 lần</CAccordionHeader>
                  <CAccordionBody>
                  <CRow>
                    <CCol xs={6}>
                      <CWidgetStatsF
                        className="mb-3"
                        color="primary"
                        icon={<CIcon icon={cilChartPie} height={24} />}
                        padding={false}
                        title="Sim nghe gọi 20gb"
                        value="89.19%"/>
                    </CCol>
                    <CCol xs={6}>
                      <CWidgetStatsF
                        className="mb-3"
                        color="warning"
                        icon={<CIcon icon={cilChartPie} height={24} />}
                        padding={false}
                        title="Widget title"
                        value="89.19%"/>
                    </CCol>
                  </CRow>
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Accordion
