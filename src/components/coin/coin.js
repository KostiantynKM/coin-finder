import React, {useState} from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import styles from './coin.module.css';
import {coinSelector} from "../../redux/selectors";
import {addCoin,deleteCoin} from "../../redux/actions";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CSSTransition } from 'react-transition-group';

const Coin = ({ coin, searchFlag, addCoin, deleteCoin, index, flagUserList }) => {
    const [showMessage, setShowMessage] = useState(true);
    if(!coin) return null
    const{ symbol, name, priceUsd } = coin;
    return (
        <CSSTransition
            in={showMessage}
            timeout={300}
            classNames={styles}
            onExited={() => setShowMessage(true)}
        >
              <Card
                  bg={!searchFlag ? 'dark' : null }
                  text={!searchFlag ? 'white' : null }
                  className="mb-2"
              >
                  <Card.Header>{name}</Card.Header>
                  <Card.Body>
                      <Card.Title>{symbol}</Card.Title>
                      <Card.Text>{priceUsd}</Card.Text>
                      {searchFlag && !coin.flag  ? (
                              <Button onClick={() => {
                                  addCoin(coin.name);
                              }} variant="primary">Like</Button>
                      ):null}
                      {coin.flag && searchFlag ? (
                          <Button onClick={() => {
                              addCoin(coin.name);
                              setShowMessage(false);
                          }} variant="success">Like</Button>
                      ):null}
                      {flagUserList ? (
                              <Button onClick={() => deleteCoin(index,coin.name)} variant="danger">Delete</Button>
                      ):null}

                  </Card.Body>
              </Card>
        </CSSTransition>
  );
};


export default connect(
    createStructuredSelector({
        coin: coinSelector,
    }),({ addCoin , deleteCoin })
)(React.memo(Coin));


