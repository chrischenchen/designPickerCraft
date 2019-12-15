var filter_example = new Vue({
        el: '#filter_example',
        data: {
            filter:'all',
            items: [
              { vtype: 'cat',vimg: 'cat1.jpg'},
              { vtype: 'cat',vimg: 'cat2.jpg'},
              { vtype: 'dog',vimg: 'dog1.jpg' },
              { vtype: 'rabbit',vimg: 'rabbit1.jpg' }
            ],
            checkedNames: []
        }
    })