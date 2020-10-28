import React from 'react';
import useForm from '../../hooks/use-form';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import CoinList from "../coin-list";


const SearchList = () => {


  const { values, handlers } = useForm({id:0});

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Control
                placeholder={"Search"  }
                {...handlers.id}
            />
        </Form.Group>
      </Form>
        {values.id ? (
            <CoinList find={values.id} searchFlag={true}/>

        ):null}

    </div>
  );
};


export default connect(null, {})(SearchList);
