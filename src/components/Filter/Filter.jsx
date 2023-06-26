import React from "react";
import { FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "redux/selector";
import {changeFilter} from '../../redux/FilterSlice'

export const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    const handleChangeFilter = (event) => {
        dispatch(changeFilter(event.currentTarget.value.toLowerCase()));
  };
    return (
        <FilterLabel>
            Find contacts by name
            <FilterInput
                type="text"
                name="filter"
                placeholder="Enter name"
                value={filter}
                onChange={handleChangeFilter}
            />
        </FilterLabel>
    )
}

