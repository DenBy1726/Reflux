import React from 'react';
import Reflux from 'reflux';
import Actions from './Actions';
import PhonesStore from './PhoneStore';


class PhonesList extends Reflux.Component{

    constructor(props){
        console.log("PhonesList constructor");

        super(props);
        this.state = {newItem: ""};
        this.store = PhonesStore;

        this.onInputChange = this.onInputChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onInputChange(e){
        console.log("PhonesList onInputChange");

        this.setState({newItem:e.target.value});
    }
    onClick(e){
        console.log("PhonesList onClick");

        if(this.state.newItem){
            Actions.addItem(this.state.newItem);
            this.setState({newItem:" "});
        }
    }

    onRemove(item){
        console.log("PhonesList onRemove");

        if(item){
            Actions.removeItem(item);
        }
    }

    render(){
        console.log("PhonesList render");

        let remove = this.onRemove;
        return <div>
            <input type="text" value={this.state.newItem} onChange={this.onInputChange} />
            <button onClick={this.onClick}>Добавить</button>
            <h2>Список смартфонов</h2>
            <div>
                {
                    this.state.phones.map(function(item){

                        return <Phone key={item} text={item} onRemove={remove} />
                    })
                }
            </div>
        </div>;
    }
}

class Phone extends React.Component{

    constructor(props){
        console.log("Phone constructor");

        super(props);
        this.state = {text: props.text};
        this.onClick = this.onClick.bind(this);
    }
    onClick(e){
        console.log("Phone onClick");

        this.props.onRemove(this.state.text);
    }
    render(){
        console.log("Phone render");

        return <div>
            <p>
                <b>{this.state.text}</b><br />
                <button onClick={this.onClick}>Удалить</button>
            </p>
        </div>;
    }
}

export default PhonesList;