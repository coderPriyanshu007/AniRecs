

const AnimeStatus = ({status}) =>{
    return  (
            <p className='text-xs mb-2 font-bold'>
                Status : &nbsp; 
                {status==='RELEASING' 
                ? (<span className="text-green-500">Ongoing</span>)
                  : (status==='NOT_YET_RELEASED'
                    ? 
                      (<span className="text-yellow-500">Not Aired Yet</span>)
                        : 
                          <span className="text-blue-400">Finished</span>) 
                }
                  </p>
                )
    

}


export default  AnimeStatus;