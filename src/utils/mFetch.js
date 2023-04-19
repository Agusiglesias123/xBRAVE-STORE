/* eslint-disable no-unused-vars */

let productos = [
    { id: '1', nombre: 'Remera Brave', precio: '1000', stock:'2', categoria: 'remeras', foto : '../assets/1'},
    { id: '2', nombre: 'pantalon Brave', precio: '2000', stock:'2', categoria: 'remeras', foto : '../assets/2'},
    { id: '3', nombre: 'medias xxBrave', precio: '3000', stock:'2', categoria: 'accesorios', foto : '../assets/3'},
    { id: '4', nombre: 'short xbrave', precio: '4000', stock:'2', categoria: 'remeras', foto : '../assets/4'},
    { id: '5', nombre: 'ojotas Brave', precio: '1000', stock:'2', categoria: 'accesorios', foto : '../assets/1'},
    { id: '6', nombre: 'chupin Brave', precio: '2000', stock:'2', categoria: 'remeras', foto : '../assets/2'},
    { id: '7', nombre: 'musculosa xxBrave', precio: '3000', stock:'2', categoria: 'accesorios', foto : '../assets/3'},
    { id: '8', nombre: 'maya xbrave', precio: '4000', stock:'2', categoria: 'accesorios', foto : '../assets/4'},
];


export const mFetch = ()=>{
    return new Promise((resolve, rej)=>{
  
        
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    })
  };