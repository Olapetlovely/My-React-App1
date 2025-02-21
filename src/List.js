
import propTypes from "prop-types";

const List = (props) => {
    const category = props.category;
    const itemList = props.items;

    itemList.sort((a, b) => a.name.localeCompare(b.name));

    const listItems = itemList.map(item => <li key={item.id}>{item.name}:  &nbsp;<b>{item.calories}</b></li>);

    return (<div className="items-list-wrapper">
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
    </div>
    )
}
List.propTypes = {
    category: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({id: propTypes.number, name: propTypes.string, calories: propTypes.number})),
};

List.defaultProps = {
    category: "Category",
    items: [],
}

export default List