import React, { Component } from 'react'
import './App.css';
var userData = [{ name: 'Jasinthe Bracelet', value:'14865' }, { name: 'Jasinthe Bracelet', value:'14867' }, { name: 'Inspire Bracelet', value:'14870' }]
var userData1 = [{ name: 'Recurring Item', value:'14864' }, { name: 'Recurring Item with questions', value:"14868" }, { name: 'Zero amount item with questions', value:"14869" }, { name: 'Normal item with questions', value:"14872" }, { name: 'normal item', value: "14873"}]
export class Multiple extends Component {
    state = {
        itemNames: {
            item: false,
            14865: false,
            14867: false,
            14870: false,
        },
    }


    chkclick = (e) => {
        var { name, value } = e.target;
        this.setState((e) => {
            var selectedItems = e.itemNames;
            return selectedItems[value] = name;
        })
    }

    render() {


        var displayItems = Object.keys(this.state.itemNames).filter((x) => this.state.itemNames[x]);
        const handleSubmit = (e) => {
            e.preventDefault();
            alert(JSON.stringify(displayItems, null, 4, function (key, value) {
                if (key === "name") {
                    return [value];
                } else {
                    return value;
                }
            }));
        }

        return (
            <div id='all'>
                <p className='Add_tax' id='Add_tax'>add tax</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Tax Name'
                        name='name'
                        id='name'
                        value={this.setState(this.name)}
                        onChange={this.chkclick}
                    />
                    <input type="number"
                        name='tax'
                        step="1"
                        placeholder='%'
                        onChange={this.chkclick}
                    />

                    <div className='flex-row'>
                        <div className='container'>
                            <label className="radio">Apply to all items in collection
                                <input type="radio"
                                    value="all"
                                    name="item"
                                    checked
                                    onChange={this.chkclick}
                                    className='radio'
                                />
                                <span className="radios"></span>
                            </label>
                        </div>
                    </div>
                    <div className='flex-row'>
                        <label className="radio">Apply to specific items
                            <input type="radio"
                                value="some"
                                name="item"
                                onChange={this.chkclick}
                                className='radio'

                            />
                            <span className="radios"></span>
                        </label>
                    </div>
                    <hr className="new5" />
                    {/* For Bracelt */}
                    <div className='checkBox'>
                        <div className='flex-row' id='main'>

                            <label className="main">Bracelets
                                <input type="checkbox"
                                name='allFirst'

                                />
                                <span className="Bracelets"></span>
                            </label>
                        </div>
                        {userData.map((user)=>{
                return(
                <div className='flex-row'>
                <label className="main">{user.name}
                    <input type="checkbox"
                        name={user.name}
                        onChange={this.chkclick}
                        value={user.value}
                    />
                    <span className="Bracelets"></span>
                </label>
            </div>);
            })}

                        {/* for Recurring */}
                        <div className='checkBox'>
                            <div className='flex-row' id='main'>
                                <label className="main">
                                    <input type="checkbox"
                                    // name='all4first'
                                    />
                                    <span className="Bracelets"></span>
                                </label>
                            </div>
                            {userData1.map((user) => {
                                return (
                                    <div className='flex-row'>
                                        <label className="main">{user.name}
                                            <input type="checkbox"
                                                name={user.name}
                                                value={user.value}
                                                onChange={this.chkclick}
                                            />
                                            <span className="Bracelets"></span>
                                        </label>
                                    </div>);
                            })}
                        </div>
                    </div>
                    {/* <div className='Err_message'>{errors.item && <p>{errors.item.message}</p>}</div> */}
                    <div className='button'>
                        <input type="submit" value='Apply tax to x item(s)' />
                    </div>
                </form>
                {displayItems}
            </div>
        )
    }
}

export default Multiple
