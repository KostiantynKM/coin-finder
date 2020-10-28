import { createSelector } from 'reselect';


export const arrToMap = (arr) =>
  arr.reduce((acc, item) => ({ ...acc, [item.name]: item }), {});



export const sort = (field,arr) =>{
    return arr.slice().sort((a, b) => {
       return  +b[field] - +a[field]
    })
}


const idSelector = (_, props) => props.id;

export const getById = (selector, defaultValue) =>
  createSelector(
    selector,
    idSelector,
    (entity, id) => entity[id] || defaultValue
  );

export const mapToArray = (selector) => createSelector(selector, Object.keys);


// const sort = (arr,field) =>
//     createSelector(
//         (_, arr) => arr,
//         (field) => field,
//         (arr,field) =>{
//             console.log(field,"update",arr)
//             return arr.slice().sort((a, b) =>{
//                 return a[field] > b[field] ? -1 : 1
//             });
//         }
//     );