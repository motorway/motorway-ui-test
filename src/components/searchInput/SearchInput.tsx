import React from 'react';
import CloseIcon from '../../assets/icons/close.svg?react';

import styles from './SearchInput.module.scss';

interface SearchInputProps {
  searchTerm: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchTerm }) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div className={styles.search}>
      <div className={styles.wrapper}>
        <input className={styles.input} type="text" value={searchTerm} onChange={onChange} />
        {searchTerm && (
          <div className={styles.clear}>
            <CloseIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
