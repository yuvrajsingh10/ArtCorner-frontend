const gettokenFromLocatStorage = localStorage.getItem('user')
?JSON.parse(localStorage.getItem('user')):null;

export const config ={
    headers:{
        Authorization:  `Bearer ${
            gettokenFromLocatStorage !==null ?localStorage.getItem('token'):""
        }`,
        Accept:"application/json",
    }
}