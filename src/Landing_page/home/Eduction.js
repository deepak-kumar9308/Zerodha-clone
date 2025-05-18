import React from 'react';

function Education() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img
                        src='media/education.svg'
                        alt='varsity image'
                        style={{ width: '70%' }}
                    />
                </div>
                <div className='col-6'>
                    <h2 className='mb-3 fs-2'>Free and open market education</h2>
                    <p className='mb-3'>
                        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <a href='#' className='mb-3 d-block' style={{ textDecoration: 'none' }}>
                        Varsity <i className='fa fa-long-arrow-right' aria-hidden='true'></i>
                    </a>

                    <p className='mb-2 mt-3'>
                        TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                    <a href='#' className='mb-3 d-block' style={{ textDecoration: 'none' }}>
                        TradingQ&A <i className='fa fa-long-arrow-right' aria-hidden='true'></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Education;
