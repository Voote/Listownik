import { Button } from '@mui/material';
import { ColorType } from './toggle';

type ToggleButtonType = {
  label: string;
  color?: ColorType | any;
  func: any;
};

const ToggleButton = ({ label, color, func }: ToggleButtonType) => (
  <Button
    sx={{ p: 0.4 }}
    size="small"
    variant="contained"
    color={color}
    className="button"
    onClick={() => func(label)}
  >
    {label}
  </Button>
);

export default ToggleButton;
