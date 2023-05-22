/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { CButton, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow, CTooltip } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { getAllUser } from '../../../services/AuthService'
import { DocsExample } from 'src/components'

const SimNgeGoi = () => {
  const [data, setData] = useState()
  useEffect(()=>{
    const simFetch=async()=>{
      const responce = await getAllUser()
      console.log(responce)
      setData(responce)
    }
    simFetch()
  },[])
  return (
    <div>
    <div className="table-container">
    <CTable>
      <CTableHead>
        <CTableRow>
          <div className='sticky'>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell className="table-header-cell" scope="col">Đầu số</CTableHeaderCell>
          </div>
          <CTableHeaderCell className="table-header-cell" scope="col">ICCID</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Heading3</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Heading4</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Heading5</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Heading6</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Heading7</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Heading8</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Heading9</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Heading10</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Heading11</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Heading12</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Heading13</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Heading14</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Heading15</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Heading16</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Heading17</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Heading18</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Heading19</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Heading20</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Heading21</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Heading22</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Heading23</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Heading24</CTableHeaderCell>
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
              <CTableDataCell>@mdo</CTableDataCell>
              <CTableDataCell>Mark</CTableDataCell>
              <CTableDataCell>Otto</CTableDataCell>
              <CTableDataCell>@mdo</CTableDataCell>
              <CTableDataCell>Mark</CTableDataCell>
              <CTableDataCell>Otto</CTableDataCell>
              <CTableDataCell>@mdo</CTableDataCell>
              <CTableDataCell>Mark</CTableDataCell>
              <CTableDataCell>Otto</CTableDataCell>
              <CTableDataCell>@mdo</CTableDataCell>
              <CTableDataCell>Mark</CTableDataCell>
              <CTableDataCell>Otto</CTableDataCell>
              <CTableDataCell>@mdo</CTableDataCell>
              <CTableDataCell>Mark</CTableDataCell>
              <CTableDataCell>Otto</CTableDataCell>
              <CTableDataCell>@mdo</CTableDataCell>
              <CTableDataCell>Mark</CTableDataCell>
              <CTableDataCell>Otto</CTableDataCell>
              <CTableDataCell>@mdo</CTableDataCell>
              <CTableDataCell>Mark</CTableDataCell>
              <CTableDataCell>Otto</CTableDataCell>
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
