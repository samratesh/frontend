import { useState } from "react";
import DropZone from "./DropZone";

function Input() {
    let formdata = new FormData();
    
    const [inputList, setInputList] = useState([{ volatility: "50", interestRate: "50" }]);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        formdata.set('scenarios', list);
        setInputList(list);
    }

    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    }

    const handleAddClick = () => {
        setInputList([...inputList, { volatility: "50", interestRate: "50" }]);
    }

    return (
            <>
            <div className="input">
                <div className="file-upload">
                    <DropZone className="Options" />
                    <DropZone className="Portfolio" />
                </div>
                <div className="scenario">
                    <h2>Market Conditions</h2>
                    {inputList.map((x, i) => {
                        return (
                            <>
                            <h3>Condition {i + 1}</h3>
                            <div className="box">
                                <label>Volatility</label>
                                <input
                                    type="range"
                                    defaultValue="0"
                                    min="0"
                                    max="100"
                                    name="volatility"
                                    value={x.volatility}
                                    onChange={e => handleInputChange(e, i)} />
                                <input
                                    type="number"
                                    placeholder={x.volatility}
                                    defaultValue="0"
                                    min="0"
                                    max="100"
                                    name="volatility"
                                    value={x.volatility}
                                    onChange={e => handleInputChange(e, i)} />

                                <label>Interest Rate</label>
                                <input
                                    type="range"
                                    placeholder="Interest Rate"
                                    min="0"
                                    max="100"
                                    name="interestRate"
                                    value={x.interestRate}
                                    onChange={e => handleInputChange(e, i)} />    

                                <input
                                    type="number"
                                    placeholder="Interest Rate"
                                    min="0"
                                    max="100"
                                    name="interestRate"
                                    value={x.interestRate}
                                    onChange={e => handleInputChange(e, i)} />

                                {inputList.length !== 1 && <button
                                    className="mr10"
                                    onClick={() => handleRemoveClick(i)}>Remove Condition</button>}
                            </div></>
                        );
                    })}
                    <button onClick={handleAddClick}>Add Condition</button>
                    <button type="submit" onClick={console.log(formdata)}>Calculate</button>
                </div>
            </div>
            </>
    );
}

export default Input;