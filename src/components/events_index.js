import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { readEvents } from '../actions'

const EventsIndex = (props) => {

  useEffect((props) => {
    return () => {
      props.readEvents()
    }
  });

  return (
    <>
      <div>value: { props.value }</div>
      <button onClick={props.increment}>+1</button>
      <button onClick={props.decrement}>-1</button>
    </>
  );
}

const mapStateToProps = state => ({}) // このコンポーネントに必要なstateを抽出して、propsとしてマッピングする
const mapDispatchToProps = ({ readEvents })  // reducerにタイプに応じた状態遷移を行わせる

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)

