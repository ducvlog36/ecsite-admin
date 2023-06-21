/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react'
import { CButton, CCard, CCardBody, CCol, CForm, CFormInput, CFormLabel, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsExample } from 'src/components'
import { getAllSimPlan } from 'src/services/SimServices'
import * as XLSX from 'xlsx';

const SimData = () => {
  const [data, setData] = useState()
  useEffect(()=>{
    const simFetch=async()=>{
      const responce = await getAllSimPlan()
      console.log(responce)
      setData(responce)
    }
    simFetch()
  },[])

  const fileInputRef = useRef(null);
  const [data1, setData1] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: 'array' });

      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];

      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      const filteredData = jsonData.filter((row) => row[0] !== undefined && row[0] !== '');
      const parsedData = filteredData.slice(1).map((row) => {
        const parsedRow = {};

        parsedRow.bien1 = row[0] || '';
        parsedRow.bien2 = row[1] || '';
        parsedRow.bien3 = row[2] || '';
        parsedRow.bien4 = row[3] || '';
        parsedRow.bien5 = row[4] || '';
        parsedRow.bien6 = row[5] || '';
        parsedRow.bien7 = row[6] || '';
        parsedRow.bien8 = row[7] || '';
        parsedRow.bien9 = row[8] || '';
        parsedRow.bien10 = row[9] || '';
        parsedRow.bien11 = row[10] || '';
        return parsedRow;
      });
      console.log(parsedData)
      setData1(parsedData);
    };

    reader.readAsArrayBuffer(file);
  };

  const [selectedItems, setSelectedItems] = useState([]);
  const handleCheckboxChange = (index) => {
    // Kiểm tra xem giá trị đã được chọn hay chưa
    const selectedIndex = selectedItems.indexOf(index);
    if (selectedIndex === -1) {
      setSelectedItems([...selectedItems, index]);
    } else {
      // Nếu đã được chọn, loại bỏ index khỏi mảng selectedItems
      const updatedItems = [...selectedItems];
      updatedItems.splice(selectedIndex, 1);
      setSelectedItems(updatedItems);
    }
  };
  console.log(selectedItems)

  return (
    <div>
          <div>
      <input type="file" 
      className="file-input"
      onChange={handleFileChange} ref={fileInputRef} />
      {data && (
        <table>
          <thead>
            <tr>
              {data1[0].map((cell, index) => (
                <th key={index}>{cell}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data1.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
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
            <CTableHeaderCell className="table-header-cell" scope="col">Đầu số</CTableHeaderCell>
          </div>
          <CTableHeaderCell className="table-header-cell" scope="col">ICCID</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">SMP</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Ngày nhập</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Nơi nhập</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Nơi xuất</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Gói cước</CTableHeaderCell>
          <CTableHeaderCell className="table-header-cell" scope="col">Tình trạng</CTableHeaderCell>
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

          {data1&&data1.map((sim,index)=>{
            const isChecked = selectedItems.includes(sim.bien2);
            return(
              <>
              <CTableBody>
                <CTableRow>
                  <div className='sticky'>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleCheckboxChange(sim.bien2)}
                  />
                <CTableHeaderCell scope="row">{index+1} : </CTableHeaderCell>
              <CTableDataCell className="sticky">{sim.bien2}</CTableDataCell>
            </div>
              <CTableDataCell>{sim.bien3}</CTableDataCell>
              <CTableDataCell>{sim.bien4}</CTableDataCell>
              <CTableDataCell>{sim.bien5}</CTableDataCell>
              <CTableDataCell>{sim.bien6}</CTableDataCell>
              <CTableDataCell>{sim.bien7}</CTableDataCell>
              <CTableDataCell>{sim.bien8}</CTableDataCell>
              <CTableDataCell>{sim.bien9}</CTableDataCell>
              <CTableDataCell>{sim.bien10}</CTableDataCell>
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

export default SimData
