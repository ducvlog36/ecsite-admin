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
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>Sim nghe gọi trả 1 lần</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
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
