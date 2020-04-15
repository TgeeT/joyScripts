import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function PhoneBookForm({ addEntryToPhoneBook }) {
  return (
    <form onSubmit={e => { 
      e.preventDefault()
      addEntryToPhoneBook({
        firstName: e.currentTarget[0].value,
        lastName: e.currentTarget[1].value,
        phone: e.currentTarget[2].value
      })
      }} 
      style={style.form.container}
      >
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        type='text'
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        type='text' 
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        type='text'
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User' 
      />
    </form>
  )
}

function InformationTable({ details = [] }) {
  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead> 
      <tbody>
      {
        details.map((detail, index) => (
          <tr key={index}>
          <td style={style.tableCell}>{detail.firstName}</td>
          <td style={style.tableCell}>{detail.lastName}</td>
          <td style={style.tableCell}>{detail.phone}</td>
        </tr>
        ))
      }
      </tbody>
    </table>
  );
}

function Application(props) {
  const [details, setdetails ] = useState([])
  const handleChange = (userDetails) => {
    setdetails([...details, userDetails])
  }
  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={handleChange}/>
      <InformationTable details={details}/>
    </section>
  );
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);