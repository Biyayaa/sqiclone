import React from 'react'
import sqimodel from "./images/sqimodel.png";

function SectionOne() {
    return (
        <>
            <div className='content-1 mb-4'>
                <div className='d-flex align-items-center w-100'>
                    <div className='study me-5'>
                        <h1>Study to become a global talent</h1>
                        <p>Learn new tech skills using world-class curriculum and top industry experts.</p>
                        <a href='' className='a-link'>
                            <button className='d-flex align-items-center justify-content-center'>
                                <h6 className='mt-1'>Start Now</h6>
                            </button>
                        </a>
                    </div>
                    <div className='w-50'>
                        <img src={sqimodel} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionOne