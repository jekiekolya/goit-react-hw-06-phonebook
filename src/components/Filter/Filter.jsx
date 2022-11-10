import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import InputField from '../InputField';

const Filter = () => {
  const dispatch = useDispatch();

  const handlerFilterList = e => {
    const inputValue = e.target.value.toLocaleLowerCase();
    dispatch(setFilter(inputValue));
  };

  return (
    <InputField
      nameLabel="Find contacts by name"
      onChange={handlerFilterList}
    />
  );
};

export default Filter;
