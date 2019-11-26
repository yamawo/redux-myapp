import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { readEvents } from '../actions'

const EventsIndex = (props) => {

  useEffect(() => {
      props.readEvents()
  }, []);

  const renderEvents = () => {
    return _.map(props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>

      <tbody>
        {renderEvents()}
      </tbody>
    </table>
  );
}

const mapStateToProps = state => ({ events: state.events }) // このコンポーネントに必要なstateを抽出して、propsとしてマッピングする
const mapDispatchToProps = ({ readEvents })  // reducerにタイプに応じた状態遷移を行わせる

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)

