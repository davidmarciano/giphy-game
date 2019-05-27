import * as actionsAndTypes from './actions';
import reducer from './reducers';

const { SET_DATA, setGalleryData, ITEM_CLICKED, itemClicked } = actionsAndTypes;

describe('actions', () => {
    it('should set gallery data', () => {
        const payload = [
          {
            title: 'bbc three clique GIF by BBC',
            image: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/200_s.gif',
            link: 'https://giphy.com/gifs/bbc-bbc-three-3-l4FGtHYMx2faI8bo4'
          },
          {
            title: 'jumping david attenborough GIF by BBC Earth',
            image: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/200_s.gif',
            link: 'https://giphy.com/gifs/bbcearth-earth-bbc-thehunt-1iTHHR8KaiDyhkHe'
          },
          {
            title: 'looking david attenborough GIF by BBC Earth',
            image: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/200_s.gif',
            link: 'https://giphy.com/gifs/bbcearth-earth-bbc-thehunt-26tP7vexsaMrS4UpO'
          },
          {
            title: 'david attenborough hello GIF by BBC Earth',
            image: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/200_s.gif',
            link: 'https://giphy.com/gifs/bbcearth-earth-bbc-thehunt-d2Z99CRTQNnEYzmw'
          },
          {
            title: 'bbc glasses GIF',
            image: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/200_s.gif',
            link: 'https://giphy.com/gifs/matt-smith-eleventh-doctor-glasses-sWQLSdcRTcJKU'
          }
        ];
        const expectedAction = {
            type: SET_DATA,
            payload
        }
        expect(setGalleryData(payload)).toEqual(expectedAction);
    })
    it('should click on gallery item',() => {
      const searchKeyword = 'bbc';
      const itemData = {
        title: 'jumping david attenborough GIF by BBC Earth',
        image: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/200_s.gif',
        link: 'https://giphy.com/gifs/bbcearth-earth-bbc-thehunt-1iTHHR8KaiDyhkHe'
      };      
      const payload = {searchKeyword, itemData};
      const expectedAction = {
        type: ITEM_CLICKED,
        payload
      };
      expect(itemClicked(searchKeyword,itemData)).toEqual(expectedAction);      
    });
});

describe('Gallery reducer', () => {
  it('should return the initial state',() => {
    expect(reducer([],{})).toEqual([]);
  });
  it('should handle SET_DATA', () => {
    const payload = [
      {
        type: 'gif',
        id: 'l4FGtHYMx2faI8bo4',
        slug: 'bbc-bbc-three-3-l4FGtHYMx2faI8bo4',
        url: 'https://giphy.com/gifs/bbc-bbc-three-3-l4FGtHYMx2faI8bo4',
        bitly_gif_url: 'https://gph.is/2ohAJFV',
        bitly_url: 'https://gph.is/2ohAJFV',
        embed_url: 'https://giphy.com/embed/l4FGtHYMx2faI8bo4',
        username: 'bbc',
        source: 'https://www.bbc.co.uk/programmes/p04qm31j',
        rating: 'g',
        content_url: '',
        source_tld: 'www.bbc.co.uk',
        source_post_url: 'https://www.bbc.co.uk/programmes/p04qm31j',
        is_sticker: 0,
        import_datetime: '2017-03-31 15:50:15',
        trending_datetime: '2017-04-03 14:36:45',
        user: {
          avatar_url: 'https://media2.giphy.com/channel_assets/bbc/w9R06mXBId4p.jpg',
          banner_url: '',
          profile_url: 'https://giphy.com/bbc/',
          username: 'bbc',
          display_name: 'BBC',
          is_verified: true
        },
        images: {
          fixed_height_still: {
            url: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/200_s.gif',
            width: '200',
            height: '200',
            size: '13478'
          },
          original_still: {
            url: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/giphy_s.gif',
            width: '480',
            height: '480',
            size: '134175'
          },
          fixed_width: {
            url: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/200w.gif',
            width: '200',
            height: '200',
            size: '63904',
            mp4: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/200w.mp4',
            mp4_size: '27056',
            webp: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/200w.webp',
            webp_size: '70122'
          },
          fixed_height_small_still: {
            url: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/100_s.gif',
            width: '100',
            height: '100',
            size: '5220'
          },
          fixed_height_downsampled: {
            url: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/200_d.gif',
            width: '200',
            height: '200',
            size: '23675',
            webp: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/200_d.webp',
            webp_size: '21372'
          },
          preview: {
            width: '384',
            height: '384',
            mp4: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/giphy-preview.mp4',
            mp4_size: '18692'
          },
          fixed_height_small: {
            url: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/100.gif',
            width: '100',
            height: '100',
            size: '26741',
            mp4: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/100.mp4',
            mp4_size: '9611',
            webp: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/100.webp',
            webp_size: '31766'
          },
          downsized_still: {
            url: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/giphy_s.gif',
            width: '480',
            height: '480',
            size: '134175'
          },
          downsized: {
            url: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/giphy.gif',
            width: '480',
            height: '480',
            size: '244084'
          },
          downsized_large: {
            url: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/giphy.gif',
            width: '480',
            height: '480',
            size: '244084'
          },
          fixed_width_small_still: {
            url: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/100w_s.gif',
            width: '100',
            height: '100',
            size: '5220'
          },
          preview_webp: {
            url: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/giphy-preview.webp',
            width: '480',
            height: '480',
            size: '33280'
          },
          fixed_width_still: {
            url: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/200w_s.gif',
            width: '200',
            height: '200',
            size: '13478'
          },
          fixed_width_small: {
            url: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/100w.gif',
            width: '100',
            height: '100',
            size: '26741',
            mp4: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/100w.mp4',
            mp4_size: '9611',
            webp: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/100w.webp',
            webp_size: '31766'
          },
          downsized_small: {
            width: '480',
            height: '480',
            mp4: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/giphy-downsized-small.mp4',
            mp4_size: '152005'
          },
          fixed_width_downsampled: {
            url: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/200w_d.gif',
            width: '200',
            height: '200',
            size: '23675',
            webp: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/200w_d.webp',
            webp_size: '21372'
          },
          downsized_medium: {
            url: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/giphy.gif',
            width: '480',
            height: '480',
            size: '244084'
          },
          original: {
            url: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/giphy.gif',
            width: '480',
            height: '480',
            size: '244084',
            frames: '66',
            mp4: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/giphy.mp4',
            mp4_size: '118075',
            webp: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/giphy.webp',
            webp_size: '184372',
            hash: '0e756b22eede99e81b043143bac7d217'
          },
          fixed_height: {
            url: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/200.gif',
            width: '200',
            height: '200',
            size: '63904',
            mp4: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/200.mp4',
            mp4_size: '27056',
            webp: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/200.webp',
            webp_size: '70122'
          },
          hd: {
            width: '1080',
            height: '1080',
            mp4: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/giphy-hd.mp4',
            mp4_size: '666137'
          },
          looping: {
            mp4: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/giphy-loop.mp4',
            mp4_size: '395861'
          },
          original_mp4: {
            width: '480',
            height: '480',
            mp4: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/giphy.mp4',
            mp4_size: '118075'
          },
          preview_gif: {
            url: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/giphy-preview.gif',
            width: '480',
            height: '480',
            size: '49791'
          },
          '480w_still': {
            url: 'https://media4.giphy.com/media/l4FGtHYMx2faI8bo4/480w_s.jpg',
            width: '480',
            height: '480'
          }
        },
        title: 'bbc three clique GIF by BBC',
        analytics: {
          onload: {
            url: 'https://giphy-analytics.giphy.com/simple_analytics?response_id=5ce9761f5733314567c92ec7&event_type=GIF_SEARCH&gif_id=l4FGtHYMx2faI8bo4&action_type=SEEN'
          },
          onclick: {
            url: 'https://giphy-analytics.giphy.com/simple_analytics?response_id=5ce9761f5733314567c92ec7&event_type=GIF_SEARCH&gif_id=l4FGtHYMx2faI8bo4&action_type=CLICK'
          },
          onsent: {
            url: 'https://giphy-analytics.giphy.com/simple_analytics?response_id=5ce9761f5733314567c92ec7&event_type=GIF_SEARCH&gif_id=l4FGtHYMx2faI8bo4&action_type=SENT'
          }
        }
      },
      {
        type: 'gif',
        id: '1iTHHR8KaiDyhkHe',
        slug: 'bbcearth-earth-bbc-thehunt-1iTHHR8KaiDyhkHe',
        url: 'https://giphy.com/gifs/bbcearth-earth-bbc-thehunt-1iTHHR8KaiDyhkHe',
        bitly_gif_url: 'https://gph.is/1O5CKWZ',
        bitly_url: 'https://gph.is/1O5CKWZ',
        embed_url: 'https://giphy.com/embed/1iTHHR8KaiDyhkHe',
        username: 'bbcearth',
        source: 'https://www.bbc.com/earth',
        rating: 'g',
        content_url: 'https://www.bbcearth.com',
        source_tld: 'www.bbc.com',
        source_post_url: 'https://www.bbc.com/earth',
        is_sticker: 0,
        import_datetime: '2015-12-16 13:10:22',
        trending_datetime: '2018-12-16 20:30:01',
        user: {
          avatar_url: 'https://media0.giphy.com/avatars/bbcearth/xn4HXyMHWuuN.png',
          banner_url: 'https://media0.giphy.com/headers/bbcearth/hls9qIW2um3s.jpg',
          banner_image: 'https://media0.giphy.com/headers/bbcearth/hls9qIW2um3s.jpg',
          profile_url: 'https://giphy.com/bbcearth/',
          username: 'bbcearth',
          display_name: 'BBC Earth',
          is_verified: true
        },
        images: {
          fixed_height_still: {
            url: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/200_s.gif',
            width: '356',
            height: '200',
            size: '28523'
          },
          original_still: {
            url: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/giphy_s.gif',
            width: '450',
            height: '253',
            size: '56610'
          },
          fixed_width: {
            url: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/200w.gif',
            width: '200',
            height: '112',
            size: '733028',
            mp4: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/200w.mp4',
            mp4_size: '70806',
            webp: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/200w.webp',
            webp_size: '259536'
          },
          fixed_height_small_still: {
            url: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/100_s.gif',
            width: '178',
            height: '100',
            size: '10835'
          },
          fixed_height_downsampled: {
            url: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/200_d.gif',
            width: '356',
            height: '200',
            size: '188374',
            webp: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/200_d.webp',
            webp_size: '107066'
          },
          preview: {
            width: '310',
            height: '174',
            mp4: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/giphy-preview.mp4',
            mp4_size: '33621'
          },
          fixed_height_small: {
            url: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/100.gif',
            width: '178',
            height: '100',
            size: '683377',
            mp4: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/100.mp4',
            mp4_size: '64571',
            webp: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/100.webp',
            webp_size: '210314'
          },
          downsized_still: {
            url: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/giphy-downsized_s.gif',
            width: '450',
            height: '253',
            size: '30651'
          },
          downsized: {
            url: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/giphy-downsized.gif',
            width: '450',
            height: '253',
            size: '1985971'
          },
          downsized_large: {
            url: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/giphy.gif',
            width: '450',
            height: '253',
            size: '2821599'
          },
          fixed_width_small_still: {
            url: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/100w_s.gif',
            width: '100',
            height: '56',
            size: '4073'
          },
          preview_webp: {
            url: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/giphy-preview.webp',
            width: '174',
            height: '98',
            size: '39568'
          },
          fixed_width_still: {
            url: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/200w_s.gif',
            width: '200',
            height: '112',
            size: '13508'
          },
          fixed_width_small: {
            url: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/100w.gif',
            width: '100',
            height: '56',
            size: '203113',
            mp4: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/100w.mp4',
            mp4_size: '24135',
            webp: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/100w.webp',
            webp_size: '83416'
          },
          downsized_small: {
            width: '300',
            height: '168',
            mp4: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/giphy-downsized-small.mp4',
            mp4_size: '70767'
          },
          fixed_width_downsampled: {
            url: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/200w_d.gif',
            width: '200',
            height: '112',
            size: '85707',
            webp: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/200w_d.webp',
            webp_size: '39496'
          },
          downsized_medium: {
            url: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/giphy.gif',
            width: '450',
            height: '253',
            size: '2821599'
          },
          original: {
            url: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/giphy.gif',
            width: '450',
            height: '253',
            size: '2821599',
            frames: '69',
            mp4: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/giphy.mp4',
            mp4_size: '446116',
            webp: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/giphy.webp',
            webp_size: '785888',
            hash: 'dd247bd374747539b0542b138ebc3ab3'
          },
          fixed_height: {
            url: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/200.gif',
            width: '356',
            height: '200',
            size: '1931071',
            mp4: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/200.mp4',
            mp4_size: '211231',
            webp: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/200.webp',
            webp_size: '678212'
          },
          looping: {
            mp4: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/giphy-loop.mp4',
            mp4_size: '1756852'
          },
          original_mp4: {
            width: '480',
            height: '268',
            mp4: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/giphy.mp4',
            mp4_size: '446116'
          },
          preview_gif: {
            url: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/giphy-preview.gif',
            width: '139',
            height: '78',
            size: '47754'
          },
          '480w_still': {
            url: 'https://media2.giphy.com/media/1iTHHR8KaiDyhkHe/480w_s.jpg',
            width: '480',
            height: '270'
          }
        },
        title: 'jumping david attenborough GIF by BBC Earth',
        analytics: {
          onload: {
            url: 'https://giphy-analytics.giphy.com/simple_analytics?response_id=5ce9761f5733314567c92ec7&event_type=GIF_SEARCH&gif_id=1iTHHR8KaiDyhkHe&action_type=SEEN'
          },
          onclick: {
            url: 'https://giphy-analytics.giphy.com/simple_analytics?response_id=5ce9761f5733314567c92ec7&event_type=GIF_SEARCH&gif_id=1iTHHR8KaiDyhkHe&action_type=CLICK'
          },
          onsent: {
            url: 'https://giphy-analytics.giphy.com/simple_analytics?response_id=5ce9761f5733314567c92ec7&event_type=GIF_SEARCH&gif_id=1iTHHR8KaiDyhkHe&action_type=SENT'
          }
        }
      },
      {
        type: 'gif',
        id: '26tP7vexsaMrS4UpO',
        slug: 'bbcearth-earth-bbc-thehunt-26tP7vexsaMrS4UpO',
        url: 'https://giphy.com/gifs/bbcearth-earth-bbc-thehunt-26tP7vexsaMrS4UpO',
        bitly_gif_url: 'https://gph.is/1RRANU2',
        bitly_url: 'https://gph.is/1RRANU2',
        embed_url: 'https://giphy.com/embed/26tP7vexsaMrS4UpO',
        username: 'bbcearth',
        source: 'https://www.bbc.com/earth',
        rating: 'g',
        content_url: 'https://www.bbcearth.com',
        source_tld: 'www.bbc.com',
        source_post_url: 'https://www.bbc.com/earth',
        is_sticker: 0,
        import_datetime: '2015-12-16 13:10:15',
        trending_datetime: '2019-03-06 08:45:01',
        user: {
          avatar_url: 'https://media0.giphy.com/avatars/bbcearth/xn4HXyMHWuuN.png',
          banner_url: 'https://media0.giphy.com/headers/bbcearth/hls9qIW2um3s.jpg',
          banner_image: 'https://media0.giphy.com/headers/bbcearth/hls9qIW2um3s.jpg',
          profile_url: 'https://giphy.com/bbcearth/',
          username: 'bbcearth',
          display_name: 'BBC Earth',
          is_verified: true
        },
        images: {
          fixed_height_still: {
            url: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/200_s.gif',
            width: '356',
            height: '200',
            size: '25904'
          },
          original_still: {
            url: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/giphy_s.gif',
            width: '450',
            height: '253',
            size: '46214'
          },
          fixed_width: {
            url: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/200w.gif',
            width: '200',
            height: '112',
            size: '650428',
            mp4: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/200w.mp4',
            mp4_size: '53270',
            webp: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/200w.webp',
            webp_size: '203406'
          },
          fixed_height_small_still: {
            url: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/100_s.gif',
            width: '178',
            height: '100',
            size: '9320'
          },
          fixed_height_downsampled: {
            url: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/200_d.gif',
            width: '356',
            height: '200',
            size: '167024',
            webp: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/200_d.webp',
            webp_size: '85486'
          },
          preview: {
            width: '260',
            height: '146',
            mp4: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/giphy-preview.mp4',
            mp4_size: '33389'
          },
          fixed_height_small: {
            url: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/100.gif',
            width: '178',
            height: '100',
            size: '556281',
            mp4: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/100.mp4',
            mp4_size: '47921',
            webp: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/100.webp',
            webp_size: '161920'
          },
          downsized_still: {
            url: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/giphy-downsized_s.gif',
            width: '450',
            height: '253',
            size: '33887'
          },
          downsized: {
            url: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/giphy-downsized.gif',
            width: '450',
            height: '253',
            size: '1785683'
          },
          downsized_large: {
            url: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/giphy.gif',
            width: '450',
            height: '253',
            size: '2789652'
          },
          fixed_width_small_still: {
            url: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/100w_s.gif',
            width: '100',
            height: '56',
            size: '3712'
          },
          preview_webp: {
            url: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/giphy-preview.webp',
            width: '164',
            height: '92',
            size: '28520'
          },
          fixed_width_still: {
            url: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/200w_s.gif',
            width: '200',
            height: '112',
            size: '11804'
          },
          fixed_width_small: {
            url: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/100w.gif',
            width: '100',
            height: '56',
            size: '185322',
            mp4: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/100w.mp4',
            mp4_size: '17289',
            webp: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/100w.webp',
            webp_size: '62526'
          },
          downsized_small: {
            width: '232',
            height: '130',
            mp4: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/giphy-downsized-small.mp4',
            mp4_size: '31286'
          },
          fixed_width_downsampled: {
            url: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/200w_d.gif',
            width: '200',
            height: '112',
            size: '68391',
            webp: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/200w_d.webp',
            webp_size: '30946'
          },
          downsized_medium: {
            url: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/giphy.gif',
            width: '450',
            height: '253',
            size: '2789652'
          },
          original: {
            url: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/giphy.gif',
            width: '450',
            height: '253',
            size: '2789652',
            frames: '69',
            mp4: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/giphy.mp4',
            mp4_size: '706195',
            webp: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/giphy.webp',
            webp_size: '834476',
            hash: 'd8665c580548844a6a49b441c1979b5d'
          },
          fixed_height: {
            url: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/200.gif',
            width: '356',
            height: '200',
            size: '1790992',
            mp4: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/200.mp4',
            mp4_size: '197200',
            webp: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/200.webp',
            webp_size: '556892'
          },
          looping: {
            mp4: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/giphy-loop.mp4',
            mp4_size: '2309717'
          },
          original_mp4: {
            width: '480',
            height: '268',
            mp4: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/giphy.mp4',
            mp4_size: '706195'
          },
          preview_gif: {
            url: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/giphy-preview.gif',
            width: '151',
            height: '85',
            size: '49842'
          },
          '480w_still': {
            url: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/480w_s.jpg',
            width: '480',
            height: '270'
          }
        },
        title: 'looking david attenborough GIF by BBC Earth',
        analytics: {
          onload: {
            url: 'https://giphy-analytics.giphy.com/simple_analytics?response_id=5ce9761f5733314567c92ec7&event_type=GIF_SEARCH&gif_id=26tP7vexsaMrS4UpO&action_type=SEEN'
          },
          onclick: {
            url: 'https://giphy-analytics.giphy.com/simple_analytics?response_id=5ce9761f5733314567c92ec7&event_type=GIF_SEARCH&gif_id=26tP7vexsaMrS4UpO&action_type=CLICK'
          },
          onsent: {
            url: 'https://giphy-analytics.giphy.com/simple_analytics?response_id=5ce9761f5733314567c92ec7&event_type=GIF_SEARCH&gif_id=26tP7vexsaMrS4UpO&action_type=SENT'
          }
        }
      },
      {
        type: 'gif',
        id: 'd2Z99CRTQNnEYzmw',
        slug: 'bbcearth-earth-bbc-thehunt-d2Z99CRTQNnEYzmw',
        url: 'https://giphy.com/gifs/bbcearth-earth-bbc-thehunt-d2Z99CRTQNnEYzmw',
        bitly_gif_url: 'https://gph.is/2272zAi',
        bitly_url: 'https://gph.is/2272zAi',
        embed_url: 'https://giphy.com/embed/d2Z99CRTQNnEYzmw',
        username: 'bbcearth',
        source: 'https://www.bbcearth.com',
        rating: 'g',
        content_url: 'https://www.bbcearth.com',
        source_tld: 'www.bbcearth.com',
        source_post_url: 'https://www.bbcearth.com',
        is_sticker: 0,
        import_datetime: '2015-12-16 13:10:28',
        trending_datetime: '2018-01-31 21:22:19',
        user: {
          avatar_url: 'https://media0.giphy.com/avatars/bbcearth/xn4HXyMHWuuN.png',
          banner_url: 'https://media0.giphy.com/headers/bbcearth/hls9qIW2um3s.jpg',
          banner_image: 'https://media0.giphy.com/headers/bbcearth/hls9qIW2um3s.jpg',
          profile_url: 'https://giphy.com/bbcearth/',
          username: 'bbcearth',
          display_name: 'BBC Earth',
          is_verified: true
        },
        images: {
          fixed_height_still: {
            url: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/200_s.gif',
            width: '356',
            height: '200',
            size: '41276'
          },
          original_still: {
            url: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/giphy_s.gif',
            width: '450',
            height: '253',
            size: '87496'
          },
          fixed_width: {
            url: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/200w.gif',
            width: '200',
            height: '112',
            size: '407857',
            mp4: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/200w.mp4',
            mp4_size: '45288',
            webp: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/200w.webp',
            webp_size: '168694'
          },
          fixed_height_small_still: {
            url: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/100_s.gif',
            width: '178',
            height: '100',
            size: '15143'
          },
          fixed_height_downsampled: {
            url: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/200_d.gif',
            width: '356',
            height: '200',
            size: '270658',
            webp: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/200_d.webp',
            webp_size: '137960'
          },
          preview: {
            width: '178',
            height: '100',
            mp4: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/giphy-preview.mp4',
            mp4_size: '19144'
          },
          fixed_height_small: {
            url: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/100.gif',
            width: '178',
            height: '100',
            size: '371341',
            mp4: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/100.mp4',
            mp4_size: '38419',
            webp: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/100.webp',
            webp_size: '139218'
          },
          downsized_still: {
            url: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/giphy-downsized_s.gif',
            width: '450',
            height: '253',
            size: '48603'
          },
          downsized: {
            url: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/giphy-downsized.gif',
            width: '450',
            height: '253',
            size: '1568177'
          },
          downsized_large: {
            url: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/giphy.gif',
            width: '450',
            height: '253',
            size: '2437142'
          },
          fixed_width_small_still: {
            url: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/100w_s.gif',
            width: '100',
            height: '56',
            size: '5263'
          },
          preview_webp: {
            url: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/giphy-preview.webp',
            width: '132',
            height: '74',
            size: '36792'
          },
          fixed_width_still: {
            url: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/200w_s.gif',
            width: '200',
            height: '112',
            size: '15369'
          },
          fixed_width_small: {
            url: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/100w.gif',
            width: '100',
            height: '56',
            size: '118335',
            mp4: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/100w.mp4',
            mp4_size: '14016',
            webp: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/100w.webp',
            webp_size: '52578'
          },
          downsized_small: {
            width: '325',
            height: '182',
            mp4: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/giphy-downsized-small.mp4',
            mp4_size: '56112'
          },
          fixed_width_downsampled: {
            url: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/200w_d.gif',
            width: '200',
            height: '112',
            size: '90669',
            webp: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/200w_d.webp',
            webp_size: '50044'
          },
          downsized_medium: {
            url: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/giphy.gif',
            width: '450',
            height: '253',
            size: '2437142'
          },
          original: {
            url: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/giphy.gif',
            width: '450',
            height: '253',
            size: '2437142',
            frames: '35',
            mp4: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/giphy.mp4',
            mp4_size: '354383',
            webp: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/giphy.webp',
            webp_size: '592174',
            hash: '28782fee2bf84d52a77929b404a695db'
          },
          fixed_height: {
            url: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/200.gif',
            width: '356',
            height: '200',
            size: '1346900',
            mp4: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/200.mp4',
            mp4_size: '141214',
            webp: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/200.webp',
            webp_size: '458062'
          },
          looping: {
            mp4: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/giphy-loop.mp4',
            mp4_size: '2568341'
          },
          original_mp4: {
            width: '480',
            height: '268',
            mp4: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/giphy.mp4',
            mp4_size: '354383'
          },
          preview_gif: {
            url: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/giphy-preview.gif',
            width: '125',
            height: '70',
            size: '47687'
          },
          '480w_still': {
            url: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/480w_s.jpg',
            width: '480',
            height: '270'
          }
        },
        title: 'david attenborough hello GIF by BBC Earth',
        analytics: {
          onload: {
            url: 'https://giphy-analytics.giphy.com/simple_analytics?response_id=5ce9761f5733314567c92ec7&event_type=GIF_SEARCH&gif_id=d2Z99CRTQNnEYzmw&action_type=SEEN'
          },
          onclick: {
            url: 'https://giphy-analytics.giphy.com/simple_analytics?response_id=5ce9761f5733314567c92ec7&event_type=GIF_SEARCH&gif_id=d2Z99CRTQNnEYzmw&action_type=CLICK'
          },
          onsent: {
            url: 'https://giphy-analytics.giphy.com/simple_analytics?response_id=5ce9761f5733314567c92ec7&event_type=GIF_SEARCH&gif_id=d2Z99CRTQNnEYzmw&action_type=SENT'
          }
        }
      },
      {
        type: 'gif',
        id: 'sWQLSdcRTcJKU',
        slug: 'matt-smith-eleventh-doctor-glasses-sWQLSdcRTcJKU',
        url: 'https://giphy.com/gifs/matt-smith-eleventh-doctor-glasses-sWQLSdcRTcJKU',
        bitly_gif_url: 'https://gph.is/17chJZ4',
        bitly_url: 'https://gph.is/17chJZ4',
        embed_url: 'https://giphy.com/embed/sWQLSdcRTcJKU',
        username: '',
        source: 'https://awesomefreshlookz.tumblr.com/post/59255912504',
        rating: 'g',
        content_url: '',
        source_tld: 'awesomefreshlookz.tumblr.com',
        source_post_url: 'https://awesomefreshlookz.tumblr.com/post/59255912504',
        is_sticker: 0,
        import_datetime: '2013-08-25 05:30:13',
        trending_datetime: '2014-10-01 01:20:01',
        images: {
          fixed_height_still: {
            url: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/200_s.gif',
            width: '355',
            height: '200'
          },
          original_still: {
            url: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/giphy_s.gif',
            width: '500',
            height: '282'
          },
          fixed_width: {
            url: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/200w.gif',
            width: '200',
            height: '113',
            size: '65714',
            mp4: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/200w.mp4',
            mp4_size: '17301',
            webp: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/200w.webp',
            webp_size: '77052'
          },
          fixed_height_small_still: {
            url: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/100_s.gif',
            width: '177',
            height: '100'
          },
          fixed_height_downsampled: {
            url: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/200_d.gif',
            width: '355',
            height: '200',
            size: '300770',
            webp: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/200_d.webp',
            webp_size: '133802'
          },
          preview: {
            width: '280',
            height: '156',
            mp4: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/giphy-preview.mp4',
            mp4_size: '29210'
          },
          fixed_height_small: {
            url: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/100.gif',
            width: '177',
            height: '100',
            size: '164533',
            mp4: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/100.mp4',
            mp4_size: '93107',
            webp: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/100.webp',
            webp_size: '60454'
          },
          downsized_still: {
            url: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/giphy-downsized_s.gif',
            width: '500',
            height: '282',
            size: '48445'
          },
          downsized: {
            url: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/giphy-downsized.gif',
            width: '500',
            height: '282',
            size: '509231'
          },
          downsized_large: {
            url: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/giphy.gif',
            width: '500',
            height: '282',
            size: '509231'
          },
          fixed_width_small_still: {
            url: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/100w_s.gif',
            width: '100',
            height: '56'
          },
          preview_webp: {
            url: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/giphy-preview.webp',
            width: '158',
            height: '89',
            size: '47620'
          },
          fixed_width_still: {
            url: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/200w_s.gif',
            width: '200',
            height: '113'
          },
          fixed_width_small: {
            url: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/100w.gif',
            width: '100',
            height: '56',
            size: '65714',
            mp4: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/100w.mp4',
            mp4_size: '44113',
            webp: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/100w.webp',
            webp_size: '25276'
          },
          downsized_small: {
            width: '500',
            height: '282',
            mp4: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/giphy-downsized-small.mp4',
            mp4_size: '158942'
          },
          fixed_width_downsampled: {
            url: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/200w_d.gif',
            width: '200',
            height: '113',
            size: '117161',
            webp: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/200w_d.webp',
            webp_size: '43208'
          },
          downsized_medium: {
            url: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/giphy.gif',
            width: '500',
            height: '282',
            size: '509231'
          },
          original: {
            url: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/giphy.gif',
            width: '500',
            height: '282',
            size: '509231',
            frames: '11',
            mp4: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/giphy.mp4',
            mp4_size: '78826',
            webp: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/giphy.webp',
            webp_size: '464936'
          },
          fixed_height: {
            url: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/200.gif',
            width: '355',
            height: '200',
            size: '164533',
            mp4: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/200.mp4',
            mp4_size: '17621',
            webp: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/200.webp',
            webp_size: '240194'
          },
          looping: {
            mp4: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/giphy-loop.mp4',
            mp4_size: '4857199'
          },
          original_mp4: {
            width: '480',
            height: '270',
            mp4: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/giphy.mp4',
            mp4_size: '78826'
          },
          preview_gif: {
            url: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/giphy-preview.gif',
            width: '149',
            height: '84',
            size: '48673'
          },
          '480w_still': {
            url: 'https://media3.giphy.com/media/sWQLSdcRTcJKU/480w_s.jpg',
            width: '480',
            height: '271'
          }
        },
        title: 'bbc glasses GIF',
        analytics: {
          onload: {
            url: 'https://giphy-analytics.giphy.com/simple_analytics?response_id=5ce9761f5733314567c92ec7&event_type=GIF_SEARCH&gif_id=sWQLSdcRTcJKU&action_type=SEEN'
          },
          onclick: {
            url: 'https://giphy-analytics.giphy.com/simple_analytics?response_id=5ce9761f5733314567c92ec7&event_type=GIF_SEARCH&gif_id=sWQLSdcRTcJKU&action_type=CLICK'
          },
          onsent: {
            url: 'https://giphy-analytics.giphy.com/simple_analytics?response_id=5ce9761f5733314567c92ec7&event_type=GIF_SEARCH&gif_id=sWQLSdcRTcJKU&action_type=SENT'
          }
        }
      }
    ];
    const action = {
      type: SET_DATA,
      payload
    };
    const result = [
      {
        title: 'bbc three clique GIF by BBC',
        image: 'https://media0.giphy.com/media/l4FGtHYMx2faI8bo4/200_s.gif',
        link: 'https://giphy.com/gifs/bbc-bbc-three-3-l4FGtHYMx2faI8bo4'
      },
      {
        title: 'jumping david attenborough GIF by BBC Earth',
        image: 'https://media3.giphy.com/media/1iTHHR8KaiDyhkHe/200_s.gif',
        link: 'https://giphy.com/gifs/bbcearth-earth-bbc-thehunt-1iTHHR8KaiDyhkHe'
      },
      {
        title: 'looking david attenborough GIF by BBC Earth',
        image: 'https://media1.giphy.com/media/26tP7vexsaMrS4UpO/200_s.gif',
        link: 'https://giphy.com/gifs/bbcearth-earth-bbc-thehunt-26tP7vexsaMrS4UpO'
      },
      {
        title: 'david attenborough hello GIF by BBC Earth',
        image: 'https://media2.giphy.com/media/d2Z99CRTQNnEYzmw/200_s.gif',
        link: 'https://giphy.com/gifs/bbcearth-earth-bbc-thehunt-d2Z99CRTQNnEYzmw'
      },
      {
        title: 'bbc glasses GIF',
        image: 'https://media0.giphy.com/media/sWQLSdcRTcJKU/200_s.gif',
        link: 'https://giphy.com/gifs/matt-smith-eleventh-doctor-glasses-sWQLSdcRTcJKU'
      }
    ];
    expect(reducer([],action)).toEqual(result);
  });
}); 

