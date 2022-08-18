import './App.css';

function App() {
  return (
    <div className="App">
      <p className='Add_tax'>add tax</p>
      <form>
        <div className='flex-col'>
          <div className='flex-row'>
            <input type="text" placeholder='Tax Name' />
            <input type="number" value='5' placeholder='%' />
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
        <div><input type="text" placeholder='Tax Name' /></div>
        <div>

          {/* For Bracelt */}
          <div className='checkBox'>
            <div className='flex-row'>
              <input type="checkbox" />
              <p>Bracelets</p>
            </div>
            <div className='subCheckBox'>
              <div className='flex-row'>
                <input type="checkbox" />
                <p>Apply to all items in collection</p>
              </div>
              <div className='flex-row'>
                <input type="checkbox" />
                <p>Apply to all items in collection</p>
              </div>
              <div className='flex-row'>
                <input type="checkbox" />
                <p>Apply to all items in collection</p>
              </div>
            </div>

              {/* for Recuring */}
            <div className='checkBox'>
            <div className='flex-row'>
            <input type="checkbox" />
              <p>Apply to all items in collection</p>
            </div>
            <div className='subCheckBox'>
              <div className='flex-row'>
                <input type="checkbox" />
                <p>Apply to all items in collection</p>
              </div>
              <div className='flex-row'>
                <input type="checkbox" />
                <p>Apply to all items in collection</p>
              </div>
              <div className='flex-row'>
                <input type="checkbox" />
                <p>Apply to all items in collection</p>
              </div>
            </div>
          </div>

          </div>
        </div>
        <div className='button'>
          <input type="submit" value='Apply tax to x item(s)' />
        </div>
      </form>
    </div>
  );
}

export default App;
