let state = {

        contentPage : {
            comentDb : [
                {name : 'Aikyn', status : 'Kazak'},
                {name : 'Talgat', status: 'Kazak'},
                {name : 'Arman', status : 'Canada'},
                {name : 'Aibol', status : 'Kazak'},
                {name : 'Frege', status : 'Shwed'},
                {name : 'Aibol', status : 'German'}  
              ],
        },

        chatPage : {

        }
}

export let textDb = (nameTable) => {
  let objall = {
    name : nameTable,
    status : 'Aktobe'
  
  }

  state.contentPage.comentDb.push(objall);
}

export default state;