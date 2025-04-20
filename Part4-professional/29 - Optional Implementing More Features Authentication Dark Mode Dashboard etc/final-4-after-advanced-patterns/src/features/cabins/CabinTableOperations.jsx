import TableOperations from '../../ui/TableOperations';
import Filter from '../../ui/Filter';
import SortBy from '../../ui/sortBy';

function CabinTableOperations(){
    return (<TableOperations>
        <Filter filterrField={'discount'} options={[
            {value: 'all', label: 'All'},
            {value: 'no-discount', label: 'No discount'},
            {value: 'with-discount', label: 'With discount'},
        ]}/>
        <SortBy options={[
            {value: 'name-asc',label: 'Sort by Name (A-Z)'},
            {value: 'name-desc',label: 'Sort by Name (Z-A)'},
            {value: 'regylarPrice-asc',label: 'Sort by price (low first)'},
            {value: 'regylarPrice-desc',label: 'Sort by Name (high first)'},
            {value: 'maxCapacity-asc',label: 'Sort by Capacity (low first)'},
            {value: 'maxCapacity-desc',label: 'Sort by Capacity (high first)'},
        ]}/>
    </TableOperations>);
}

export default CabinTableOperations;