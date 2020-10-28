import React, {useEffect} from 'react';
import {coinsIdSelector, findMatchesSelector,userCoinsLoadedSelector, userCoinsSelector} from "../../redux/selectors";
import { connect } from 'react-redux';
import Coin from "../coin";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import animationStyles from "./coin-animation.module.css";
import Badge from "react-bootstrap/Badge";
import Col from 'react-bootstrap/Col';
import {loadUserCoins} from "../../redux/actions";

const CoinList = ({
                      coins,
                      searchFlag,
                      flagUserList,
                      loaded,
                      loadUserCoins,
                         }) => {
    useEffect(() => {
        if ( flagUserList && !loaded ) {loadUserCoins()}
    }, []); // eslint-disable-line

    if (flagUserList){
    return (
        <Col>
            <h2 className="text-center">
                <Badge  variant="light">User List</Badge>
            </h2>
            <TransitionGroup>
                {coins.map((id,index) => (
                    <CSSTransition key={id} timeout={200} classNames={animationStyles}>
                        <Coin key={id} id={id} index={index} flagUserList={true}/>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </Col>
    )
}
return (
    <Col>
        {!searchFlag ? (
                <h2 className="text-center">
                    <Badge  variant="light">TOP 100</Badge>
                </h2>
        ):null}

        {coins.map((id) => (
                <Coin key={id} id={id} searchFlag={searchFlag}/>
        ))}
    </Col>
)
}


const mapStateToProps = (state,props) => {
    if(props.searchFlag){
        return {
            coins: findMatchesSelector(state,props)
        }
    }
    if(props.flagUserList){
        return {
            coins: userCoinsSelector(state,props),
            loaded: userCoinsLoadedSelector(state),
        }
    }
    return {
        coins: coinsIdSelector(state,props),
    }
}

export default connect(
    mapStateToProps,{ loadUserCoins }
)(React.memo(CoinList));

