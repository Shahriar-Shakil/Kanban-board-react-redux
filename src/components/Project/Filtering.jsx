import { Select } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, selectUser } from "../../redux/features/selectors";
import { clearFilters, setAssignedTo } from "../../redux/features/filterSlice";

export default function Filtering() {
  const users = useSelector(selectUser);
  const filterState = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleFilterChange = (value) => {
    dispatch(setAssignedTo(value));
  };
  return (
    <div>
      <div className="flex flex-col sm:flex-row  items-center gap-2">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Assign to
        </label>
        <div className="mt-1">
          <Select
            onClear={() => dispatch(clearFilters())}
            onChange={handleFilterChange}
            allowClear
            style={{ width: "200px" }}
            value={filterState?.assignedTo}
            // defaultValue={"all"}
            placeholder="All"
          >
            {/* <Select.Option disabled value="all">
              All
            </Select.Option> */}
            {users?.map((item) => (
              <Select.Option key={item.id} value={item.id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
}
