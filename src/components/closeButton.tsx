type CloseButtonProps = {
  closeLabel: string;
  handleClose: () => void;
  isCropped: boolean;
};

const CloseButton = ({
  closeLabel,
  handleClose,
  isCropped
}: CloseButtonProps) => {
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
