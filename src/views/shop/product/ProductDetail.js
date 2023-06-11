/* eslint-disable */
import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow, CCallout, CLink, CImage, CFormLabel, CFormInput, CForm, CFormCheck, CButton, CFormTextarea } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import avatar6 from 'src/assets/images/products/4-11.jpg'


const ProductDetail = () => {
  const random = () => Math.round(Math.random() * 100)

  return (
    <CRow>
      <CCol xs={12}>
      <CCallout color="info" className="bg-white">
        <h2>Sim nghe gọi</h2>
        Người cập nhật
    </CCallout>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Hình ảnh</CCardHeader>
          <CCardBody>
            <CImage fluid src={avatar6} width={200} height={200} />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Thông tin sản phẩm</CCardHeader>
          <CCardBody>
          <CForm>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label-sm">Tên</CFormLabel>
                <CCol sm={10} >
                  <CFormInput type="email" id="inputEmail3"/>
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label-sm">Giá sale</CFormLabel>
                <CCol sm={10} >
                  <CFormInput type="email" id="inputEmail3"/>
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputPassword3" className="col-sm-2 col-form-label-sm">Giá gốc</CFormLabel>
                <CCol sm={10} >
                  <CFormInput type="password" id="inputPassword3"/>
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormTextarea
                  id="exampleFormControlTextarea1"
                  label="Mô tả"
                  rows={3}
                ></CFormTextarea>
              </CRow>
              <fieldset className="row mb-3">
                <CCol sm={10} >
                  <CFormCheck type="radio" name="gridRadios" id="gridRadios1" value="option1" label="Bán giá sale" defaultChecked/>
                  <CFormCheck type="radio" name="gridRadios" id="gridRadios2" value="option2" label="Bán giá gốc"/>
                  <CFormCheck type="checkbox" id="gridCheck1" label="Sản phẩm hot"/>
                </CCol>
              </fieldset>
              <CRow className="mb-3">
                <div className="col-sm-10 offset-sm-2">
                </div>
              </CRow>
              <CButton type="submit">Cập nhật</CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ProductDetail
