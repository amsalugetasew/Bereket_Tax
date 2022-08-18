import './App.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
// const initialState = {
//   name: "",
//   item: ""
// }
var user = { name: 'John Doe', occupation: 'gardener', dob: new Date('1992-12-31') };
function App() {
  const [name, setName] = useState('');
  const {register, watch, handleSubmit,formState: { errors },} = useForm();
  
  var s = { name: 'John Doe', occupation: 'gardener', dob: new Date('1992-12-31') };
  const onSubmit =(data) => alert(JSON.stringify(data, null, 4));
  

  // const onSubmit = (data) => alert(JSON.stringify(data));
  const selectAll = watch('selectAll');
  const selectAllRecurring= watch('selectAllRecurring');
  return (
    <div className="App">
      <p className='Add_tax'>add tax</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex-col'>
          <div className='flex-row'>
            <input type="text" placeholder='Tax Name'
            name='firstName'
            id='name'
            onChange={e => setName(e.target.value)}
            value={name || ""}
            // {...register('name', {required: {
            // }})}
             />
            <input type="number" value='5' placeholder='%'
            {...register('rate', {required: {
            }})}
             />
          </div>
          <div className='flex-row'>
            <div className='container'>
              <input type="radio" value="all" name="item" className='radio' checked /><label>Apply to all items in collection</label>
            </div>
          </div>
          <div className='flex-row'>
            <input type="radio" value="some" name="item" className='radio' /><label>Apply to specific items</label>
          </div>

        </div>
        {/* <div><input type="text" placeholder='Tax Name' /></div> */}
        <div>

          {/* For Bracelt */}
          <div className='checkBox'>
            <div className='flex-row' id='main'>
              <input type="checkbox"
              {...register('selectAll', {required: {
              }})}
               />
              <p>Bracelets</p>
            </div>
            <div className='subCheckBox'>
              <div className='flex-row'>
                <input type="checkbox" 
                checked={selectAll}
                value="14865"
                {...register('14865', {required: {
                }})}
                />
                <p>Jasinthe Bracelet</p>
              </div>
              <div className='flex-row'>
                <input type="checkbox"
                {...register('14867', {required: {
                }})}
                checked={selectAll} />
                <p>Jasinthe Bracelet</p>
              </div>
              <div className='flex-row'>
                <input type="checkbox"
                {...register('14870', {required: {
                }})}
                checked={selectAll}
                 />
                <p>Inspire Bracelet</p>
              </div>
            </div>

              {/* for Recurring */}
            <div className='checkBox'>
            <div className='flex-row' id='main'>
            <input type="checkbox"
            {...register('selectAllRecurring', {required: {
            }})}
            />
            </div>
            <div className='subCheckBox'>
              <div className='flex-row'>
                <input type="checkbox"
                {...register('14864', {required: {
                }})}
                checked={selectAllRecurring}
                 />
                <p>Recurring Item</p>
              </div>
              <div className='flex-row'>
                <input type="checkbox"
                 {...register('14868', {required: {
                }})}
                checked={selectAllRecurring}
                 />
                <p>Recurring Item with questions</p>
              </div>
              <div className='flex-row'>
                <input type="checkbox"
                 {...register('14869', {required: {
                }})}
                checked={selectAllRecurring}
                 />
                <p>Zero amount item with questions</p>
              </div>
              <div className='flex-row'>
                <input type="checkbox"
                 {...register('14872', {required: {
                }})}
                checked={selectAllRecurring}
                 />
                <p>Normal item with questions</p>
              </div>
              <div className='flex-row'>
                <input type="checkbox"
                {...register('14873', {required: {
                }})}
                checked={selectAllRecurring}
                 />
                <p>normal item</p>
              </div>
            </div>
          </div>

          </div>
        </div>
        <div className='Err_message'>{errors.item && <p>{errors.item.message}</p>}</div>
        <div className='button'>
          <input type="submit" value='Apply tax to x item(s)' />
        </div>
      </form>
    </div>
  );
}

export default App;
