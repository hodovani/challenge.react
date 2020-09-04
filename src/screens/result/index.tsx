import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { fetchName } from '@redux/actions';

const Result: React.FC<any> = props => {
  const [fetching, setFetching] = useState(true);
  const nameList = useSelector((state: IReducerStates) => state.nameList);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await setFetching(true);

      try {
        await dispatch(fetchName(props.match.params.name));
      } catch (error) {
        console.log(error);
      }

      setFetching(false);
    })();
  }, [dispatch, props.match.params.name]);

  if (fetching && nameList.length === 0) return <Spin />;
  return (
    <>
      <div>You entered: {nameList[0].name}</div>
      <div id="result-description">
        Description: {nameList[0].name} is a {nameList[0].gender} name from the {nameList[0].nation}
      </div>
    </>
  );
};

export default Result;
