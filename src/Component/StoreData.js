import React from 'react'
import ShowData from './ShowData'
import {connect} from 'react-redux'

const StoreData = (props) => {
    return(  
        
        <div className="Data">
             {
                   props.InstaList.map((e, i)=>  {
                       return <ShowData instaListItems={e} key = {i}/>
                   })      
             }         
        </div>
        
    )
}

const mapsToStoreProps = (store) => {
    console.log(store.Reducer1);
    return {userData : store.Reducer1}
} 

  export default connect(mapStoreToProps)(StoreData);