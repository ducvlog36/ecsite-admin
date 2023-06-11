/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { CButton, CCard, CCardBody, CCol, CForm, CFormInput, CFormLabel, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow, CTooltip } from '@coreui/react'
import { getAllSim } from '../../../services/SimServices'

const SimNgeGoi = () => {
  const [data, setData] = useState()
  useEffect(()=>{
    const simFetch=async()=>{
      const responce = await getAllSim()
      console.log(responce)
      setData(responce)
    }
    simFetch()
  },[])
  
  return (
    <div>
      <CCard>
        <CCardBody>
        <CForm className="row g-3">
          <CCol xs="auto">
            <CFormInput type="text" id="staticEmail2" defaultValue="Đầu số"/>
          </CCol>
          <CCol xs="auto">
            <CFormLabel htmlFor="inputPassword2" className="visually-hidden">
              ICCID
            </CFormLabel>
            <CFormInput type="password" id="inputPassword2" placeholder="Password" />
          </CCol>
          <CCol xs="auto">
            <CButton type="submit" className="mb-3">
              Tìm kiếm
            </CButton>
          </CCol>
        </CForm>
        </CCardBody>
      </CCard>
    <div className="table-container">
    <CTable>
      <CTableHead>
        <CTableRow>
          <div className='sticky'>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell className="table-header-cell" scope="col">Số ĐT</CTableHeaderCell>
          </div>
          <CTableHeaderCell className="table-header-cell" scope="col">ICCID</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">SMP</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Ngày nhập</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Nơi nhập</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Nơi xuất</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Gói cước</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Tình trạng</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Lọc số</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">NOTE</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Số Cũ</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Gói cước cũ</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Họ tên</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Nguồn</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Check cước </CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Lọc số</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Nơi xuất cũ</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Số Cũ</CTableHeaderCell>
        </CTableRow>
      </CTableHead>

          {data&&data.map((sim,index)=>{
            return(
              <>
              <CTableBody>
                <CTableRow>
                  <div className='sticky'>
                  <CTableHeaderCell scope="row">{index+1}</CTableHeaderCell>
                  <CTooltip
                      content={(
                        <>
                        <ul className="no-bullets">
                          <li>{sim.iccid}</li>
                          <li>ICCID</li>
                          <li>Ngày nhập</li>
                          <li>Thông số sim</li>
                          <li>Thông số sim</li>
                          <li>Thông số sim</li>
                          <li>Thông số sim</li>
                          <li>Thông số sim</li>
                          <li>Thông số sim</li>
                          <li>Thông số sim</li>
                          <li>Thông số sim</li>
                          <li>Thông số sim</li>
                          <li>Thông số sim</li>
                          <li>Thông số sim</li>
                          </ul>
                        </>
                      )}
                  placement="top">
                    <CTableDataCell className="sticky">{sim.phone_number}</CTableDataCell>
                </CTooltip>
              
            </div>
              <CTableDataCell>{sim.iccid}</CTableDataCell>
              <CTableDataCell>@mdo1</CTableDataCell>
              <CTableDataCell>Mark2</CTableDataCell>
              <CTableDataCell>Otto3</CTableDataCell>
              <CTableDataCell>@mdo4</CTableDataCell>
              <CTableDataCell>Mark5</CTableDataCell>
              <CTableDataCell>Otto6</CTableDataCell>
              <CTableDataCell>@mdo7</CTableDataCell>
              <CTableDataCell>Mark8</CTableDataCell>
              <CTableDataCell>Otto9</CTableDataCell>
              <CTableDataCell>@mdo10</CTableDataCell>
              <CTableDataCell>Mark11</CTableDataCell>
              <CTableDataCell>Otto12</CTableDataCell>
              <CTableDataCell>@mdo13</CTableDataCell>
              <CTableDataCell>Mark14</CTableDataCell>
              <CTableDataCell>Otto15</CTableDataCell>
              <CTableDataCell>@mdo</CTableDataCell>
            </CTableRow>
            </CTableBody>
              </>
            )
          })}
    </CTable>
    </div>
    <div className="button-container">
      <CButton color="primary" variant="outline">Thao tác 1</CButton>
      <CButton color="success" variant="outline">Thao tác 2</CButton>
      <CButton color="warning" variant="outline">Thao tác 3</CButton>
      <CButton color="danger" variant="outline">Thao tác 4</CButton>
    </div>
    </div>
  )
}

export default SimNgeGoi
