import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilters, sendFilters } from "../../../../Redux/Actions/Actions";

const Filter = () => {
  const dispatch = useDispatch();
  const filtersList = useSelector((state) => state.filters.filterList);
  useEffect(() => {
    dispatch(fetchFilters());
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="row my-5">
        <div className="col-12 mx-auto">
          <p className="fs-4 my-2 fw-bold category">Categories</p>
          {filtersList &&
            filtersList.map((item) => {
              const { id, name } = item;
              return (
                <div className="form-check" key={id}>
                  <input
                    defaultChecked={id === 1}
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id={id}
                    onChange={() => dispatch(sendFilters({ id, name }))}
                  />
                  <label className="form-check-label" htmlFor={id}>
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </label>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Filter;

// ===================================
