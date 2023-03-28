import React from 'react'

function Card() {
  return (
    <div>
        <div>
                <div className="card mt-3" style={{width: '18rem',maxHeight:'360px'}}>
                <img src="https://media.istockphoto.com/id/697316634/photo/spicy-paneer-or-chilli-paneer-or-paneer-tikka-or-cottage-cheese-served-in-white-dish-with.jpg?s=612x612&w=0&k=20&c=PRN-OSzxCma_aAR8-DCMpOHP5XePk6mzzhB-zG4tGrg=" class="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">d title and make up the bulk of the card's content.</p>
                <div className='container w-100'>
                    <select className='m-2 h-100  bg-success rounded'>
                        {Array.from(Array(6),(e,i)=>{
                            return(
                         <option key={i+1} value={i+1}>{i+1}</option>
                             )
                            })}
                    </select>
                    <select className='m-2 h-100 bg-success rounded'>
                        <option value="half">Half</option>
                        <option value="full">Full</option>
                    </select>
                     <div className='d-inline h-100 fs-5'>
                         Total Price
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
  )
}

export default Card