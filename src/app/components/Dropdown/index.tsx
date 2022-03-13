import React, { useEffect, useRef, useState } from 'react';
import { Icon } from 'semantic-ui-react';
import listenForOutsideClicks from 'src/app/utils/listenForOutsideClicks';

function Dropdown({ title, items, onChange, multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  const [listening, setListening] = useState(false);


  useEffect(
      listenForOutsideClicks(listening, setListening, menuRef, setOpen)
    );

  function handleOnClick(item) {
    if (!selection.some(current => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        current => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  }

  const isItemInSelection = (item) => {
    if (selection.some(current => current.id === item.id)) {
      return true;
    }
    return false;
  }

  return (
    <div className="dd-wrapper">
      <div
       ref={menuRef}
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle()}
        onClick={() => toggle()}
      >
        <div className="dd-header__title">
          <p className="dd-header__title--bold">{title}</p>
        </div>
        <div className="dd-header__action">
          <p>{open ? <Icon name="angle up" /> : <Icon name="angle down" />}</p>
        </div>
      </div>
      {open && (
        <ul className="dd-list">
          {items.map(item => (
            <li className="dd-list-item" key={item.id}>
              <button type="button" onClick={() => onChange(item)}>
                <span>{item.value}</span>
                <span>{isItemInSelection(item) && 'Selected'}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


export default (Dropdown);