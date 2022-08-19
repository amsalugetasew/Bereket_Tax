import React, { useState, useEffect } from "react";
import Checkbox from "./Checkbox";
import { Catalogues } from "./mock";
import { Catalogues1 } from "./mock";
import './App.css';
const CheckedAll = () => {
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheckAll1, setIsCheckAll1] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [isCheck1, setIsCheck1] = useState([]);
    const [list, setList] = useState([]);
    const [secList, setSecList] = useState([]);
    const [items, setItems] = React.useState('all');
    const [data, setData] = useState({
        name: "",
        tax: '',
        item: false
    });

    const handleChange = (event) => {
        setItems(event.target.value)
    }
    useEffect(() => {
        setList(Catalogues);
        setSecList(Catalogues1)
    }, [list, secList]);

    const handleSelectAll = e => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(list.map(li => li.id));
        if (isCheckAll) {
            setIsCheck([]);
        }
    };

    const handleSelectAll1 = e => {
        setIsCheckAll1(!isCheckAll1);
        setIsCheck1(secList.map(li => li.id));
        if (isCheckAll1) {
            setIsCheck1([]);
        }
    };

    const handleClick = e => {
        const { id, checked } = e.target;
        setIsCheck([...isCheck, id]);
        if (!checked) {
            setIsCheck(isCheck.filter(item => item !== id));
        }
    };

    const handleClick1 = e => {
        const { id, checked } = e.target;
        setIsCheck1([...isCheck1, id]);
        if (!checked) {
            setIsCheck1(isCheck1.filter(item => item !== id));
        }
    };
    const changeName = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        var name = data.name
        var rate = data.tax
        var applied_to = items
        rate = rate / 100;
        var nv = { applied_to, name, rate }
        var names = JSON.stringify(nv, null, 4)
        var aplicable_aitems = { isCheck1, isCheck }
        aplicable_aitems=JSON.stringify(aplicable_aitems, null, 4)
        alert(JSON.stringify(isCheck,null,4,['KEY'])+JSON.stringify(isCheck1,null,4,['KEY']))
        alert("aplicable_aitems:" + aplicable_aitems+ "," + names)
    }
    const catalog = list.map(({ id, name }) => {
        return (
            <>     
            <div className='flex-row'>
                <label className="main" id="sub">
            <Checkbox
                key={id}
                type="checkbox"
                name={name}
                id={id}
                handleClick={handleClick}
                isChecked={isCheck.includes(id)}
            />
                {name}
                <span className="Bracelets"></span>
                                        </label>
                                    </div>
            </>
        );
    });


    const catalog1 = secList.map(({ id, name }) => {
        return (
            <>
            <label className="main" id="sub">
                <Checkbox
                    key={id}
                    type="checkbox"
                    name={name}
                    id={id}
                    handleClick={handleClick1}
                    isChecked={isCheck1.includes(id)}
                />
                {name}
                <span className="Bracelets">

                </span>  </label>

            </>
        );
    });

    return (
        <div id="all">
            <p className='Add_tax' id='Add_tax'>add tax</p>
            <form onSubmit={handleSubmit}>
                <input type="text" id='name'
                    name='name'
                    placeholder='Tax name'
                    value={data.name}
                    onChange={changeName}
                />
                <input type="number"
                    name='tax'
                    step="1"
                    value={data.tax}
                    onChange={changeName}
                    required
                />

                <div className='flex-row'>
                <div className='container'>
                <label className="radio">
                    <input
                        type="radio"
                        value="all"
                        checked={items === 'all'}
                        onChange={handleChange}
                    /> Apply to all items in collection
                    <span className="radios"></span>
                                        </label>
                </div>
                </div>
                <div className='flex-row'>
                <div className='container'>
                <label className="radio">
                    <input
                        type="radio"
                        value="some"
                        checked={items === 'some'}
                        onChange={handleChange}
                    /> Apply to specific items
                    <span className="radios"></span>
                                        </label>
                </div>
                </div>
                <hr className="new5" />




                <div className='checkBox'>
                        <div className='flex-row' id='main'>
                    <label className="main">Bracelets
                    <Checkbox className='flex-row' id='main'
                        type="checkbox"
                        name="selectAll"
                        handleClick={handleSelectAll}
                        isChecked={isCheckAll}
                    />
                    <span className="Bracelets"></span>
                </label>
                </div>
                </div>
                {catalog}

                <div className='checkBox'>
                            <div className='flex-row' id='main'>
                                <label className="main">
                    <Checkbox className='flex-row' id='main'
                        type="checkbox"
                        name="selectAll"
                        handleClick={handleSelectAll1}
                        isChecked={isCheckAll1}
                    />
                     <span className="Bracelets"></span>
                                </label>
                            </div>
                {catalog1}
                </div>
                <div className='button'>
                    <input type="submit" value='Apply tax to x item(s)' />
                </div>
            </form>
        </div>


    );
};


export default CheckedAll

