"use client"
import React, {useState} from 'react'
import { MdEdit } from 'react-icons/md';
import Button from '../button/Button';
import Input from '../input/Input';
import Form from '../form/Form';
import { todoProps } from '@/types/input';
import * as actions from '@/actions/index';

const EditTodo = ({todo}: {todo: todoProps}) => {
  const [editTodoState , setEditTodoState] = useState(false);
  const handleEdit = () => {
    if(todo.isCompleted) {
      return;
    }
    setEditTodoState(!editTodoState);
  }
  const handleSubmit = () => { 
    setEditTodoState(false);
  }
  return (
    <div className='flex gap-5 items-center'>
      <Button onClick={handleEdit} text={<MdEdit />} actionButton />
      {
        editTodoState ? (
          <Form action={actions.editTodo} onSubmit={handleSubmit}>
            <Input name="inputId" value={todo.id} type="hidden"></Input>
            <div className='flex justify-center'>
              <Input name="newTitle" type="text" placeholder="Edit Todo ..."></Input>
              <Button type="submit" text="Save" />
            </div>
          </Form>
        ) : null
      }
    </div>
  )
}

export default EditTodo