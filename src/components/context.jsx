import React, { useState, useEffect, useContext } from 'react'
import { getAll, update, add, del } from './wordsService';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [editWord, setEditWord] = useState({ id: '', noun: '', gender: '' });
  const [message, setMessage] = useState('');
  const [testWord, setTestWord] = useState('');
  const [score, setScore] = useState({ right: 0, wrong: 0 });
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(1);
  const [dataSlice, setDateSlice] = useState({ start: 0, end: 10 });
  const [wordList, setWordList] = useState([]);
  
  const handleEdit = (word) => {
    setEditWord({ noun: word.noun, gender: word.gender, id: word.id });
  }

  const handleDelete = (id) => {
    del(id)
      .then(data => setWords(data))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const sameWord = words.find(word => word.noun === editWord.noun);
    const checkGender
      = editWord.gender === 'die' || editWord.gender === 'der' || editWord.gender === 'das';
    
    if (!checkGender) {
      setMessage(`please enter a right gender`);
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    if (!sameWord) {
      add(editWord) 
        .then(data => {
          setWords(data);
          setMessage(`add a new word ${editWord.noun}`);
          setTimeout(() => setMessage(''), 3000);
          setEditWord({ noun: '', gender: '' });
        })
        .catch(err => {
          setMessage(`please enter a word`);
          setTimeout(() => setMessage(''), 3000);          
        })
    } else {
      update(editWord)
        .then(data => {
          setWords(data)
          setMessage(`edit a word ${editWord.noun}`);
          setTimeout(() => setMessage(''), 3000);
        })
        .catch(err => {
          setMessage(`can't work`);
          setTimeout(() => setMessage(''), 3000);  
          setWords(words.filter(word => word.id !== editWord.id))        
        })
      setEditWord({ noun: '', gender: '' });
    }
  }

  const getRandomWord = () => {
    setTestWord(words[Math.floor(Math.random() * words.length)]);
  }

  const checkAnswer = (btnGender) => {
    if (testWord.gender === btnGender) {
      setScore({...score, right: score.right + 1});
      getRandomWord();
    } else {
      setScore({...score, wrong: score.wrong + 1});
      getRandomWord();
    }
  }

  const prevPage = () => {
    if (page === 1) {
      return
    } else {
      setPage(oldValue => oldValue - 1);
      setDateSlice({
        ...dataSlice, 
        start: dataSlice.start - 10, 
        end: dataSlice.end - 10
      })
    }
  }

  const nextPage = () => {
    if (page === pages) {
      return
    } else {
      setPage(oldValue => oldValue + 1);
      setDateSlice({
        ...dataSlice, 
        start: dataSlice.start + 10, 
        end: dataSlice.end + 10
      })
    }
  }

  useEffect(() => {
    getAll()
      .then(data => {
        setWords(data);
        setTestWord(data[Math.floor(Math.random() * data.length)]);
        setWordList(data.slice(dataSlice.start , dataSlice.end));
        return data.length;
      })
      .then(length => {
        setPages(Math.ceil(length/ 10));
      })
  }, []);

  useEffect(() => {
    setWordList(words.slice(dataSlice.start , dataSlice.end));
  }, [dataSlice, words]);

  return (
    <AppContext.Provider 
      value={{ 
        words, 
        setWords, 
        editWord,
        setEditWord,
        handleEdit,
        handleDelete,
        handleSubmit,
        message,
        testWord,
        checkAnswer,
        score,
        pages,
        page,
        wordList,
        prevPage,
        nextPage
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider }
export const useGlobalContext = () => {
  return useContext(AppContext);
}
