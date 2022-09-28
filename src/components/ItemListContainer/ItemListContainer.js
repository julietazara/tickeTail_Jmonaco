export const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <ul class="list-group">
                <li class="list-group-item">{greeting}</li>

                <li class="list-group-item list-group-item-primary">Ticket 1 </li>
                <li class="list-group-item list-group-item-secondary">Ticket 2</li>
                <li class="list-group-item list-group-item-success">Ticket 3</li>
                <li class="list-group-item list-group-item-danger">Ticket 4</li>
            </ul>
            
        </div>
    );
}