import React from 'react'

function History() {
  return (
    <>
    <div className='container-fluid'>
      <h1>watch history</h1>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>video id</th>
            <th>video title</th>
            <th>video url</th>
            <th>date and time</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>heeriye</td>
            <td>https://www.youtube/watch/fwvw89v</td>
            <td>29-8-2024</td>
            <td><button className='btn'><i className="fa-solid fa-trash fa-xl" style={{color: "#ff0000",}} /></button></td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default History