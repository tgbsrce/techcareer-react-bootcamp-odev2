import React, { useState } from 'react'
import { suppliers } from '../data/suppliers'
import Table from 'react-bootstrap/Table';



function SuppliersTable() {

    const [suppliersList, setSuppliersList] = useState(suppliers);
   

    const removeAll = () => {
     setSuppliersList([])
    }
    
    const removeItem =(id) => {
    
     let newSuppliersList= suppliersList.filter(item => item.id !== id);
     setSuppliersList(newSuppliersList)
        
    }
    const searchSuppliers= (data) => {
        let searchData =data.toLowerCase().trim();
        let newSuppliers = suppliers.filter(q => q.companyName.toLowerCase().includes(searchData));
        setSuppliersList(newSuppliers)
    }
    const orderBy = () => {
        let sortSuppliers = suppliersList.sort((a, b) => {
            let fa = a.companyName.toLowerCase(),
                fb = b.companyName.toLowerCase();

            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
        setSuppliersList([...sortSuppliers])

    }
    const orderByDesc = () => {
        let sortSuppliers = suppliersList.sort((a, b) => {
            let fa = a.companyName.toLowerCase(),
                fb = b.companyName.toLowerCase();

            if (fa < fb) {
                return 1;
            }
            if (fa > fb) {
                return -1;
            }
            return 0;
        });
        setSuppliersList([...sortSuppliers])

    }
    const loadData = () => {

        setSuppliersList(suppliers)
    }

    

  return (
   <>
    
    <div>
        <h2>Suppliers Table</h2>
    </div>
   
    
    <div>
        <input className='topbutton' type='text'onChange={(e) => searchSuppliers(e.target.value)} placeholder="Seacrh by name..." />
        <button className='topbutton' onClick={() => orderBy()}>Order By</button>
        <button className='topbutton' onClick={() => orderByDesc()}>Order By Desc</button>
        <button className='topbutton' onClick={() => loadData()}>Load Data</button>
        <button className='topbutton' onClick={() => removeAll()}>Remove All</button>
    </div>

   <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Id</th>
          <th>Company Name</th>
          <th>Contact Name</th>
          <th>Contact Title</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
      {
       suppliersList && suppliersList.map((item,key) => {
        
        return <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.companyName}</td>
            <td>{item.contactName}</td>
            <td>{item.contactTitle}</td>
            <td><button onClick={() => removeItem(item.id)}>Remove</button></td>
        </tr>

       }
       
       )
   }
           
         
    
      </tbody>
    </Table>
   
   
   </>
  )
}

export default SuppliersTable