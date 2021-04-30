import React, { useEffect, useRef } from "react";

import { BiRightArrowAlt } from "react-icons/bi";
import styles from "./SearchModal.module.scss";

const SearchModal = ({
  value,
  handleChange,
  handleToggleSearchModal,
  resultsNumber,
}) => {
  // When component mounts point to input
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={styles.SearchModal}>
      <div className={styles.searchContainer}>
        <div className={styles.inputContainer}>
          <input
            value={value}
            onChange={handleChange}
            placeholder="Search"
            ref={inputRef}
          />
          <BiRightArrowAlt className={styles.arrowRightIcon} />
        </div>

        {/* Suggestions */}

        {/* See Results */}
        <div className={styles.results}>
          {value.length > 1 ? (
            <p>
              See the {resultsNumber} results for "{value}"
            </p>
          ) : (
            <p>See All Results </p>
          )}

          <BiRightArrowAlt className={styles.arrowRightIcon} />
        </div>
      </div>
      <div className={styles.overlay} onClick={handleToggleSearchModal}></div>
    </div>
  );
};

export default SearchModal;
