import React , {useState} from 'react';
import { connect } from 'react-redux';
import {sort} from "../../redux/actions";
import SearchList from "../search-list";
import { PRICE , CHANGE } from '../../redux/constants';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';

function CoinSearch({
                        sort,
                         }) {
    const [checked, setChecked] = useState(false);
    const onChange = (ev) => {
        setChecked({[ev.target.value]:true})
        sort(ev.target.value)
    }
return (
    <Col>
        <h2 className="text-center">
            <Badge  variant="light">Search</Badge>
        </h2>
        <ButtonGroup toggle>
                <ToggleButton
                    type="radio"
                    variant="secondary"
                    name="radio"
                    checked={checked[PRICE]}
                    value={PRICE}
                    size="sm"
                    onChange={onChange}
                >
                    sort by price
                </ToggleButton>
                <ToggleButton
                    size="sm"
                    type="radio"
                    variant="secondary"
                    name="radio"
                    checked={checked[CHANGE]}
                    value={CHANGE}
                    onChange={onChange}
                >
                    sort by change
                </ToggleButton>
        </ButtonGroup>
        <SearchList/>
    </Col>
)
}

export default connect(
   null,{sort}
)(React.memo(CoinSearch));

