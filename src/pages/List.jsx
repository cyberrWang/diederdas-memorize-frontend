import React from 'react'
import { useGlobalContext } from '../components/context'
import Table from '../components/Table';
import Form from '../components/Form';

const List = () => {
  const { pages, wordList, words } = useGlobalContext();

  return (
    <div className='list'>
      <Table 
        words={pages > 1 ? wordList : words} 
      />
      <Form />
    </div>
  )
}

export default List
