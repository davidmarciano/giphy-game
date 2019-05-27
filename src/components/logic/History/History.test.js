import * as actionsAndTypes from './actions';
import reducer from './reducers';

const { ADD_ITEM, addHistoryItem, REMOVE_ITEM, removeHistoryItem } = actionsAndTypes;

describe('actions', () => {
    it('should add new history item', () => {
      const payload = 'nba';
      const expectedAction = {
          type: ADD_ITEM,
          payload
      };
      expect(addHistoryItem(payload)).toEqual(expectedAction);
    });
    it('should remove item from history', () => {
      const payload = 'nba';
      const expectedAction = {
          type: REMOVE_ITEM,
          payload
      }
      expect(removeHistoryItem(payload)).toEqual(expectedAction);
    });    
});

describe('History reducer', () => {
  it('should return the initial state',() => {
    expect(reducer([],{})).toEqual([]);
  });
  it('should handle ADD_ITEM', () => {
    const payload = 'nba';
    const action = {
      type: ADD_ITEM,
      payload
    };
    expect(reducer([],action)).toEqual([payload]);
  });
  it('should handle REMOVE_ITEM', () => {
    const payload = 'nba';
    const action = {
      type: REMOVE_ITEM,
      payload
    };
    expect(reducer([payload],action)).toEqual([]);
  });  
}); 

