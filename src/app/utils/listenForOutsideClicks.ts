export default function listenForOutsideClicks(
    listening,
    setListening,
    menuRef,
    setIsOpen
  ) {
    return () => {
      if(listening === false && menuRef.current !== null)
      {
        setListening(true);
        [`click`, `touchstart`].forEach((type) => {
          document.addEventListener(`click`, (evt) => {
            const cur = menuRef.current;
            const node = evt.target;
            if (cur && cur.contains(node)) return;
            setIsOpen(false);
          });
        });
      }
     
    };
  }