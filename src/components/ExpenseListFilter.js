import React, { useState } from "react";
import { connect } from "react-redux";
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from "../actions/filtersActions";
import { DateRangePicker } from "react-dates";


export const ExpenseListFilter = (props) => {
    const [calendarFocused, setCalendarFocused] = useState(null)
    const handleOnTextChange = (e) => {
        props.setTextFilter(e.target.value)
    }

    const handleOnSortChange = (e) => {
        (e.target.value === "date") ? props.sortByDate() : props.sortByAmount()
    }
    const onDatesChange = ({ startDate, endDate }) => {
        props.setStartDate(startDate)
        props.setEndDate(endDate)
    }
    return (
        <div>
            <input type="text" value={props.filters.text} onChange={handleOnTextChange}></input>
            <label>Sort By</label>
            <select onChange={handleOnSortChange} value={props.filters.sortBy}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>

            <DateRangePicker
                startDate={props.filters.startDate}
                endDate={props.filters.endDate}
                onDatesChange={onDatesChange}
                focusedInput={calendarFocused}
                onFocusChange={(focused) => setCalendarFocused(focused)}
                isOutsideRange={() => false}
                showClearDates={true}
                numberOfMonths={1}
            />
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTextFilter : (text) => dispatch(setTextFilter(text)),
        sortByDate : () => dispatch(sortByDate()),
        sortByAmount: () => dispatch(sortByAmount()),
        setStartDate : (startDate) => dispatch(setStartDate(startDate)),
        setEndDate : (endDate) => dispatch(setEndDate(endDate))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter);