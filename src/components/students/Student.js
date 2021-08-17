import { Paper, Typography, Button } from "@material-ui/core";
import { studentSelector } from "../../redux/features/studentSlice";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
const Student = () => {
  const { id } = useParams();
  const history = useHistory();
  const studentData = useSelector((state) =>
    studentSelector.selectById(state, id)
  );
  const { firstName, lastName, phone, email, address } = studentData;

  return (
    <Paper>
      <Typography variant="h2" gutterBottom>
        {firstName} {lastName}
      </Typography>

      <Typography variant="h5" gutterBottom>
        {phone}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {email}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {address}
      </Typography>
      <Button
        onClick={() => history.goBack()}
        variant="contained"
        color="primary"
      >
        Back
      </Button>
    </Paper>
  );
};

export default Student;
