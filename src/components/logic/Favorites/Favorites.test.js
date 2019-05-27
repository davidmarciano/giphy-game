import * as actionsAndTypes from './actions';
const { ADD_CATEGORY, addCategory, REMOVE_CATEGORY, removeCategory, ADD_ITEM, addItem, REMOVE_ITEM, removeItem } = actionsAndTypes;

describe('actions', () => {
    it('should add favorites category', () => {
        const payload = "bbc";
        const expectedAction = {
            type: ADD_CATEGORY,
            payload
        }
        expect(addCategory(payload)).toEqual(expectedAction);
    })
    it('should remove favorites category', () => {
      const payload = "bbc";
      const expectedAction = {
          type: REMOVE_CATEGORY,
          payload
      }
      expect(removeCategory(payload)).toEqual(expectedAction);
    })   
    it('should add item to relevant favorites category', () => {
      const searchKeyword = "bbc";
      const itemData = {
        title: "jumping david attenborough GIF by BBC Earth",
        image: "https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/200_s.gif",
        link: "https://giphy.com/gifs/bbcearth-earth-bbc-thehunt-1iTHHR8KaiDyhkHe"        
      };
      const payload = {searchKeyword,itemData};
      const expectedAction = {
          type: ADD_ITEM,
          payload
      }
      expect(addItem(searchKeyword,itemData)).toEqual(expectedAction);
    }) 
    it('should remove item from relevant favorites category', () => {
      const searchKeyword = "bbc";
      const itemIndex = 1;
      const payload = {searchKeyword,itemIndex};
      const expectedAction = {
          type: REMOVE_ITEM,
          payload
      }
      expect(removeItem(searchKeyword,itemIndex)).toEqual(expectedAction);
    })
});
