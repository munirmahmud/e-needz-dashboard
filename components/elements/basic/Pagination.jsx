import React from 'react'

const Pagination = ({ spliceNO, setSpliceNO, offset, setOffset, len }) => {
  const pag = Math.ceil(len / 10)
  return (
    <ul className='pagination'>
      <li>
        <a
          onClick={() => {
            if (offset >= 0 && spliceNO >= 15) {
              setOffset(offset - spliceNO)
              setSpliceNO(spliceNO - 5)
            }
          }}
        >
          <i className='icon icon-chevron-left'></i>
        </a>
      </li>

      {/* <li className='active'>
        <a href='#'>1</a>
      </li>
      <li>
        <a href='#'>2</a>
      </li>
      <li>
        <a href='#'>3</a>
      </li> */}

      <li>
        <a
          onClick={() => {
            if (spliceNO <= len) {
              setOffset(offset + spliceNO)
              setSpliceNO(spliceNO + 5)
            }
          }}
        >
          <i className='icon-chevron-right'></i>
        </a>
      </li>
    </ul>
  )
}

export default Pagination
