/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CForm, CFormInput, CFormLabel, CInputGroup, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow, CTooltip } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsExample } from 'src/components'
import { getAllPartner } from 'src/services/PartnerServices'

const Agency = () => {
  const [data, setData] = useState()
  const [selected, setSelected] = useState()
  const [editing, setEditing] = useState(null)

  useEffect(()=>{
    const partnerFetch=async()=>{
      const responce = await getAllPartner()
      console.log(responce)
      setData(responce)
    }
    partnerFetch()
  },[selected])

  const handleSelect = (value) => {
    setSelected(value);
  };

  return (
    <div>

    <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader className='CCardHeader'>
              <div className='CCardHeaderLeft'>
              <CDropdown>
                <CDropdownToggle color="secondary">Thứ tự</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Tới ~ cũ</CDropdownItem>
                  <CDropdownItem href="#">Cũ ~ mới</CDropdownItem>
                  <CDropdownItem href="#">Quản lý nhiều sim</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              </div>
              <div className='CCardHeaderRight'>
                Danh sách đại lý
              </div>
            </CCardHeader>
            <CCardBody>
              <br />
              <CTable align="middle" className="mb-0 border" hover responsive>
            <CTableBody>
              {data&&data.map((item,index)=>{
                return(
                  <>
                    {editing === index ? (
                     <>
                <CTableRow v-for="item in tableItems" key={index}>
                  <CTableDataCell className="text-center">
                  </CTableDataCell>
                  <CTableDataCell>
                  <CFormInput
                      type="text"
                      placeholder={item.name}
                      aria-label="readonly input example"
                      readOnly
                    />
                    <CFormInput
                      type="text"
                      placeholder={item.partner_description}
                      aria-label="readonly input example"
                      readOnly
                    />
                  </CTableDataCell>
                  <CTableDataCell className="text-center">
                    <CIcon size="xl" icon={item.name} title={item.name}/>
                  </CTableDataCell>
                  <CTableDataCell>
                  <CFormInput
                      type="text"
                      placeholder={item.name}
                      aria-label="readonly input example"
                      readOnly
                    />
                    <CFormInput
                      type="text"
                      placeholder={item.partner_description}
                      aria-label="readonly input example"
                      readOnly
                    />
                  </CTableDataCell>
                  <CTableDataCell>
                  <CFormInput
                      type="text"
                      placeholder={item.name}
                      aria-label="readonly input example"
                      readOnly
                    />
                    <CFormInput
                      type="text"
                      placeholder={item.partner_description}
                      aria-label="readonly input example"
                      readOnly
                    />
                  </CTableDataCell>
                  <CTableDataCell>
                      <CButton onClick={() => setEditing(null)}>Save</CButton>
                      <CButton onClick={() => setEditing(null)}>Close</CButton>
                  </CTableDataCell>
                </CTableRow>
                     </>
                   ) : (
                     <>
                <CTableRow v-for="item in tableItems" key={index}>
                  <CTableDataCell className="text-center">
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{item.name}</div>
                    <div className="small text-medium-emphasis">
                      <span>{item.partner_description}</span>
                    </div>
                  </CTableDataCell>
                  <CTableDataCell className="text-center">
                    <CIcon size="xl" icon={item.name} title={item.name}/>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div className="clearfix">
                      <div className="float-start">
                      <div className="small text-medium-emphasis">Số lượng sim</div>
                        <strong>{item.name}%</strong>
                      </div>
                      <div className="float-end">
                      <div className="small text-medium-emphasis">Doanh thu</div>
                        <strong>{item.name}%</strong>
                      </div>
                    </div>
                  </CTableDataCell>

                  <CTableDataCell>
                    <div className="small text-medium-emphasis">Chi ra</div>
                    <strong>{item.name}</strong>
                  </CTableDataCell>
                  <CTableDataCell>
                      <CButton onClick={() => setEditing(index)}>Edit</CButton>
                  </CTableDataCell>
                </CTableRow>
                      </>
                   )}
                  </>
                )
              })}
              </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default Agency
