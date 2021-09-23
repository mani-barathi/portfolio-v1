import { Typography, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { db } from "../firebase";

export default function AdminMessage({ id, data, deleteMessage }) {
  const handleDeleteMessage = () => {
    if (window.confirm("Do You want to Delete this Message?")) {
      db.collection("messages")
        .doc(id)
        .delete()
        .then(() => {
          deleteMessage(id);
        });
    }
  };

  return (
    <div className="adminpage__message">
      <div className="adminpage__messageHeader">
        <div>
          <Typography variant="h6">{data.name}</Typography>
          <Typography variant="subtitle2">{data.email}</Typography>
        </div>
        <IconButton color="secondary" onClick={() => handleDeleteMessage()}>
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
