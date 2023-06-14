import React from 'react'
// import ArrowRight from './images/arrow-right.png'

function SectionTwo() {
  return (
    <>
        <div className='content-2'>
            <div className='w-100 d-flex align-items-center'>
                <div className='w-50 me-5'></div>
                <div className='w-50'>
                    <div className='inner-content text-white'>
                        <h3>SCICT AT A GLANCE</h3>
                        <p>SQI College of ICT offers both <a href="#" className='a-link'>National Diploma</a> and <a href="#" className='a-link'>Professional Certificate programmes</a>.</p>
                        <p>The diploma Certificate conforms with the standard National Diploma Certificate obtained in Polytechnics while the Professional certificate is the certificate you earn after taking a professional course here at SQI.</p>
                        <p>You can use the Diploma certificate to seek admissions into the University through Direct Entry or for Higher National Diploma (HND). While the professional Certificate is recognized worldwide not as a degree but as a proof of having undergone professional training in the field for which the certificate is issued.</p>
                        <div className='mt-4'>
                            <button className='d-flex align-items-center justify-content-center text-white learn-btn rounded px-3'>
                                <h5 className='mt-1'>Learn More</h5>
                                <div className='arrow'>
                                    {/* <img src={ArrowRight} alt="" className='w-100'/> */}
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SectionTwo