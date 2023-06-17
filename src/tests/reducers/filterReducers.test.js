import moment from "moment"
import filterReducer from "../../reducers/filtersReducers"

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

test('should set up default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual(filterReducerDefaultState)
})

test('should sort by date', () => {
    const state = filterReducer({...filterReducerDefaultState , sortBy: 'amount'}, { type: "SORT_BY_DATE" })
    expect(state.sortBy).toBe('date')
})

test('should sort by amount', () => {
    const state = filterReducer(undefined, { type: "SORT_BY_AMOUNT" })
    expect(state.sortBy).toBe('amount')
})

test('should set start date', () => {
    const state = filterReducer(undefined, { type: "SET_START_DATE", date: moment(456) })
    expect(state.startDate).toEqual(moment(456))
})

test('should set end date', () => {
    const state = filterReducer(undefined, { type: "SET_END_DATE", date: moment(456) })
    expect(state.endDate).toEqual(moment(456))
})

test('should set text filter', () => {
    const state = filterReducer(undefined, { type: "SET_TEXT_FILTER", text: "Rent" })
    expect(state.text).toBe("Rent")
})