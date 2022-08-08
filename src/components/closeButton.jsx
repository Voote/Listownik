const CloseButton = ({ closeLabel, handleClose, isCropped }) => {
  const checkClassName = `modal__exit modal__exit--${
    isCropped ? 'card' : 'section'
  }`;

  return (
    <button className={checkClassName} onClick={handleClose}>
      {closeLabel}
    </button>
  );
};

export default CloseButton;
