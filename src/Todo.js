import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import './Todo.css'
import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import db from './firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Modal from '@material-ui/core/Modal';
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));


function Todo(props) {
    const classes = useStyles()
    const [open ,setOpen]=useState(false)
    const [input,setInput] = useState()
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const updateTodo=()=>{
          
    db.collection('todo').doc(props.text.id).set({
        todo:input
    },{merge:true}) ;

        setOpen(false) 
      }
    return (
        <div>
        <Modal
        open={open}
        onClose={handleClose}
        >
            <div className={classes.paper}>
                <h1>I am a modal</h1>
        <form>
                <input placeholder={props.text.todo} type='text' value={input} onChange={e=>setInput(e.target.value)}></input>
                <Button onClick={updateTodo}>Update todo</Button>
         </form>
            </div>
        </Modal>
            <List className='todo__list'>
                <ListItem>
                    <ListItemAvatar>

                    </ListItemAvatar>
                    <ListItemText primary={props.text.todo} secondary="Dummy Deadline ⏰ " />
                </ListItem>
                <Button onClick={e=>setOpen(true)}>Edit</Button>
                <DeleteForeverIcon onClick={event=> db.collection('todo').doc(props.text.id).delete()}/>
            </List>
         
        </div>
    )
}

export default Todo
