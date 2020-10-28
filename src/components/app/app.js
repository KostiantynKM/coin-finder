import React, {useEffect} from 'react';
import CoinList from "../coin-list";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {coinsLoadedSelector, coinsLoadingSelector} from "../../redux/selectors";
import {loadCoins} from "../../redux/actions";
import Loader from "../loader";
import CoinSearch from "../coin-search";

const App = ({loading, loaded, loadCoins}) => {
    useEffect(() => {
        if (!loading && !loaded) loadCoins();
    }, []); // eslint-disable-line

    if (loading || !loaded) return <Loader />;
  return (
      <Container>
          <Row>
             <CoinList/>
              <CoinSearch/>
              <CoinList flagUserList={true}/>
          </Row>
      </Container>
  );
};

export default connect(
    createStructuredSelector({
        loading: coinsLoadingSelector,
        loaded: coinsLoadedSelector,
    }),
    { loadCoins }
)(App);
