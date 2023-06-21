/* eslint-disable */
import React, { useEffect, useState } from 'react'
import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardImage,
  CCol,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CFormInput,
  CFormLabel,
  CImage,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTooltip,
} from '@coreui/react'

import { DocsExample } from 'src/components'
import CIcon from '@coreui/icons-react'
import { cilChartPie } from '@coreui/icons'
import { Link } from 'react-router-dom'
import { getAllPromotion, getAllSimPlan } from 'src/services/SimServices'

const OnSale = () => {
  const [simPlan, setSimPlan] = useState()
  const [promotions, setPromotions] = useState()
  const [selected, setSelected] = useState()
  const [editing, setEditing] = useState(null)
  const [selectedImage, setSelectedImage] = useState();

  useEffect(() => {
    const simTypeFetch = async () => {
      const responce = await getAllSimPlan()
      const responce2 = await getAllPromotion()
      setPromotions(responce2)
      console.log(responce2)
      setSimPlan(responce)
    }
    simTypeFetch()
  }, [])
  
  const handleSelect = (value) => {
    setSelected(value)
  }
  
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  }

  return (
    <div>
      <div className="button-container">
        <CButton color="primary" variant="outline">
          Thao tác 1
        </CButton>
        <CButton color="success" variant="outline">
          Thao tác 2
        </CButton>
        <CButton color="warning" variant="outline">
          Thao tác 3
        </CButton>
        <CButton color="danger" variant="outline">
          Thao tác 4
        </CButton>
      </div>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader className="CCardHeader">
              <div className="CCardHeaderLeft">
                <CDropdown>
                  <CDropdownToggle color="secondary">Thứ tự</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Tới ~ cũ</CDropdownItem>
                    <CDropdownItem href="#">Cũ ~ mới</CDropdownItem>
                    <CDropdownItem href="#">Quản lý nhiều sim</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </div>
              <div className="CCardHeaderRight">Danh sách</div>
            </CCardHeader>
            <CCardBody>
              <br />
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableBody>
                  <CTableRow v-for="item in tableItems">
                    <CTableDataCell>
                      <div className="clearfix">
                        <div className="float-start">
                          <strong>Hình ảnh</strong>
                        </div>
                      </div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <strong>Gói cước</strong>
                    </CTableDataCell>
                    <CTableDataCell>
                      <strong>Giá bán</strong>
                    </CTableDataCell>
                    <CTableDataCell>
                      <strong>Cước đầu vào</strong>
                    </CTableDataCell>
                    <CTableDataCell>
                      <strong>Khuyễn mãi</strong>
                    </CTableDataCell>
                    <CTableDataCell>Thao tác</CTableDataCell>
                  </CTableRow>
                  {simPlan &&
                    simPlan.map((item, index) => {
                      return (
                        <>
                          {editing === index ? (
                            <>
                              <CTableRow v-for="item in tableItems" key={index}>
                              <CTableDataCell>
                                {selectedImage ? <img src={URL.createObjectURL(selectedImage)} />: 
                                <CFormInput
                                type="file"
                                placeholder={item.name}
                                aria-label="readonly input example"
                                readOnly
                              />
                                }
                                  
                                </CTableDataCell>
                                <CTableDataCell>
                                  <CFormInput
                                    type="text"
                                    placeholder={item.name}
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
                                </CTableDataCell>
                                <CTableDataCell>
                                  <CFormInput
                                    type="text"
                                    placeholder={item.name}
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
                                <CTableDataCell>
                                  <div className="small text-medium-emphasis">
                                    <CImage
                                      align="start"
                                      rounded
                                      src="/image/1.jpg"
                                      width={100}
                                      height={'100%'}
                                    />
                                  </div>
                                </CTableDataCell>
                                <CTableDataCell className="text-center">
                                  <div className="float-start">
                                    <strong>{item.name}</strong>
                                  </div>
                                </CTableDataCell>
                                <CTableDataCell>
                                  <div className="clearfix">
                                    <div className="float-start">
                                      <strong>{item.unit_price}</strong>
                                    </div>
                                  </div>
                                </CTableDataCell>
                                <CTableDataCell>
                                  <strong>{item.initial_fee}</strong>
                                </CTableDataCell>
                                <CTableDataCell>
                                  <strong>{item.promotion || 'Không có'}</strong>
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

export default OnSale
