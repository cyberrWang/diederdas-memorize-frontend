import React from 'react'
import Word from './Word'
import { useGlobalContext } from './context'
import { RxTriangleLeft, RxTriangleRight } from 'react-icons/rx' 

const Table = ({ words }) => {
  const { pages, page, prevPage, nextPage } = useGlobalContext();
  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>word</th>
          <th>gender</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
        {words.length > 0 ? 
          (
            words.map(word => {
              return (
                <Word word={word} key={word.id}/>
              )
            })
          ) : (
            <tr>
              <td colSpan={3}>no word</td>
            </tr>
          )
        }
      </tbody>
    </table> 
      {pages > 1 && 
        <div className='page-btn-container'>
          <button className='page-btn' onClick={prevPage}><RxTriangleLeft /></button>
          <p>{page}</p>
          <button className='page-btn' onClick={nextPage}><RxTriangleRight /></button>
        </div>
      }
    </div>
  )
}

export default Table
