import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function SummaryForm() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={isChecked}
          onChange={handleChangeCheckbox}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!isChecked}>
        Confirm order
      </Button>
    </Form>
  );
}

export default SummaryForm;

const popover = (
  <Popover id="popover-basic">
    <Popover.Body>No ice cream will actually be delivered</Popover.Body>
  </Popover>
);

const checkboxLabel = (
  <span>
    I agree to
    <OverlayTrigger placement="right" overlay={popover}>
      <span style={{ color: "blue" }}>Terms and Conditions</span>
    </OverlayTrigger>
  </span>
);
