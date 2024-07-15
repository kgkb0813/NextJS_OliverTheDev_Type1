// import { createTodo } from '@/actions'
import * as actions from '@/actions'
import React from 'react'
import Form from '../form/Form'
import Input from '../input/Input'
import Button from '../button/Button'

const AddTodo = () => {
  return (
    <div>
      <Form action={actions.createTodo}>
        <div className='flex gap-4 itemsce'>
          <Input name='input' type='text' placeholder='Add Todo Here ...'/>
          <Button type='submit' text='Add' bgColor='bg-blue-600' />
        </div>
      </Form>
    </div>
  )
}

export default AddTodo