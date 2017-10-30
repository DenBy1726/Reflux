import Reflux from "reflux";
import Actions from "./Actions.js";

class PhonesStore extends Reflux.Store {
    constructor()
    {
        console.log("PhonesStore constructor");

        super();
        this.state = {phones: ["iPhone 7", "Samsung Galaxy S8"]};

        this.listenTo(Actions.addItem, this.onAddItem);
        this.listenTo(Actions.removeItem, this.onRemoveItem);
    }

    onAddItem(phone){
        console.log("PhonesStore onAddItem");

        this.state.phones.push(phone);
    }

    onRemoveItem(phone){
        console.log("PhonesStore onRemoveItem");

        let data = this.state.phones;
        let index = data.indexOf(phone);
        if (index > -1) {
            data.splice(index, 1);
            this.setState({phones: data});
        }
    }
}

export default PhonesStore;