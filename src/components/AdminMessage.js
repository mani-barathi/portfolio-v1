import { Typography, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { db } from "../firebase";

export default function AdminMessage({ id, data }) {
  const deleteMessage = () => {
    if (window.confirm("Do You want to Delete this Message?"))
      db.collection("messages").doc(id).delete();
  };

  return (
    <div className="adminpage__message">
      <div className="adminpage__messageHeader">
        <div>
          <Typography variant="h6">{data.name}</Typography>
          <Typography variant="subtitle2">{data.email}</Typography>
        </div>
        <IconButton color="secondary" onClick={() => deleteMessage()}>
          <DeleteIcon />
        </IconButton>
      </div>
      <Typography variant="subtitle1">{data.text}</Typography>
      <Typography variant="caption" display="block" align="right">
        {data.timestamp.toDate().toDateString()}
      </Typography>
    </div>
  );
}
